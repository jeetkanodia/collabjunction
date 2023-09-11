import bcrypt from "bcrypt";
import prisma from "../../helpers/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    return NextResponse("Missing name, email or password", { status: 400 });
  }

  const exist = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (exist) {
    throw new Error("email already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  return NextResponse.json({ message: "User created", user });
}
