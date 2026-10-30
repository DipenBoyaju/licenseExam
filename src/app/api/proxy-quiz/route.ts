import { NextResponse } from "next/server";
import axios from "axios";
import { BACKEND_URL } from "@/app/constant/constant";
import { testEndpointMap, mapFacultyToKey } from "@/services/quizService";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const facultyParam = searchParams.get("faculty") || "computer";
    const action = searchParams.get("action");

    const rawBase = (
      process.env.NEXT_PUBLIC_API_URL ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      BACKEND_URL
    ).replace(/\/+$/, "");

    const apiBase = rawBase.endsWith("/api") ? rawBase : `${rawBase}/api`;
    const activeFaculty = mapFacultyToKey(facultyParam);

    let endpoint = "";
    if (action === "time") {
      endpoint = `${apiBase}/${activeFaculty}/newtesttime`;
    } else if (action === "all") {
      endpoint = `${apiBase}/${activeFaculty}`;
    } else {
      const path = testEndpointMap[activeFaculty] || `/${activeFaculty}/test${activeFaculty}`;
      endpoint = `${apiBase}${path}`;
    }

    const username =
      process.env.NEXT_PUBLIC_API_USERNAME ||
      process.env.BASIC_AUTH_USERNAME ||
      process.env.API_USERNAME ||
      process.env.NEXT_PUBLIC_API_USER ||
      "admin";

    const password =
      process.env.NEXT_PUBLIC_API_PASSWORD ||
      process.env.BASIC_AUTH_PASSWORD ||
      process.env.API_PASSWORD ||
      process.env.NEXT_PUBLIC_API_PASS ||
      "password";

    const res = await axios.get(endpoint, {
      auth: {
        username,
        password,
      },
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 10000,
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
