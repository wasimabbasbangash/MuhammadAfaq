import { sql } from "@vercel/postgres";

// Create tables if they don't exist
export async function initializeDatabase() {
  try {
    // Create properties table
    await sql`
      CREATE TABLE IF NOT EXISTS properties (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        community VARCHAR(255) NOT NULL,
        beds INTEGER NOT NULL,
        baths INTEGER NOT NULL,
        size VARCHAR(50) NOT NULL,
        price VARCHAR(100) NOT NULL,
        type VARCHAR(50) NOT NULL,
        image TEXT,
        images TEXT[],
        tags TEXT[],
        urgent BOOLEAN DEFAULT FALSE,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Create admin auth table
    await sql`
      CREATE TABLE IF NOT EXISTS admin_auth (
        id SERIAL PRIMARY KEY,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        last_login TIMESTAMP
      )
    `;

    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Error initializing database:", error);
    throw error;
  }
}

// Properties CRUD operations
export async function getAllProperties() {
  try {
    const result = await sql`
      SELECT * FROM properties 
      ORDER BY created_at DESC
    `;
    return result.rows;
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
}

export async function saveProperties(properties: any[]) {
  try {
    // Clear existing properties
    await sql`DELETE FROM properties`;

    // Insert new properties
    for (const property of properties) {
      await sql`
        INSERT INTO properties (
          title, community, beds, baths, size, price, type, 
          image, images, tags, urgent, description
        ) VALUES (
          ${property.title}, ${property.community}, ${property.beds}, 
          ${property.baths}, ${property.size}, ${property.price}, 
          ${property.type}, ${property.image}, ${property.images || []}, 
          ${property.tags || []}, ${property.urgent || false}, 
          ${property.description || ""}
        )
      `;
    }

    return { success: true };
  } catch (error) {
    console.error("Error saving properties:", error);
    throw error;
  }
}

// Admin auth operations
export async function getAdminAuth() {
  try {
    const result = await sql`
      SELECT * FROM admin_auth 
      ORDER BY created_at DESC 
      LIMIT 1
    `;
    return result.rows[0] || null;
  } catch (error) {
    console.error("Error fetching admin auth:", error);
    return null;
  }
}

export async function saveAdminAuth(passwordHash: string) {
  try {
    // Clear existing auth
    await sql`DELETE FROM admin_auth`;

    // Insert new auth
    await sql`
      INSERT INTO admin_auth (password_hash) 
      VALUES (${passwordHash})
    `;

    return { success: true };
  } catch (error) {
    console.error("Error saving admin auth:", error);
    throw error;
  }
}
