import { NextRequest, NextResponse } from "next/server";
import {
  getAllProperties,
  saveProperties,
  initializeDatabase,
} from "@/lib/database";

// GET method to retrieve properties
export async function GET() {
  try {
    // Initialize database if needed
    await initializeDatabase();

    const properties = await getAllProperties();
    return NextResponse.json({ properties });
  } catch (error) {
    console.error("Error reading properties:", error);
    return NextResponse.json({ properties: [] });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { properties } = await request.json();

    if (!Array.isArray(properties)) {
      return NextResponse.json(
        { error: "Invalid properties data" },
        { status: 400 }
      );
    }

    // Initialize database if needed
    await initializeDatabase();

    // Save properties to database
    await saveProperties(properties);

    return NextResponse.json({
      success: true,
      message: "Properties saved successfully!",
    });
  } catch (error) {
    console.error("Error saving properties:", error);
    return NextResponse.json(
      { error: "Failed to save properties" },
      { status: 500 }
    );
  }
}
