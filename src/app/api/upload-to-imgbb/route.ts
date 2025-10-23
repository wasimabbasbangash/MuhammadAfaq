import { NextRequest, NextResponse } from "next/server";
import FormData from "form-data";

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const files = data.getAll("files") as File[];

    if (!files || files.length === 0) {
      return NextResponse.json({ error: "No files uploaded" }, { status: 400 });
    }

    const uploadedUrls: string[] = [];

    // Process each file
    for (const file of files) {
      if (!file.type.startsWith("image/")) {
        continue; // Skip non-image files
      }

      try {
        // Convert file to base64
        const bytes = await file.arrayBuffer();
        const base64 = Buffer.from(bytes).toString("base64");

        // Upload to ImgBB
        const formData = new FormData();
        formData.append("image", base64);
        formData.append(
          "key",
          process.env.IMGBB_API_KEY || "your-imgbb-api-key"
        );

        const response = await fetch("https://api.imgbb.com/1/upload", {
          method: "POST",
          body: formData as any,
        });

        const result = await response.json();

        if (result.success) {
          uploadedUrls.push(result.data.url);
        } else {
          console.error("ImgBB upload failed:", result.error);
        }
      } catch (error) {
        console.error("Error uploading to ImgBB:", error);
      }
    }

    if (uploadedUrls.length === 0) {
      return NextResponse.json(
        { error: "Failed to upload any images" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Successfully uploaded ${uploadedUrls.length} images`,
      images: uploadedUrls,
    });
  } catch (error) {
    console.error("Error uploading images:", error);
    return NextResponse.json(
      { error: "Failed to upload images" },
      { status: 500 }
    );
  }
}
