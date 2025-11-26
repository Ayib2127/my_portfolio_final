# Upload CV to Cloudinary

## Why Cloudinary?
- Next.js dev server has issues with large PDF files
- Cloudinary handles files of any size perfectly
- CDN delivery for faster downloads worldwide
- Easy to update CV without redeploying

## Step-by-Step Instructions

### 1. Go to Cloudinary Dashboard
```
https://cloudinary.com/console
```

### 2. Navigate to Media Library
Click "Media Library" in the left sidebar

### 3. Upload Your CV
1. Click the "Upload" button
2. **IMPORTANT**: Change "Resource Type" to **"Raw"** (not Image!)
3. Select your CV file:
   ```
   D:\YIbe\Yibe\Yb Final\Updated\YIBELTAL_EBABU_DIRES.pdf
   ```
4. Set folder to: `portfolio/documents`
5. Click "Upload"

### 4. Get the URL
1. After upload completes, click on your CV file
2. Find the "Secure URL" field
3. Copy the entire URL

The URL will look like:
```
https://res.cloudinary.com/dbn8jx8bh/raw/upload/v1234567890/portfolio/documents/YIBELTAL_EBABU_DIRES.pdf
```

### 5. Provide URL to Update Code
Once you have the URL, provide it and the code will be updated to use Cloudinary instead of local storage.

## Benefits

✅ **Works Immediately** - No dev server issues
✅ **Fast Downloads** - CDN delivery worldwide
✅ **Easy Updates** - Just replace file in Cloudinary
✅ **No Size Limits** - Handle any file size
✅ **Production Ready** - Works in dev and production

## Alternative: Keep Local for Production

If you prefer not to use Cloudinary:
- The CV will work fine when deployed to production (Vercel/Netlify)
- Only the dev server has issues
- You can deploy now and it will work online

## Your Choice

Choose one:
1. **Upload to Cloudinary** (Recommended) - Works everywhere
2. **Keep local** - Only works in production, not dev server
