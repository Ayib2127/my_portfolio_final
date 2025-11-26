# CV Download Troubleshooting

## Current Issue
CV file exists but won't download through Next.js dev server.

## Steps Taken
1. ✅ CV file copied to public/cv/
2. ✅ File size: 6.73 MB
3. ✅ Valid PDF format verified
4. ✅ Updated Next.js config for large files
5. ✅ Added PDF headers

## Solution Applied
Updated `next.config.js` to:
- Increase body size limit to 10MB
- Add proper PDF headers
- Set Content-Disposition for download

## Required Actions
1. **Stop dev server** (Ctrl+C)
2. **Clear cache**: `Remove-Item -Recurse -Force .next`
3. **Restart**: `npm run dev`
4. **Test**: http://localhost:3000/cv/Yibeltal_Ebabu_CV.pdf

## Alternative Solution (If Still Doesn't Work)

### Option 1: Upload to Cloudinary
```
1. Go to https://cloudinary.com/console
2. Upload your CV as "raw" file type
3. Get the URL
4. Update code to use Cloudinary URL instead
```

### Option 2: Compress the PDF
Your CV is 6.73 MB which is quite large.
- Use https://www.ilovepdf.com/compress_pdf
- Reduce to under 2 MB
- Replace the file

### Option 3: Use External Hosting
- Upload to Google Drive
- Get shareable download link
- Update code with that link

## Test Production Build
Sometimes dev server has issues but production works:
```bash
npm run build
npm start
# Then test: http://localhost:3000/cv/Yibeltal_Ebabu_CV.pdf
```

## Last Resort: Use Download Attribute Only
If nothing works, the download attribute alone should work when deployed to production (Vercel/Netlify).
