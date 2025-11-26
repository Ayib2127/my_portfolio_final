# CV Upload Options

## Current Setup ✅

Your CV is stored locally in:
```
public/cv/Yibeltal_Ebabu_CV.pdf
```

**This works perfectly in production!**

When deployed, it will be accessible at:
```
https://your-domain.com/cv/Yibeltal_Ebabu_CV.pdf
```

---

## Option 1: Keep Local Storage (Recommended) ⭐

### Pros:
- ✅ Already configured
- ✅ Works in production
- ✅ No extra setup needed
- ✅ Free
- ✅ Fast download
- ✅ Complete control

### Cons:
- ⚠️ CV file increases deployment size slightly (6.73 MB)
- ⚠️ To update CV, need to redeploy

### How It Works:
1. CV file is in `public/cv/`
2. Next.js serves it as static file
3. Deployed automatically with your site
4. Direct download from your domain

---

## Option 2: Upload to Cloudinary

### Why Use Cloudinary for PDF?
- Update CV without redeploying
- Version control (keep multiple versions)
- Track download analytics
- Serve from CDN

### How to Upload PDF to Cloudinary:

#### Method A: Using Cloudinary Dashboard

1. **Go to Cloudinary Dashboard**
   - Log in to https://cloudinary.com
   - Go to Media Library

2. **Upload PDF**
   - Click "Upload" button
   - Select your CV PDF
   - Choose folder: `portfolio/documents`
   - Upload as "Raw" file type (not image)

3. **Get the URL**
   After upload, you'll get a URL like:
   ```
   https://res.cloudinary.com/dbn8jx8bh/raw/upload/v1234567890/portfolio/documents/CV.pdf
   ```

4. **Update Your Code**
   In `src/data/personal.ts`:
   ```typescript
   export const heroContent = {
     // ... other content
     cta: {
       primary: { 
         text: 'Download CV', 
         href: 'https://res.cloudinary.com/dbn8jx8bh/raw/upload/v1234567890/portfolio/documents/CV.pdf'
       },
       secondary: { text: 'Contact Me', href: '#contact' },
     },
   }
   ```

#### Method B: Using Cloudinary Upload API (Advanced)

If you want to automate uploads, you can use their API:

```javascript
// upload-cv.js
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dbn8jx8bh',
  api_key: 'your_api_key',
  api_secret: 'your_api_secret'
});

cloudinary.uploader.upload(
  './public/cv/Yibeltal_Ebabu_CV.pdf',
  {
    resource_type: 'raw',
    folder: 'portfolio/documents',
    public_id: 'Yibeltal_Ebabu_CV'
  },
  (error, result) => {
    if (error) {
      console.error('Upload failed:', error);
    } else {
      console.log('Upload successful!');
      console.log('URL:', result.secure_url);
    }
  }
);
```

---

## Option 3: Use Google Drive / Dropbox

### Google Drive:
1. Upload CV to Google Drive
2. Right-click > Get link
3. Change to "Anyone with the link can view"
4. Use the direct download link

### Pros:
- Easy to update
- Familiar interface
- Version history

### Cons:
- External dependency
- May show Google Drive interface
- Requires Google account

---

## Recommended Approach for Your Case

### For Development & Production:
**Keep using local storage** (`public/cv/`)

### Why?
1. ✅ Already working
2. ✅ Simple and straightforward
3. ✅ No extra configuration needed
4. ✅ Professional (served from your domain)
5. ✅ You control everything

### When to Switch to Cloudinary:
- If you need to update CV frequently (more than once a month)
- If you want download analytics
- If you want to keep multiple CV versions
- If deployment size becomes an issue

---

## Current Implementation

Your website currently uses:
- **Images**: Cloudinary (profile photos) ✅
- **CV/PDF**: Local storage (public/cv/) ✅

This is a **best practice** approach! ✅

---

## Production Deployment

When you deploy to Vercel/Netlify:

1. **Your CV will be included automatically**
2. **No extra steps needed**
3. **URL will be**: `https://your-domain.com/cv/Yibeltal_Ebabu_CV.pdf`
4. **Download will work perfectly**

---

## FAQ

### Q: Will my CV work in production?
**A:** Yes! ✅ It's in the `public/` folder which gets deployed automatically.

### Q: Do I need to upload CV to Cloudinary?
**A:** No! Local storage is fine and recommended for PDFs.

### Q: Can visitors download my CV?
**A:** Yes! The download button works perfectly.

### Q: What if I want to update my CV later?
**A:** Replace the file in `public/cv/` and redeploy. Takes 2-3 minutes.

### Q: Is 6.73 MB too large for my CV?
**A:** It's on the larger side. Ideal CV size is 1-2 MB. You might want to compress it, but it will still work.

---

## How to Compress Your CV (Optional)

If you want to reduce CV file size:

### Online Tools:
1. **iLovePDF** - https://www.ilovepdf.com/compress_pdf
2. **SmallPDF** - https://smallpdf.com/compress-pdf
3. **PDF Compressor** - https://www.pdf-compressor.com/

### Target Size:
- Ideal: 1-2 MB
- Maximum: 5 MB
- Current: 6.73 MB (acceptable but could be better)

---

## Summary

✅ **Current setup is perfect!**
✅ **Your CV will work in production!**
✅ **No need to upload to Cloudinary!**
✅ **Everything is configured correctly!**

Just deploy your site and the CV download will work automatically! 🚀
