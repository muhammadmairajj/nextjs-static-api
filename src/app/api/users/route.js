import { NextResponse } from "next/server";
import userDb from "../../utils/db";

export const GET = (req, res) => {
  const users = userDb;
  return NextResponse.json(users, { status: 200 });
};

export const POST = async (req, res) => {
  const payload = await req.json();
  console.log(payload);

  if (
    !payload.firstName ||
    !payload.lastName ||
    !payload.email ||
    !payload.username ||
    !payload.phone ||
    !payload.age ||
    !payload.gender
  ) {
    return NextResponse.json(
      { message: "required the field", success: false },
      { status: 400 }
    );
  }
  return NextResponse.json(
    { message: "New User Created", success: true },
    { status: 201 }
  );
};
