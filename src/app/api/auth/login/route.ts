import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";

const PASSWORD_FILE = path.join(process.cwd(), "data", "admin-auth.json");

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    if (!password || typeof password !== "string") {
      return NextResponse.json(
        { success: false, message: "Password is required" },
        { status: 400 }
      );
    }

    // Check if auth file exists
    if (!fs.existsSync(PASSWORD_FILE)) {
      return NextResponse.json(
        { success: false, message: "Admin account not set up" },
        { status: 400 }
      );
    }

    // Read auth data
    const authData = JSON.parse(fs.readFileSync(PASSWORD_FILE, "utf-8"));

    // Verify password
    const isValid = await bcrypt.compare(password, authData.passwordHash);

    if (!isValid) {
      return NextResponse.json(
        { success: false, message: "Invalid password" },
        { status: 401 }
      );
    }

    // Update last login
    authData.lastLogin = new Date().toISOString();
    fs.writeFileSync(PASSWORD_FILE, JSON.stringify(authData, null, 2));

    return NextResponse.json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, message: "Login failed" },
      { status: 500 }
    );
  }
}
