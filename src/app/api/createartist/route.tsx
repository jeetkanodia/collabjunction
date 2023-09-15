import prisma from "../../helpers/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    category,
    socialHandles,
    name,
    contactNumber,
    officialEmail,
    alternateEmail,
    feedback,
  } = await request.json();

  if (!name || !category || !contactNumber || !officialEmail) {
    throw new Error("Please fill all the required fields");
  }

  const exist = await prisma.Artist.findUnique({
    where: {
      OfficialEmail: officialEmail,
    },
  });
  if (exist) {
    throw new Error("Same email already in use");
  }
  const exist2 = await prisma.Artist.findUnique({
    where: {
      ContactNumber: contactNumber,
    },
  });
  if (exist2) {
    throw new Error("Same contact number already in use");
  }

  const user = await prisma.user.update({
    where: {
      email: officialEmail,
    },
    data: {
      Artist: {
        create: {
          category,
          Name: name,
          OfficialEmail: officialEmail,
          AlternateEmail: alternateEmail,
          ContactNumber: contactNumber,
          SocialHandles: socialHandles,
          Feedback: feedback,
        },
      },
    },
  });

  return NextResponse.json({ message: "User created", user });
}
