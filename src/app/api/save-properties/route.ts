import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// GET method to retrieve properties
export async function GET() {
  try {
    const filePath = path.join(
      process.env.NODE_ENV === "production" ? "/tmp" : process.cwd(),
      process.env.NODE_ENV === "production"
        ? "hot-properties.json"
        : "public/data/hot-properties.json"
    );

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ properties: [] });
    }

    const data = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(data);

    return NextResponse.json(jsonData);
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

    // Path to the JSON file (use /tmp for Vercel deployment)
    const filePath = path.join(
      process.env.NODE_ENV === "production" ? "/tmp" : process.cwd(),
      process.env.NODE_ENV === "production"
        ? "hot-properties.json"
        : "public/data/hot-properties.json"
    );

    // Ensure the directory exists (only needed in development)
    if (process.env.NODE_ENV !== "production") {
      const dirPath = path.dirname(filePath);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
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
