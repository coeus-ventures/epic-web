"use client";

import { useQuery } from "@tanstack/react-query";
import { listTablesQuery } from "./list-tables.query";

export function useListTables() {
  const query = useQuery(listTablesQuery());

  return {
    tables: query.data ?? [],
    isLoading: query.isPending,
    error: query.error ? (query.error as Error).message : null,
    handleRefresh: () => query.refetch(),
  };
}
