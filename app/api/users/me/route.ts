import { protectedSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const MeResponse = z.object({
  user: z.object({
    id: z.string(),
    email: z.string(),
    name: z.string(),
    image: z.string().optional(),
  }),
});

/**
 * Get current user information
 * @description Fetches current user information
 * @response MeResponse
 */
export async function GET(req: NextRequest) {
  const { session, unauthorizedResponse } = await protectedSession(req);

  if (!session) {
    return unauthorizedResponse;
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({
    user,
  });
}
