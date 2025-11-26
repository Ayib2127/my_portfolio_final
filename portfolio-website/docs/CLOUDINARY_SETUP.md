# Cloudinary Setup Guide

This guide will help you set up Cloudinary for image storage and optimization.

## Step 1: Create a Cloudinary Account

1. Go to [https://cloudinary.com](https://cloudinary.com)
2. Sign up for a free account
3. Verify your email address

## Step 2: Get Your Credentials

1. After logging in, go to your Dashboard
2. You'll see your account details:
   - **Cloud Name**
   - **API Key**
   - **API Secret**

## Step 3: Update Environment Variables

Add your Cloudinary credentials to `.env.local`:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Step 4: Create Upload Presets

1. Go to **Settings** > **Upload**
2. Scroll down to **Upload presets**
3. Click "Add upload preset"
4. Configure:
   - **Preset name**: `portfolio_images`
   - **Signing mode**: Unsigned (for client-side uploads) or Signed (for server-side)
   - **Folder**: `portfolio` (to organize your images)
   - **Format**: Auto
   - **Quality**: Auto
   - **Transformation**: Add any default transformations you want

## Step 5: Organize Your Folders

Create the following folder structure in Cloudinary:

```
portfolio/
├── profile/          # Profile photos
├── projects/         # Project images
├── certificates/     # Certificate images
├── testimonials/     # Testimonial images
└── misc/            # Other images
```

## Step 6: Upload Your Images

### Method 1: Manual Upload via Dashboard

1. Go to **Media Library**
2. Click "Upload"
3. Select your images
4. Organize them into appropriate folders

### Method 2: Programmatic Upload

Create a script to upload images:

```typescript
// scripts/upload-images.ts
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

async function uploadImage(filePath: string, folder: string) {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: `portfolio/${folder}`,
      transformation: [
        { width: 1200, height: 800, crop: 'limit' },
        { quality: 'auto' },
        { fetch_format: 'auto' },
      ],
    })
    console.log('Uploaded:', result.secure_url)
    return result
  } catch (error) {
    console.error('Upload failed:', error)
  }
}
```

## Step 7: Update Image URLs in Your Project

### Profile Photo

Upload your profile photo and update the Hero section:

```typescript
// In Hero.tsx
<Image
  src="https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1/portfolio/profile/your-photo.jpg"
  alt="Yibeltal Ebabu Dires"
  width={500}
  height={500}
/>
```

### Project Images

For each project in `src/data/projects.ts`, update the `image` field:

```typescript
{
  id: '1',
  title: 'Project Name',
  image: 'https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1/portfolio/projects/project-1.jpg',
  // ... other fields
}
```

## Image Optimization Tips

### 1. Use Cloudinary Transformations

```typescript
// Automatic format and quality
const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/v1/portfolio/profile/photo.jpg`

// Responsive images
const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/w_800,c_limit/v1/portfolio/projects/project-1.jpg`

// Add effects
const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/e_sharpen:100/v1/portfolio/projects/project-1.jpg`
```

### 2. Create Responsive Variants

```typescript
const imageSizes = {
  thumbnail: 'w_300,h_200,c_fill',
  medium: 'w_800,h_600,c_limit',
  large: 'w_1200,h_900,c_limit',
  full: 'w_1920,h_1080,c_limit'
}
```

### 3. Use Next.js Image Component

```typescript
import Image from 'next/image'

<Image
  src={cloudinaryUrl}
  alt="Description"
  width={800}
  height={600}
  quality={90}
  loading="lazy"
  placeholder="blur"
  blurDataURL={thumbnailUrl}
/>
```

## Recommended Folder Organization

```
portfolio/
├── profile/
│   ├── avatar.jpg              (500x500)
│   └── banner.jpg              (1920x1080)
│
├── projects/
│   ├── road-design.jpg
│   ├── admin-building.jpg
│   ├── high-rise.jpg
│   ├── residential.jpg
│   └── training.jpg
│
├── certificates/
│   ├── degree.jpg
│   ├── etabs-certification.jpg
│   └── other-certificates.jpg
│
└── og-images/
    └── og-image.jpg            (1200x630 for social sharing)
```

## Image Specifications

### Profile Photo
- **Dimensions**: 500x500px (square)
- **Format**: JPG or PNG
- **Quality**: High (90-100)

### Project Images
- **Dimensions**: 1200x800px (3:2 ratio)
- **Format**: JPG
- **Quality**: Auto (Cloudinary will optimize)

### OG Image (Social Sharing)
- **Dimensions**: 1200x630px
- **Format**: JPG or PNG
- **Quality**: High

## Cost Optimization

Free tier includes:
- ✅ 25 GB storage
- ✅ 25 GB bandwidth/month
- ✅ Unlimited transformations

Tips to stay within limits:
1. Compress images before uploading
2. Use appropriate dimensions (don't upload 4K images)
3. Enable automatic format and quality
4. Use responsive images
5. Implement lazy loading

## Next Steps

1. Upload your profile photo
2. Upload project images
3. Update all image URLs in your data files
4. Test image loading and optimization
5. Set up image upload functionality (if needed)

## Helper Script

Create a file `scripts/get-cloudinary-urls.ts`:

```typescript
const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

export const getCloudinaryUrl = (
  path: string,
  options?: {
    width?: number
    height?: number
    quality?: string | number
    crop?: string
  }
) => {
  const transformations = []
  
  if (options?.width) transformations.push(`w_${options.width}`)
  if (options?.height) transformations.push(`h_${options.height}`)
  if (options?.crop) transformations.push(`c_${options.crop}`)
  if (options?.quality) transformations.push(`q_${options.quality}`)
  
  transformations.push('f_auto') // Auto format
  
  const transformation = transformations.join(',')
  
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformation}/v1/${path}`
}

// Usage:
// getCloudinaryUrl('portfolio/profile/avatar.jpg', { width: 500, quality: 'auto' })
```

---

**Need Help?** Check the [Cloudinary Documentation](https://cloudinary.com/documentation) or reach out for support.
