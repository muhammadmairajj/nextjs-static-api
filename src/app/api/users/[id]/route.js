import { NextResponse } from "next/server";
import userDb from "../../../utils/db";

export const GET = (req, content) => {
  // console.log(content.params.id);
  const users = userDb.users;
  // console.log(users);
  const userData = users.filter((item) => item.id.toString() === content.params.id);
//   console.log(userData);
  return NextResponse.json(
    userData.length === 0
      ? { result: "No Data Found", success: false }
      : { result: userData[0], success: true },
    { status: 200 }
  );
};


export const PUT = async (req, content) => {
  let payload = await req.json();
  // console.log(payload);
  payload.id = content.params.id;
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
    { message: "User Updated", success: true },
    { status: 201 }
  );
}

export const DELETE = (req, content) => {
  const users = userDb.users;
  users.filter((item) => item.id !== content.params.id);
  
  return NextResponse.json({ message: 'User Successfully Deleted' }, { status: 200 })
}  