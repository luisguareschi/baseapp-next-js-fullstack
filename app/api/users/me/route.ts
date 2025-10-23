import { getCurrentUserService } from "@/services/users/getCurrentUserService";
import { NextRequest } from "next/server";

/**
 * Get current user information
 * @description Fetches current user information
 * @response MeResponse
 */
export async function GET(req: NextRequest) {
  return getCurrentUserService(req);
}
