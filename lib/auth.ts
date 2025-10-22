import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
});

export const protectedSession = async (req: NextRequest) => {
  const session = await auth.api.getSession({
    headers: req.headers,
  });
  let unauthorizedResponse: NextResponse | null = null;

  if (!session) {
    unauthorizedResponse = NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 },
    );
  }

  return {
    session,
    unauthorizedResponse,
  };
};
