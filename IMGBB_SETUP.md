# ImgBB API Setup for Image Uploads

## What This Does

- Users can upload images directly in the admin panel
- Images are automatically uploaded to ImgBB (free image hosting)
- URLs are stored in the database
- No more manual URL copying!

## Setup Steps

### 1. Get ImgBB API Key

1. Go to [https://api.imgbb.com/](https://api.imgbb.com/)
2. Click "Get API Key"
3. Sign up for a free account
4. Copy your API key

### 2. Add to Vercel Environment Variables

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add new variable:
   - **Name**: `IMGBB_API_KEY`
   - **Value**: Your ImgBB API key
   - **Environment**: Production, Preview, Development

### 3. Deploy

- Push your changes to trigger a new deployment
- The upload functionality will now work automatically

## How It Works

### Local Development:

- Images saved to local `public/assets/images/` folder
- Works without API key

### Production (Vercel):

- Images automatically uploaded to ImgBB
- URLs stored in database
- Images accessible from ImgBB servers

## Benefits

- ✅ **User-friendly**: Upload images directly in admin panel
- ✅ **Automatic**: No manual URL copying needed
- ✅ **Reliable**: ImgBB is a stable image hosting service
- ✅ **Free**: ImgBB offers free tier with good limits
- ✅ **Fast**: Images load quickly from ImgBB CDN

## ImgBB Free Tier Limits

- **32MB** per image
- **No bandwidth limits**
- **No expiration** for images
- **Perfect for** property photos

## Alternative Services

If you prefer other services, you can modify the code to use:

- **Cloudinary** (more features, paid)
- **AWS S3** (enterprise solution)
- **Imgur API** (also free)
