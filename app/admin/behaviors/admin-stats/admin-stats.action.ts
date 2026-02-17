"use server";

import { getUser } from "@/lib/auth";
import { UserModel } from "@/shared/models/user";

export async function getAdminStats() {
  const { user } = await getUser();

  if (!user || user.role !== "admin") {
    throw new Error("Unauthorized");
  }

  return UserModel.stats();
}
