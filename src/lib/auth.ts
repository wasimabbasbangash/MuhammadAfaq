import bcrypt from "bcryptjs";

export interface AdminAuth {
  passwordHash: string;
  createdAt: string;
  lastLogin?: string;
}

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12;
  return bcrypt.hash(password, saltRounds);
}

export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// Client-side authentication helpers
export async function authenticateAdmin(
  password: string
): Promise<{ success: boolean; message?: string }> {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Authentication error:", error);
    return { success: false, message: "Login failed" };
  }
}

export async function setAdminPassword(
  password: string
): Promise<{ success: boolean; message?: string }> {
  try {
    const response = await fetch("/api/auth/setup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Setup error:", error);
    return { success: false, message: "Setup failed" };
  }
}

export async function checkAuthSetup(): Promise<{ isSetup: boolean }> {
  try {
    const response = await fetch("/api/auth/check");
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Check auth error:", error);
    return { isSetup: false };
  }
}

export function isAdminAuthenticated(): boolean {
  // For client-side checks, we'll rely on session storage
  // This is a simple implementation - in production, you'd use proper JWT tokens
  if (typeof window !== "undefined") {
    const authStatus = sessionStorage.getItem("adminAuthenticated");
    return authStatus === "true";
  }
  return false;
}

export function setAdminAuthenticated(status: boolean): void {
  if (typeof window !== "undefined") {
    if (status) {
      sessionStorage.setItem("adminAuthenticated", "true");
    } else {
      sessionStorage.removeItem("adminAuthenticated");
    }
  }
}
