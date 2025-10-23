import { NextRequest, NextResponse } from "next/server";
import { initializeDatabase } from "@/lib/database";

export async function GET() {
  try {
    await initializeDatabase();
    return NextResponse.json({
      success: true,
      message: "Database initialized successfully!",
    });
  } catch (error) {
    console.error("Database initialization error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to initialize database",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
