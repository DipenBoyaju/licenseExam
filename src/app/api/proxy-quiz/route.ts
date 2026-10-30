import { NextResponse } from "next/server";
import axios from "axios";
import { BACKEND_URL } from "@/app/constant/constant";

export async function GET() {
  try {
    const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || BACKEND_URL).replace(/\/+$/, "");
    const endpoint = baseUrl.endsWith("/api")
      ? `${baseUrl}/computer/testcomputer`
      : `${baseUrl}/api/computer/testcomputer`;

    const username = process.env.API_USERNAME || process.env.NEXT_PUBLIC_API_USER;
    const password = process.env.API_PASSWORD || process.env.NEXT_PUBLIC_API_PASS;

    const res = await axios.get(endpoint, {
      auth: username && password ? { username, password } : undefined,
      timeout: 8000,
    });
    return NextResponse.json(res.data);
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error?.message || "Failed to reach backend",
        status: error?.response?.status || 500,
      },
      { status: error?.response?.status || 500 }
    );
  }
}
