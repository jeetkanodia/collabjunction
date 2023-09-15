import prisma from "../../helpers/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    category,
    companyName,
    Address,
    website,
    socialHandles,
    name,
    Designation,
    contactNumber,
    officialEmail,
    alternateEmail,
    feedback,
  } = await request.json();

  if (
    !name ||
    !category ||
    !Address ||
    !Designation ||
    !contactNumber ||
    !officialEmail
  ) {
    throw new Error("Please fill all the required fields");
  }

  const exist = await prisma.Sponser.findUnique({
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
      Sponser: {
        create: {
          category,
          CompanyName: companyName,
          Address,
          Website: website,
          Name: name,
          Designation,
          SocialHandles: socialHandles,
          ContactNumber: contactNumber,
          OfficialEmail: officialEmail,
          AlternateEmail: alternateEmail,
          Feedback: feedback,
        },
      },
    },
  });

  return NextResponse.json({ message: "User created", user });
}
