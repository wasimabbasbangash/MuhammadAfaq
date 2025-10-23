import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { saveAdminAuth, initializeDatabase } from "@/lib/database";

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

    // Initialize database if needed
    await initializeDatabase();

    // Hash the password
    const saltRounds = 12;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Save to database
    await saveAdminAuth(passwordHash);

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
