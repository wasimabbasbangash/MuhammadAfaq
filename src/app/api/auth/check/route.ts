import { NextRequest, NextResponse } from "next/server";
import { getAdminAuth, initializeDatabase } from "@/lib/database";

export async function GET() {
  try {
    // Initialize database if needed
    await initializeDatabase();

    const adminAuth = await getAdminAuth();
    const isSetup = !!adminAuth;
    return NextResponse.json({ isSetup });
  } catch (error) {
    console.error("Check auth error:", error);
    return NextResponse.json({ isSetup: false }, { status: 500 });
  }
}
