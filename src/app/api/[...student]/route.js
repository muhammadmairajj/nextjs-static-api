import { NextResponse } from "next/server";

export const GET = (req, content) => {
    console.log(content);
    const studentDetails = content.params.student;
    return NextResponse.json({ result: studentDetails, success: true }, { status: 200 });
}