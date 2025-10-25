import { getUserService } from "@/services/users/getUserService";
import { NextRequest } from "next/server";

/**
 * Get user by ID
 * @description Fetches user information by ID
 * @pathParams GetUserPathParams
 * @response GetUserResponse
 */
export async function GET(req: NextRequest, { params }: any) {
  return getUserService(req, { params });
}
