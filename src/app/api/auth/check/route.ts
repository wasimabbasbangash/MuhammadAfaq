import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const PASSWORD_FILE = path.join(process.cwd(), "data", "admin-auth.json");

export async function GET() {
  try {
    const isSetup = fs.existsSync(PASSWORD_FILE);
    return NextResponse.json({ isSetup });
  } catch (error) {
    console.error("Check auth error:", error);
    return NextResponse.json({ isSetup: false }, { status: 500 });
  }
}
