import { getUsersService } from "@/services/users/getUsers";
import { NextRequest } from "next/server";

/**
 * Get all users
 * @description Fetches all users
 * @response GetUsersReponse
 */
export async function GET(req: NextRequest) {
  return getUsersService(req);
}
