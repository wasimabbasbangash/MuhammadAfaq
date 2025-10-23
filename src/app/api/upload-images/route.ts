import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { writeFile } from "fs/promises";
import FormData from "form-data";

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const files = data.getAll("files") as File[];

    if (!files || files.length === 0) {
      return NextResponse.json({ error: "No files uploaded" }, { status: 400 });
    }

    // Check if we're in Vercel production deployment
    const isVercelProd =
      process.env.VERCEL === "1" || process.env.NODE_ENV === "production";

    if (isVercelProd) {
      // Use ImgBB for production uploads
      const uploadedUrls: string[] = [];

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
          { error: "Failed to upload any images to cloud storage" },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: `Successfully uploaded ${uploadedUrls.length} images to cloud storage`,
        images: uploadedUrls,
      });
    }

    // Local development - save to local files
    const uploadedFiles: string[] = [];

    // Create unique folder for this property upload batch
    const batchId = Date.now().toString();
    const uploadDir = path.join(
      process.cwd(),
      "public",
      "assets",
      "images",
      "hot-properties",
      batchId
    );

    // Ensure directory exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Process each file
    for (const file of files) {
      if (
        !file.type.startsWith("image/") ||
        file.type === "image/heic" ||
        file.type === "image/heif"
      ) {
        continue; // Skip non-image files and unsupported formats
      }

      // Generate unique filename
      const fileExtension = path.extname(file.name) || ".jpg";
      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2)}${fileExtension}`;
      const filePath = path.join(uploadDir, fileName);

      // Convert file to buffer and save
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      await writeFile(filePath, buffer);

      // Add to uploaded files list (return relative path)
      const relativePath = `/assets/images/hot-properties/${batchId}/${fileName}`;
      uploadedFiles.push(relativePath);
    }

    return NextResponse.json({
      success: true,
      message: `Successfully uploaded ${uploadedFiles.length} images`,
      images: uploadedFiles,
      batchId: batchId,
    });
  } catch (error) {
    console.error("Error uploading images:", error);
    return NextResponse.json(
      { error: "Failed to upload images" },
      { status: 500 }
    );
  }
}
