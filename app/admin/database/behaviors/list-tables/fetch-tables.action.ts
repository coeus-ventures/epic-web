"use server";

import { getUser } from "@/lib/auth";
import {
  getTableNames,
  getTableRowCount,
} from "../../lib/schema-introspection";

export interface TableInfo {
  name: string;
  rowCount: number;
}

export async function fetchTables(): Promise<TableInfo[]> {
  const { user } = await getUser();
  if (!user) throw new Error("Unauthorized - please sign in");
  if (user.role !== "admin") throw new Error("Forbidden - admin role required");
  const tableNames = getTableNames();

  const tables: TableInfo[] = await Promise.all(
    tableNames.map(async (name) => ({
      name,
      rowCount: await getTableRowCount(name),
    }))
  );

  return tables;
}
