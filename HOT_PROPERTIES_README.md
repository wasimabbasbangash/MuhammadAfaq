# Hot Properties Management System

## Overview

The Hot Properties section allows you to showcase limited-time property opportunities on your website. This system is designed to be easy to use, even for non-technical users.

## Features

- 🔥 Eye-catching "Hot Properties" section with flame icons
- 📱 Fully responsive design
- 🏷️ Custom tags and "HOT" badges for urgent properties
- 💬 Direct WhatsApp integration for inquiries
- 🔧 Simple admin interface for managing properties
- 📸 Multiple image upload and gallery viewing
- 🖼️ Side-by-side property details modal (desktop) with image carousel
- 💾 Automatic image storage in dedicated folders

## Accessing the Admin Panel

### First Time Setup

1. Visit `/admin` on your website (e.g., `https://yourwebsite.com/admin`)
2. You'll see the "Admin Setup" page
3. Create a secure password (minimum 6 characters)
4. Click "Create Admin Account"
5. The page will reload and show the login form

### Regular Access

1. Visit `/admin` on your website
2. Enter your admin password
3. Click "Access Admin Panel"

### Security Features

- **Password Protection**: Only authorized users can access the admin panel
- **Session Management**: Login persists until logout or browser close
- **Password Reset**: Change password anytime from Settings in the admin panel
- **Secure Storage**: Passwords are encrypted and stored securely

## Deployment Setup

### For Production Deployment
When deploying to platforms like Vercel, Netlify, or other hosting services:

1. **First Deployment**: Visit `/admin` on your deployed site and set up the password
2. **Environment Variables**: The system uses environment variables for production
3. **Password Persistence**: Set these environment variables in your hosting dashboard:

```
ADMIN_PASSWORD_HASH=$2b$12$LMLF9i0d1o2j8WRyH7U/CuQ4K9RRkDG6A2GIEwdrvxTPkPsPHJ4Z6
ADMIN_CREATED_AT=2025-10-19T11:24:13.473Z
```

**Note**: The above hash is for the password "Pakistan1947$". If you want to use a different password, generate a new bcrypt hash with 12 salt rounds.

### Generating Password Hash (Optional)
If you need to set the password hash manually:

1. Use an online bcrypt generator (search for "bcrypt generator")
2. Set cost/salt rounds to 12
3. Hash your desired password
4. Set the `ADMIN_PASSWORD_HASH` environment variable

### Local Development
For local development, the system uses a local file (`data/admin-auth.json`). This file is not included in deployments for security reasons.

## How to Add/Edit Hot Properties

### Method 1: Admin Panel (Recommended)

1. Log in to the admin panel at `/admin`
2. Use the form to add new properties or edit existing ones
3. Fill in all the required fields:
   - **Property Title**: e.g., "Marina Gate Tower - Premium 2BR"
   - **Community**: e.g., "Dubai Marina"
   - **Bedrooms/Bathrooms**: Number of rooms
   - **Size**: Area in square feet
   - **Price**: Price with currency (e.g., "AED 2.8M")
   - **Type**: Secondary, Off-plan, or Rent
   - **Images**: Click "Upload property images" to select multiple photos (automatically stored)
   - **Description**: Optional detailed description of the property
   - **Tags**: Add descriptive tags like "Hot Deal", "Beachfront", etc.
   - **HOT Badge**: Check to highlight as urgent/high-demand
4. Click "Add Property" or "Update Property" - changes appear immediately!

### Image Upload Instructions:

- **Multiple Images**: Select multiple photos at once (recommended: 3-8 images per property)
- **File Types**: PNG, JPG, JPEG files only
- **File Size**: Up to 10MB per image
- **Automatic Storage**: Images are automatically saved to your website's server
- **Organization**: Each property gets its own folder for easy management

### Method 2: Direct JSON Edit (Advanced)

1. Open `public/data/hot-properties.json`
2. Edit the properties array
3. Save and refresh the website

## JSON Structure

```json
{
  "properties": [
    {
      "id": "1",
      "image": "/api/placeholder/400/300",
      "title": "Marina Gate Tower - Premium 2BR",
      "community": "Dubai Marina",
      "beds": 2,
      "baths": 2,
      "size": "1,200",
      "price": "AED 2.8M",
      "type": "Off-plan",
      "tags": ["Hot Deal", "Ready Q1 2025", "Marina View"],
      "urgent": true
    }
  ]
}
```

## Field Explanations

- **id**: Unique identifier (auto-generated)
- **image**: URL to property image (use placeholder if no image available)
- **title**: Property name and brief description
- **community**: Location/area in Dubai
- **beds/baths**: Number of bedrooms and bathrooms
- **size**: Total area in square feet
- **price**: Property price with currency
- **type**: "Secondary", "Off-plan", or "Rent"
- **tags**: Array of descriptive tags
- **urgent**: Boolean to show HOT badge (true/false)

## Image Hosting

For property images, you can:

1. Upload to a free image hosting service (ImgBB, Imgur, etc.)
2. Use your website's existing image hosting
3. Store in the `public/assets/images/` folder

## Tips for Non-Technical Users

1. **Keep it Simple**: Focus on 3-6 hot properties maximum
2. **Use Clear Titles**: Make property names descriptive
3. **Add Good Images**: High-quality photos get more inquiries
4. **Mark as HOT**: Use the urgent badge for time-sensitive deals
5. **Regular Updates**: Change properties weekly to keep content fresh

## WhatsApp Integration

Each property card has an "Inquire Now" button that opens WhatsApp with a pre-filled message including the property details.

## Support

If you need help:

1. The admin panel has built-in help text and works immediately
2. All fields have helpful placeholders
3. Changes save automatically to the live website
4. Contact your developer for advanced customizations

## For Website Visitors

Users can now:

- **View Properties**: Browse all hot properties on the main website
- **Photo Indicators**: See how many photos each property has on the "View Details" button
- **See Details**: Click "View Details" to open a side-by-side modal (desktop) or stacked (mobile)
- **Browse Images**: Navigate through multiple property photos using:
  - Left/Right arrow buttons on the image
  - Clickable thumbnail strip below the main image
  - Keyboard arrow keys (←/→)
- **Image Counter**: Clear indicator showing "X / Y" images
- **Compact Layout**: Optimized spacing and text sizes for better visibility
- **Contact You**: Use WhatsApp buttons to inquire about properties
- **Copy Contact**: Copy your phone number directly from the modal

## Current Status: ✅ Fully Functional & Secure

- ✅ **Secure Admin Access**: Password-protected admin panel
- ✅ Admin panel saves data immediately
- ✅ Properties appear on main website instantly
- ✅ No technical skills required
- ✅ Mobile-friendly interface
- ✅ WhatsApp integration working
- ✅ Multiple image upload and gallery
- ✅ Clean full-screen property details modal
- ✅ Prominent image navigation (arrows + thumbnails)
- ✅ Photo counter indicators on property cards
- ✅ Keyboard navigation support
- ✅ Automatic image storage system
- ✅ Encrypted password storage
- ✅ Session-based authentication

---

_Last updated: October 2025_
