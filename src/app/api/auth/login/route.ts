import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    if (!password || typeof password !== "string") {
      return NextResponse.json(
        { success: false, message: "Password is required" },
        { status: 400 }
      );
    }

    // Check if admin password is set up
    const storedHash = process.env.ADMIN_PASSWORD_HASH;
    if (!storedHash) {
      return NextResponse.json(
        { success: false, message: "Admin account not set up" },
        { status: 400 }
      );
    }

    // Verify password
    const isValid = await bcrypt.compare(password, storedHash);

    if (!isValid) {
      return NextResponse.json(
        { success: false, message: "Invalid password" },
        { status: 401 }
      );
    }

    // Update last login in environment (this is temporary for the session)
    process.env.ADMIN_LAST_LOGIN = new Date().toISOString();

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
