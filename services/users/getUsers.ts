import { protectedSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const GetUsersReponse = z.array(
  z.object({
    id: z.string(),
    email: z.email(),
    username: z.string().nullable(),
    name: z.string(),
  }),
);

export const getUsersService = async (req: NextRequest) => {
  const { unauthorizedResponse } = await protectedSession(req);

  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }

  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      username: true,
      name: true,
    },
  });

  try {
    const result = GetUsersReponse.parse(users);
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Invalid users data" }, { status: 400 });
  }
};
