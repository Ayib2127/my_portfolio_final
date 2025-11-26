# Deployment Guide

This guide covers deploying your portfolio website to various platforms.

## Prerequisites

Before deploying, ensure you have:
- ✅ Completed Supabase setup
- ✅ Completed Cloudinary setup
- ✅ Updated all environment variables
- ✅ Tested locally (`npm run dev`)
- ✅ Built successfully (`npm run build`)

## Option 1: Deploy to Vercel (Recommended)

Vercel is the best choice for Next.js applications.

### Step 1: Prepare for Deployment

1. Create a GitHub repository (if you haven't):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

#### Method A: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (or `MyPortfolio/portfolio-website` if needed)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

6. Add Environment Variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```

7. Click "Deploy"

#### Method B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Step 3: Configure Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Wait for DNS propagation (can take up to 48 hours)

## Option 2: Deploy to Netlify

### Step 1: Create netlify.toml

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "18"
```

### Step 2: Deploy

1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with GitHub
3. Click "Add new site" > "Import an existing project"
4. Choose GitHub and select your repository
5. Configure build settings (should auto-detect)
6. Add environment variables in site settings
7. Deploy

## Option 3: Deploy to Railway

1. Go to [railway.app](https://railway.app)
2. Create a new project
3. Deploy from GitHub
4. Add environment variables
5. Deploy

## Option 4: Self-Hosted (VPS/DigitalOcean)

### Step 1: Build for Production

```bash
npm run build
npm run start
```

### Step 2: Setup Process Manager

```bash
# Install PM2
npm install -g pm2

# Start application
pm2 start npm --name "portfolio" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

### Step 3: Configure Nginx

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Step 4: Setup SSL with Let's Encrypt

```bash
sudo certbot --nginx -d yourdomain.com
```

## Post-Deployment Checklist

After deployment, verify:

- [ ] Website loads correctly
- [ ] All pages are accessible
- [ ] Images load from Cloudinary
- [ ] Contact form works and saves to Supabase
- [ ] Navigation works smoothly
- [ ] Mobile responsive
- [ ] SEO metadata is correct
- [ ] Social sharing works (OG tags)
- [ ] Performance is good (run Lighthouse)
- [ ] No console errors
- [ ] Analytics setup (if applicable)

## Environment Variables Reference

### Required Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
SUPABASE_SERVICE_ROLE_KEY=eyJxxx...

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Optional Variables

```env
# Email notifications
EMAIL_FROM=noreply@yourdomain.com
EMAIL_TO=yibeltal2127@gmail.com
EMAIL_SERVICE_API_KEY=xxx

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Performance Optimization

### 1. Enable Caching

Add caching headers in `next.config.js`:

```javascript
async headers() {
  return [
    {
      source: '/images/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ]
}
```

### 2. Optimize Images

- Use Next.js Image component
- Serve images from Cloudinary
- Enable lazy loading
- Use appropriate image sizes

### 3. Enable Compression

Vercel and Netlify automatically enable gzip/brotli compression.

For self-hosted, add to nginx:

```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
```

## Monitoring and Analytics

### Google Analytics

1. Create a GA4 property
2. Add tracking code to `layout.tsx`:

```typescript
import Script from 'next/script'

// In layout
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
  `}
</Script>
```

### Vercel Analytics

Enable in your Vercel dashboard for free.

## Continuous Deployment

### Automatic Deployments

Most platforms support automatic deployments:

1. **Production**: Deploy from `main` branch
2. **Preview**: Deploy from pull requests
3. **Development**: Deploy from `dev` branch

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      # Add deployment commands here
```

## Troubleshooting

### Build Errors

**Error**: "Module not found"
- Solution: Check all imports and file paths
- Run `npm install` to ensure all dependencies are installed

**Error**: "Environment variable not defined"
- Solution: Add all required environment variables in deployment platform

### Runtime Errors

**Issue**: Images not loading
- Check Cloudinary URLs are correct
- Verify NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is set

**Issue**: Contact form not working
- Check Supabase credentials
- Verify RLS policies allow anonymous inserts
- Check API route is accessible

### Performance Issues

**Issue**: Slow page loads
- Optimize images
- Enable caching
- Use CDN
- Check Lighthouse report

## Backup and Maintenance

### Database Backups

Supabase automatically backs up your database. You can also:

```bash
# Export data
supabase db dump > backup.sql

# Restore data
supabase db restore backup.sql
```

### Code Backups

Ensure your code is:
- Committed to Git
- Pushed to GitHub
- Tagged for releases

```bash
git tag -a v1.0.0 -m "Initial release"
git push origin v1.0.0
```

## Support and Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Cloudinary Documentation](https://cloudinary.com/documentation)

---

**Congratulations!** 🎉 Your portfolio is now live!
