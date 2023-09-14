import prisma from "../../helpers/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    category,
    collegeName,
    address,
    website,
    socialHandles,
    name,
    contactNumber,
    officialEmail,
    alternateEmail,
    feedback,
  } = await request.json();

  if (
    !name ||
    !address ||
    !collegeName ||
    !category ||
    !contactNumber ||
    !officialEmail ||
    !feedback
  ) {
    throw new Error("Please fill all the required fields");
  }

  const exist = await prisma.Student.findUnique({
    where: {
      OfficialEmail: officialEmail,
    },
  });
  if (exist) {
    throw new Error("Same email already in use");
  }
  const exist2 = await prisma.Student.findUnique({
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
      Student: {
        create: {
          category,
          CollegeName: collegeName,
          Address: address,
          Website: website,
          SocialHandles: socialHandles,
          Name: name,
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
