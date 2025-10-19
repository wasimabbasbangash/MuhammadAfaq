"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  X,
  Upload,
  Save,
  Eye,
  Trash2,
  Settings,
  LogOut,
  Key,
} from "lucide-react";

interface Property {
  id: string;
  image: string;
  images?: string[];
  title: string;
  community: string;
  beds: number;
  baths: number;
  size: string;
  price: string;
  type: string;
  tags: string[];
  urgent?: boolean;
  description?: string;
}

interface AdminHotPropertiesProps {
  onLogout?: () => void;
}

export default function AdminHotProperties({
  onLogout,
}: AdminHotPropertiesProps) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProperty, setCurrentProperty] = useState<Partial<Property>>({
    title: "",
    community: "",
    beds: 1,
    baths: 1,
    size: "",
    price: "",
    type: "Secondary",
    tags: [],
    urgent: false,
    image: "",
    images: [],
    description: "",
  });
  const [tagInput, setTagInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [uploadingImages, setUploadingImages] = useState(false);
  const [fileInputKey, setFileInputKey] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changingPassword, setChangingPassword] = useState(false);

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    try {
      const response = await fetch("/data/hot-properties.json");
      if (response.ok) {
        const data = await response.json();
        setProperties(data.properties || []);
      }
    } catch (error) {
      console.error("Failed to load properties:", error);
    }
  };

  const uploadImages = async (files: FileList) => {
    setUploadingImages(true);
    try {
      const formData = new FormData();
      Array.from(files).forEach((file) => {
        formData.append("files", file);
      });

      const response = await fetch("/api/upload-images", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        const newImages = result.images;

        // Set first image as main image, add rest to images array
        if (newImages.length > 0) {
          setCurrentProperty((prev) => ({
            ...prev,
            image: newImages[0],
            images: newImages.length > 1 ? newImages.slice(1) : [],
          }));
        }

        // Reset file input
        setFileInputKey((prev) => prev + 1);

        setMessage(`Successfully uploaded ${newImages.length} images!`);
      } else {
        throw new Error("Failed to upload images");
      }
    } catch (error) {
      console.error("Failed to upload images:", error);
      setMessage("Failed to upload images. Please try again.");
    } finally {
      setUploadingImages(false);
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const saveProperties = async (updatedProperties: Property[]) => {
    setLoading(true);
    try {
      // Save to the API endpoint
      const response = await fetch("/api/save-properties", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ properties: updatedProperties }),
      });

      if (response.ok) {
        const result = await response.json();
        setProperties(updatedProperties);
        setMessage(
          "Properties saved successfully! Changes appear immediately on the main website."
        );
      } else {
        throw new Error("Failed to save properties");
      }
    } catch (error) {
      console.error("Failed to save properties:", error);
      setMessage("Failed to save properties. Please try again.");
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(""), 5000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !currentProperty.title ||
      !currentProperty.community ||
      !currentProperty.price
    ) {
      setMessage("Please fill in all required fields.");
      return;
    }

    const newProperty: Property = {
      id: currentProperty.id || Date.now().toString(),
      title: currentProperty.title!,
      community: currentProperty.community!,
      beds: currentProperty.beds!,
      baths: currentProperty.baths!,
      size: currentProperty.size!,
      price: currentProperty.price!,
      type: currentProperty.type!,
      tags: currentProperty.tags || [],
      urgent: currentProperty.urgent || false,
      image: currentProperty.image || "/api/placeholder/400/300",
      images: currentProperty.images || [],
      description: currentProperty.description || "",
    };

    let updatedProperties;
    if (currentProperty.id) {
      // Update existing property
      updatedProperties = properties.map((p) =>
        p.id === currentProperty.id ? newProperty : p
      );
    } else {
      // Add new property
      updatedProperties = [...properties, newProperty];
    }

    saveProperties(updatedProperties);
    resetForm();
  };

  const handleEdit = (property: Property) => {
    setCurrentProperty(property);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    const updatedProperties = properties.filter((p) => p.id !== id);
    saveProperties(updatedProperties);
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (newPassword.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setChangingPassword(true);
    try {
      const response = await fetch("/api/auth/setup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: newPassword }),
      });

      const result = await response.json();

      if (result.success) {
        setMessage("Password updated successfully!");
        setNewPassword("");
        setConfirmPassword("");
        setShowSettings(false);
        setTimeout(() => setMessage(""), 3000);
      } else {
        setMessage(result.message || "Failed to update password.");
      }
    } catch (error) {
      console.error("Password change error:", error);
      setMessage("Failed to update password. Please try again.");
    } finally {
      setChangingPassword(false);
    }
  };

  const resetForm = () => {
    setCurrentProperty({
      title: "",
      community: "",
      beds: 1,
      baths: 1,
      size: "",
      price: "",
      type: "Secondary",
      tags: [],
      urgent: false,
      image: "",
      images: [],
      description: "",
    });
    setTagInput("");
    setIsEditing(false);
  };

  const addTag = () => {
    if (tagInput.trim() && !currentProperty.tags?.includes(tagInput.trim())) {
      setCurrentProperty({
        ...currentProperty,
        tags: [...(currentProperty.tags || []), tagInput.trim()],
      });
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setCurrentProperty({
      ...currentProperty,
      tags: currentProperty.tags?.filter((tag) => tag !== tagToRemove) || [],
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Hot Properties Admin
            </h1>
            <p className="text-gray-600">
              Manage your hot properties that appear on the main website.
            </p>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </button>
            {onLogout && (
              <button
                onClick={onLogout}
                className="inline-flex items-center px-4 py-2 border border-red-300 rounded-md shadow-sm text-sm font-medium text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            )}
          </div>
        </div>

        {message && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              message.includes("successfully")
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message}
          </div>
        )}

        {/* Settings Panel */}
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900 flex items-center">
                  <Key className="h-5 w-5 mr-2" />
                  Admin Settings
                </h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Change Admin Password
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="New password"
                        minLength={6}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Confirm password"
                        minLength={6}
                        required
                      />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Password must be at least 6 characters long
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={
                    changingPassword || !newPassword || !confirmPassword
                  }
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {changingPassword ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Updating...
                    </>
                  ) : (
                    <>
                      <Key className="h-4 w-4 mr-2" />
                      Update Password
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {isEditing ? "Edit Property" : "Add New Property"}
              </h2>
              <button
                onClick={resetForm}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Property Title *
                  </label>
                  <input
                    type="text"
                    value={currentProperty.title || ""}
                    onChange={(e) =>
                      setCurrentProperty({
                        ...currentProperty,
                        title: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. Marina Gate Tower - Premium 2BR"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Community *
                  </label>
                  <input
                    type="text"
                    value={currentProperty.community || ""}
                    onChange={(e) =>
                      setCurrentProperty({
                        ...currentProperty,
                        community: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. Dubai Marina"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bedrooms
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={currentProperty.beds || 1}
                    onChange={(e) =>
                      setCurrentProperty({
                        ...currentProperty,
                        beds: parseInt(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bathrooms
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={currentProperty.baths || 1}
                    onChange={(e) =>
                      setCurrentProperty({
                        ...currentProperty,
                        baths: parseInt(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Size (sqft)
                  </label>
                  <input
                    type="text"
                    value={currentProperty.size || ""}
                    onChange={(e) =>
                      setCurrentProperty({
                        ...currentProperty,
                        size: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="1,200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Type
                  </label>
                  <select
                    value={currentProperty.type || "Secondary"}
                    onChange={(e) =>
                      setCurrentProperty({
                        ...currentProperty,
                        type: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Secondary">Secondary</option>
                    <option value="Off-plan">Off-plan</option>
                    <option value="Rent">Rent</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price *
                </label>
                <input
                  type="text"
                  value={currentProperty.price || ""}
                  onChange={(e) =>
                    setCurrentProperty({
                      ...currentProperty,
                      price: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="AED 2.8M"
                  required
                />
              </div>

              {/* Image Upload Section */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Property Images
                </label>
                <div className="space-y-3">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                    <div className="text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="mt-4">
                        <label htmlFor="file-upload" className="cursor-pointer">
                          <span className="mt-2 block text-sm font-medium text-gray-900">
                            Upload property images
                          </span>
                          <span className="mt-1 block text-xs text-gray-500">
                            PNG, JPG up to 10MB each (multiple files allowed)
                          </span>
                        </label>
                        <input
                          key={fileInputKey}
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          multiple
                          accept="image/*"
                          className="sr-only"
                          onChange={(e) => {
                            if (e.target.files && e.target.files.length > 0) {
                              uploadImages(e.target.files);
                            }
                          }}
                          disabled={uploadingImages}
                        />
                      </div>
                    </div>
                  </div>

                  {uploadingImages && (
                    <div className="text-center py-2">
                      <div className="inline-flex items-center text-sm text-blue-600">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                        Uploading images...
                      </div>
                    </div>
                  )}

                  {/* Current Images Preview */}
                  {(currentProperty.image ||
                    (currentProperty.images &&
                      currentProperty.images.length > 0)) && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        Current Images:
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {currentProperty.image &&
                          currentProperty.image !==
                            "/api/placeholder/400/300" && (
                            <div className="relative">
                              <img
                                src={currentProperty.image}
                                alt="Main property image"
                                className="w-full h-20 object-cover rounded border"
                                onError={(e) => {
                                  e.currentTarget.src =
                                    "/api/placeholder/400/300";
                                }}
                              />
                              <span className="absolute top-1 left-1 bg-blue-500 text-white text-xs px-1 py-0.5 rounded">
                                Main
                              </span>
                            </div>
                          )}
                        {currentProperty.images?.map((image, index) => (
                          <div key={index} className="relative">
                            <img
                              src={image}
                              alt={`Property image ${index + 2}`}
                              className="w-full h-20 object-cover rounded border"
                              onError={(e) => {
                                e.currentTarget.src =
                                  "/api/placeholder/400/300";
                              }}
                            />
                            <span className="absolute top-1 left-1 bg-gray-500 text-white text-xs px-1 py-0.5 rounded">
                              {index + 2}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tags
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" && (e.preventDefault(), addTag())
                    }
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add a tag and press Enter"
                  />
                  <button
                    type="button"
                    onClick={addTag}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentProperty.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-1 text-blue-600 hover:text-blue-800"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description (Optional)
                </label>
                <textarea
                  value={currentProperty.description || ""}
                  onChange={(e) =>
                    setCurrentProperty({
                      ...currentProperty,
                      description: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe the property features, amenities, location benefits, etc."
                  rows={3}
                />
              </div>

              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={currentProperty.urgent || false}
                    onChange={(e) =>
                      setCurrentProperty({
                        ...currentProperty,
                        urgent: e.target.checked,
                      })
                    }
                    className="mr-2"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Mark as HOT/Urgent
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                <Save className="h-4 w-4" />
                <span>
                  {loading
                    ? "Saving..."
                    : isEditing
                    ? "Update Property"
                    : "Add Property"}
                </span>
              </button>
            </form>
          </div>

          {/* Properties List */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Current Hot Properties ({properties.length})
            </h2>

            <div className="space-y-4">
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-900">
                      {property.title}
                    </h3>
                    {property.urgent && (
                      <span className="bg-red-100 text-red-800 px-2 py-1 text-xs rounded-full font-medium">
                        HOT
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {property.community}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-600">
                      {property.price}
                    </span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(property)}
                        className="text-blue-500 hover:text-blue-700 p-1"
                        title="Edit"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(property.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                        title="Delete"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {property.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {properties.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  No hot properties yet. Add your first property using the form.
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            How to Use This Admin Panel
          </h3>
          <ul className="text-blue-800 text-sm space-y-1">
            <li>• Add property details in the form on the left</li>
            <li>• Upload images to a hosting service and paste the URL</li>
            <li>• Mark urgent properties as "HOT" to highlight them</li>
            <li>
              • Click "Save" to update the website (changes appear immediately)
            </li>
            <li>• Edit or delete properties using the buttons in the list</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
