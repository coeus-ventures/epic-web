import { queryOptions } from "@tanstack/react-query";
import { fetchTables } from "./fetch-tables.action";

export const tablesKeys = {
  all: ["tables"] as const,
};

export function listTablesQuery() {
  return queryOptions({
    queryKey: tablesKeys.all,
    queryFn: () => fetchTables(),
  });
}
