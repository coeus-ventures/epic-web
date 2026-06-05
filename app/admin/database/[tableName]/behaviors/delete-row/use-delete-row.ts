"use client";

import { useAtom } from "jotai";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { dialogAtom, type TableRow } from "../../state";
import { tableDataKeys } from "../view-table/view-table.query";
import type { FetchTableDataResult } from "../view-table/fetch-table-data.action";
import { deleteRow } from "./delete-row.action";
import { toast } from "sonner";

export function useDeleteRow(tableName: string) {
  const queryClient = useQueryClient();
  const [dialog, setDialog] = useAtom(dialogAtom);

  const isDialogOpen = dialog.type === "delete";
  const selectedRow = dialog.type === "delete" ? dialog.row : null;

  const mutation = useMutation({
    mutationFn: (id: string | number) => deleteRow({ tableName, id }),
    onMutate: async (id: string | number) => {
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
                rows: old.rows.filter((row) => row.id !== id),
                total: Math.max(0, old.total - 1),
              }
            : old
      );
      return { previous };
    },
    onSuccess: () => {
      setDialog({ type: null, row: null, isDuplicate: false });
      toast.success("Row deleted successfully");
    },
    onError: (err, _id, context) => {
      context?.previous?.forEach(([key, data]) =>
        queryClient.setQueryData(key, data)
      );
      toast.error(err instanceof Error ? err.message : "Failed to delete row");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: tableDataKeys.table(tableName) });
    },
  });

  const handleDeleteRow = (id: string | number) => mutation.mutateAsync(id);

  const handleOpenDialog = (row: TableRow) => {
    setDialog({ type: "delete", row, isDuplicate: false });
  };

  const handleCloseDialog = () => {
    setDialog({ type: null, row: null, isDuplicate: false });
  };

  return {
    handleDeleteRow,
    handleOpenDialog,
    handleCloseDialog,
    isDialogOpen,
    selectedRow,
    isLoading: mutation.isPending,
    error: mutation.error ? mutation.error.message : null,
  };
}
