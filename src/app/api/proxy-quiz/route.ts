import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  const res = await axios.get(
    `${process.env.BASE_URL}/api/computer/testcomputer`,
    {
      auth: {
        username: process.env.API_USERNAME!,
        password: process.env.API_PASSWORD!,
      },
    }
  );
  return NextResponse.json(res.data);
}
