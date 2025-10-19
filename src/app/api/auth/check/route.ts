import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const isSetup = !!process.env.ADMIN_PASSWORD_HASH;
    return NextResponse.json({ isSetup });
  } catch (error) {
    console.error("Check auth error:", error);
    return NextResponse.json({ isSetup: false }, { status: 500 });
  }
}
