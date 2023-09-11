import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { name, email, password } = await request.json();

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword: password,
    },
  });

  return NextResponse.json({ message: "User created", user });
}
