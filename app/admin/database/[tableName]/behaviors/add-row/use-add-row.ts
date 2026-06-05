"use client";

import { useAtom } from "jotai";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { dialogAtom } from "../../state";
import {
  tableDataKeys,
} from "../view-table/view-table.query";
import type { FetchTableDataResult } from "../view-table/fetch-table-data.action";
import { insertRow } from "./insert-row.action";
import { toast } from "sonner";

export function useAddRow(tableName: string) {
  const queryClient = useQueryClient();
  const [dialog, setDialog] = useAtom(dialogAtom);

  const isDialogOpen = dialog.type === "add";
  const isDuplicate = dialog.isDuplicate;
  const duplicateRow = isDuplicate ? dialog.row : null;

  const mutation = useMutation({
    mutationFn: ({ data }: { data: Record<string, unknown>; tempId: string }) =>
      insertRow({ tableName, data }),
    onMutate: async ({ data, tempId }) => {
      await queryClient.cancelQueries({
        queryKey: tableDataKeys.table(tableName),
      });
      const previous = queryClient.getQueriesData<FetchTableDataResult>({
        queryKey: tableDataKeys.table(tableName),
      });
      const optimisticRow = { ...data, id: tempId, _pending: true };
      queryClient.setQueriesData<FetchTableDataResult>(
        { queryKey: tableDataKeys.table(tableName) },
        (old) =>
          old
            ? {
                ...old,
                rows: [optimisticRow, ...old.rows],
                total: old.total + 1,
              }
            : old
      );
      return { previous };
    },
    onSuccess: (newRow, { tempId }) => {
      queryClient.setQueriesData<FetchTableDataResult>(
        { queryKey: tableDataKeys.table(tableName) },
        (old) =>
          old
            ? {
                ...old,
                rows: old.rows.map((row) =>
                  row.id === tempId ? { ...newRow, _pending: false } : row
                ),
              }
            : old
      );
      setDialog({ type: null, row: null, isDuplicate: false });
      toast.success("Row added successfully");
    },
    onError: (err, _vars, context) => {
      context?.previous?.forEach(([key, data]) =>
        queryClient.setQueryData(key, data)
      );
      toast.error(err instanceof Error ? err.message : "Failed to add row");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: tableDataKeys.table(tableName) });
    },
  });

  const handleAddRow = (data: Record<string, unknown>) =>
    mutation.mutateAsync({ data, tempId: `temp-${Date.now()}` });

  const handleOpenDialog = (initialData?: Record<string, unknown>) => {
    if (initialData) {
      // Remove id for duplication
      const rest = { ...initialData };
      delete rest.id;
      setDialog({
        type: "add",
        row: rest as Record<string, unknown> & { _pending?: boolean },
        isDuplicate: true,
      });
    } else {
      setDialog({ type: "add", row: null, isDuplicate: false });
    }
  };

  const handleCloseDialog = () => {
    setDialog({ type: null, row: null, isDuplicate: false });
  };

  return {
    handleAddRow,
    handleOpenDialog,
    handleCloseDialog,
    isDialogOpen,
    isDuplicate,
    duplicateRow,
    isLoading: mutation.isPending,
    error: mutation.error ? mutation.error.message : null,
  };
}
