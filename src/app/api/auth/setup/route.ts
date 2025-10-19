import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";

const PASSWORD_FILE = path.join(process.cwd(), "data", "admin-auth.json");

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    if (!password || typeof password !== "string" || password.length < 6) {
      return NextResponse.json(
        {
          success: false,
          message: "Password must be at least 6 characters long",
        },
        { status: 400 }
      );
    }

    // Hash the password
    const saltRounds = 12;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const authData = {
      passwordHash,
      createdAt: new Date().toISOString(),
    };

    // Ensure directory exists
    const dir = path.dirname(PASSWORD_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Save auth data
    fs.writeFileSync(PASSWORD_FILE, JSON.stringify(authData, null, 2));

    return NextResponse.json({
      success: true,
      message: "Admin account created successfully",
    });
  } catch (error) {
    console.error("Setup error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create admin account" },
      { status: 500 }
    );
  }
}
