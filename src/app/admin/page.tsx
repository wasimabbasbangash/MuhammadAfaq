"use client";

import { useState, useEffect } from "react";
import AdminLogin from "@/components/AdminLogin";
import AdminHotProperties from "@/components/AdminHotProperties";
import AdminSetup from "@/components/AdminSetup";
import { isAdminAuthenticated, checkAuthSetup } from "@/lib/auth";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSetup, setIsSetup] = useState(false);

  useEffect(() => {
    // Check authentication status and setup
    const checkAuth = async () => {
      try {
        const authenticated = isAdminAuthenticated();
        const setupResult = await checkAuthSetup();

        setIsSetup(setupResult.isSetup);
        setIsAuthenticated(authenticated);
      } catch (error) {
        console.error("Auth check error:", error);
        setIsSetup(false);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("adminAuthenticated");
    }
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // If no admin account is set up, show setup
  if (!isSetup) {
    return <AdminSetup />;
  }

  // If admin account exists but not authenticated, show login
  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  // If authenticated, show admin panel
  return <AdminHotProperties onLogout={handleLogout} />;
}
