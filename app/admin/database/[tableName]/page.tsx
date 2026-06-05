import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/get-query-client";
import {
  tableDataQuery,
  defaultTableDataParams,
} from "./behaviors/view-table/view-table.query";
import { TableViewContent } from "./table-view-content";

// Server Component: prefetch the first page of the selected table and hydrate
// the client so rows render without a loading flash.
export default async function TableViewPage({
  params,
}: {
  params: Promise<{ tableName: string }>;
}) {
  const { tableName } = await params;

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(
    tableDataQuery(tableName, defaultTableDataParams)
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TableViewContent />
    </HydrationBoundary>
  );
}
