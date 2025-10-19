import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const { properties } = await request.json();

    if (!Array.isArray(properties)) {
      return NextResponse.json(
        { error: "Invalid properties data" },
        { status: 400 }
      );
    }

    // Path to the JSON file
    const filePath = path.join(
      process.cwd(),
      "public",
      "data",
      "hot-properties.json"
    );

    // Ensure the directory exists
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // Write the properties to the JSON file
    const data = { properties };
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

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
