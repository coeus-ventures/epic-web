"use client";

import { useAtom } from "jotai";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { dialogAtom } from "../../state";
import { tableDataKeys } from "../view-table/view-table.query";
import type { FetchTableDataResult } from "../view-table/fetch-table-data.action";
import { updateRow } from "./update-row.action";
import { toast } from "sonner";

interface EditVariables {
  id: string | number;
  data: Record<string, unknown>;
  mode: "row" | "cell";
}

export function useEditRow(tableName: string) {
  const queryClient = useQueryClient();
  const [dialog, setDialog] = useAtom(dialogAtom);

  const isDialogOpen = dialog.type === "edit";
  const selectedRow = dialog.type === "edit" ? dialog.row : null;

  const mutation = useMutation({
    mutationFn: ({ id, data }: EditVariables) =>
      updateRow({ tableName, id, data }),
    onMutate: async ({ id, data }) => {
      await queryClient.cancelQueries({
        queryKey: tableDataKeys.table(tableName),
      });
      const previous = queryClient.getQueriesData<FetchTableDataResult>({
        queryKey: tableDataKeys.table(tableName),
      });
      queryClient.setQueriesData<FetchTableDataResult>(
        { queryKey: tableDataKeys.table(tableName) },
        (old) =>
          old
            ? {
                ...old,
                rows: old.rows.map((row) =>
                  row.id === id ? { ...row, ...data, _pending: true } : row
                ),
              }
            : old
      );
      return { previous };
    },
    onSuccess: (updatedRow, { id, mode }) => {
      queryClient.setQueriesData<FetchTableDataResult>(
        { queryKey: tableDataKeys.table(tableName) },
        (old) =>
          old
            ? {
                ...old,
                rows: old.rows.map((row) =>
                  row.id === id ? { ...updatedRow, _pending: false } : row
                ),
              }
            : old
      );
      if (mode === "row") {
        setDialog({ type: null, row: null, isDuplicate: false });
        toast.success("Row updated successfully");
      } else {
        toast.success("Cell updated successfully");
      }
    },
    onError: (err, { mode }, context) => {
      context?.previous?.forEach(([key, data]) =>
        queryClient.setQueryData(key, data)
      );
      const fallback =
        mode === "row" ? "Failed to update row" : "Failed to update cell";
      toast.error(err instanceof Error ? err.message : fallback);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: tableDataKeys.table(tableName) });
    },
  });

  // Edit entire row via dialog
  const handleEditRow = (data: Record<string, unknown>) => {
    if (!selectedRow?.id) return Promise.resolve(undefined);
    return mutation.mutateAsync({
      id: selectedRow.id as string | number,
      data,
      mode: "row",
    });
  };

  // Edit single cell inline
  const handleEditCell = (
    rowId: string | number,
    column: string,
    value: unknown
  ) => mutation.mutateAsync({ id: rowId, data: { [column]: value }, mode: "cell" });

  const handleOpenDialog = (row: Record<string, unknown>) => {
    setDialog({ type: "edit", row, isDuplicate: false });
  };

  const handleCloseDialog = () => {
    setDialog({ type: null, row: null, isDuplicate: false });
  };

  return {
    handleEditRow,
    handleEditCell,
    handleOpenDialog,
    handleCloseDialog,
    isDialogOpen,
    selectedRow,
    isLoading: mutation.isPending,
    error: mutation.error ? mutation.error.message : null,
  };
}
