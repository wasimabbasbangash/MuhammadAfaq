import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getAdminAuth, initializeDatabase } from "@/lib/database";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    if (!password || typeof password !== "string") {
      return NextResponse.json(
        { success: false, message: "Password is required" },
        { status: 400 }
      );
    }

    // Initialize database if needed
    try {
      await initializeDatabase();
    } catch (error) {
      console.error("Database initialization failed:", error);
      return NextResponse.json(
        {
          success: false,
          message: "Database connection failed. Please try again.",
        },
        { status: 500 }
      );
    }

    // Get admin auth from database
    const adminAuth = await getAdminAuth();
    if (!adminAuth) {
      return NextResponse.json(
        { success: false, message: "Admin account not set up" },
        { status: 400 }
      );
    }

    // Verify password
    const isValid = await bcrypt.compare(password, adminAuth.password_hash);

    if (!isValid) {
      return NextResponse.json(
        { success: false, message: "Invalid password" },
        { status: 401 }
      );
    }

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
