# ⚡ Quick Start Guide

Get your portfolio running in 5 minutes!

## 🎯 Prerequisites

- Node.js 18+ installed
- Git installed
- Code editor (VS Code recommended)

## 🚀 3 Steps to Launch

### 1️⃣ Install Dependencies

```bash
cd MyPortfolio/portfolio-website
npm install
```

### 2️⃣ Set Up Environment

```bash
# Copy environment template
cp .env.example .env.local
```

**For now, use these placeholder values in `.env.local`:**

```env
NEXT_PUBLIC_SUPABASE_URL=https://placeholder.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=placeholder-key
SUPABASE_SERVICE_ROLE_KEY=placeholder-key
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=demo
CLOUDINARY_API_KEY=placeholder
CLOUDINARY_API_SECRET=placeholder
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> ⚠️ **Note**: Contact form won't work with placeholders. Set up [Supabase](./docs/SUPABASE_SETUP.md) and [Cloudinary](./docs/CLOUDINARY_SETUP.md) later.

### 3️⃣ Run Development Server

```bash
npm run dev
```

**Open:** [http://localhost:3000](http://localhost:3000) 🎉

## 📝 Customize Your Content

### Quick Updates (5 minutes)

1. **Personal Info** → `src/data/personal.ts`
   - Change name, email, phone, location
   
2. **Skills** → `src/data/skills.ts`
   - Update your technical skills
   
3. **Experience** → `src/data/experience.ts`
   - Add your work history

4. **Projects** → `src/data/projects.ts`
   - Showcase your portfolio

## 🎨 What You Get

Your portfolio includes:

✅ **Hero Section** - Eye-catching introduction  
✅ **About Me** - Professional profile  
✅ **Skills** - Technical expertise showcase  
✅ **Experience** - Career timeline  
✅ **Projects** - Portfolio gallery  
✅ **Testimonials** - Recommendations  
✅ **Contact Form** - Get inquiries  
✅ **Responsive Design** - Works on all devices  
✅ **Modern UI** - Professional and clean  
✅ **Ethiopian Branding** - Flag accent colors  

## 📊 Project Structure

```
src/
├── app/              # Pages & layouts
├── components/       # UI components
│   ├── layout/      # Header & Footer
│   ├── sections/    # Page sections
│   └── ui/          # Reusable components
├── data/            # Your content (Edit these!)
└── lib/             # Utilities
```

## 🔄 Development Workflow

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Test production build
npm start

# Check for errors
npm run lint
```

## ⚙️ Complete Setup (Later)

When you're ready for full functionality:

1. **Set up Supabase** (15 minutes)
   - Follow: [docs/SUPABASE_SETUP.md](./docs/SUPABASE_SETUP.md)
   - Enables: Contact form, message storage

2. **Set up Cloudinary** (10 minutes)
   - Follow: [docs/CLOUDINARY_SETUP.md](./docs/CLOUDINARY_SETUP.md)
   - Enables: Image hosting, optimization

3. **Deploy to Production**
   - Follow: [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md)
   - Deploy to: Vercel, Netlify, or your choice

## 🎯 Priority Checklist

**Before Deploying:**

- [ ] Update all personal information
- [ ] Add your work experience
- [ ] List your skills
- [ ] Add your projects
- [ ] Upload your CV to `public/cv/`
- [ ] Set up Supabase
- [ ] Set up Cloudinary
- [ ] Upload your photos
- [ ] Test contact form
- [ ] Test on mobile devices
- [ ] Run build: `npm run build`

## 📖 Full Documentation

- [Getting Started](./docs/GETTING_STARTED.md) - Detailed setup guide
- [Supabase Setup](./docs/SUPABASE_SETUP.md) - Database configuration
- [Cloudinary Setup](./docs/CLOUDINARY_SETUP.md) - Image management
- [Deployment](./docs/DEPLOYMENT.md) - Go live!

## 💡 Quick Tips

**Editing Content:**
- All content is in `src/data/` folder
- Changes auto-reload in dev mode
- No restart needed!

**Adding Images:**
- For now: Use placeholder URLs
- Later: Upload to Cloudinary
- Update URLs in data files

**Styling:**
- Colors: `tailwind.config.ts`
- Global styles: `src/app/globals.css`
- Component styles: Inline Tailwind classes

## 🆘 Common Issues

**Port 3000 in use?**
```bash
npm run dev -- -p 3001
```

**Changes not showing?**
```bash
# Clear cache
rm -rf .next
npm run dev
```

**Build errors?**
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

## 🎉 You're Ready!

Your portfolio is now running locally. Next steps:

1. ✅ Customize content (data files)
2. ✅ Add your photos
3. ✅ Set up backend services
4. ✅ Deploy to production

**Questions?** Check the full [Getting Started Guide](./docs/GETTING_STARTED.md)

---

**Built with:** Next.js 14 • TypeScript • Tailwind CSS • Supabase • Cloudinary  
**Made for:** Yibeltal Ebabu Dires 🇪🇹
