import { queryOptions } from "@tanstack/react-query";
import {
  fetchTableData,
  type FetchTableDataResult,
} from "./fetch-table-data.action";
import type { SortState } from "../../state";

export const TABLE_DATA_LIMIT = 10;

export interface TableDataParams {
  page: number;
  sort: SortState | null;
  filter: string;
}

// Default params for the server prefetch; must match the client's initial
// state (localPage 1, sortAtom null, filterAtom "").
export const defaultTableDataParams: TableDataParams = {
  page: 1,
  sort: null,
  filter: "",
};

export const tableDataKeys = {
  all: ["table-data"] as const,
  table: (tableName: string) => [...tableDataKeys.all, tableName] as const,
  list: (tableName: string, params: TableDataParams) =>
    [...tableDataKeys.table(tableName), params] as const,
};

export function tableDataQuery(tableName: string, params: TableDataParams) {
  return queryOptions({
    queryKey: tableDataKeys.list(tableName, params),
    queryFn: (): Promise<FetchTableDataResult> =>
      fetchTableData({
        tableName,
        page: params.page,
        limit: TABLE_DATA_LIMIT,
        sort: params.sort ?? undefined,
        filter: params.filter || undefined,
      }),
  });
}
