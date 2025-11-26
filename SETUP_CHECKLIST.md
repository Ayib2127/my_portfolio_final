# ✅ Setup Checklist

Use this checklist to track your progress in setting up and deploying your portfolio website.

## 📋 Phase 1: Initial Setup (15-30 minutes)

### Environment Setup
- [ ] Navigate to project: `cd MyPortfolio/portfolio-website`
- [ ] Install Node.js 18+ (if not already installed)
- [ ] Install dependencies: `npm install`
- [ ] Copy environment file: `cp .env.example .env.local`
- [ ] Add placeholder environment variables
- [ ] Run development server: `npm run dev`
- [ ] Verify site loads at http://localhost:3000

### Initial Test
- [ ] Website loads without errors
- [ ] All sections are visible
- [ ] Navigation works
- [ ] Mobile menu works
- [ ] Animations are smooth

---

## 📝 Phase 2: Content Customization (1-2 hours)

### Personal Information (`src/data/personal.ts`)
- [ ] Update name
- [ ] Update title and subtitle
- [ ] Update email address
- [ ] Update phone number
- [ ] Update location
- [ ] Update bio/description
- [ ] Update languages
- [ ] Add social media links (LinkedIn, GitHub, Twitter)

### Skills (`src/data/skills.ts`)
- [ ] Review existing skills
- [ ] Add new skills if needed
- [ ] Update proficiency levels
- [ ] Adjust skill categories
- [ ] Add or update skill icons

### Work Experience (`src/data/experience.ts`)
- [ ] Update all job titles
- [ ] Update company names
- [ ] Update dates
- [ ] Update job descriptions
- [ ] Update responsibilities
- [ ] Update technologies used
- [ ] Add any missing positions

### Education (`src/data/experience.ts`)
- [ ] Verify degree information
- [ ] Update institution details
- [ ] Update GPA and ranking
- [ ] Update achievements
- [ ] Add any additional education

### Projects (`src/data/projects.ts`)
- [ ] Review existing projects
- [ ] Add your own projects
- [ ] Update project descriptions
- [ ] Update technologies
- [ ] Mark featured projects
- [ ] Update completion dates

### Testimonials (`src/data/testimonials.ts`)
- [ ] Review existing testimonials
- [ ] Add new testimonials
- [ ] Update author information
- [ ] Update companies/institutions
- [ ] Add ratings

### Navigation (`src/data/navigation.ts`)
- [ ] Review menu items
- [ ] Update footer links
- [ ] Verify all links work
- [ ] Update CV download link

---

## 📄 Phase 3: Static Assets (30 minutes)

### CV/Resume
- [ ] Prepare CV in PDF format
- [ ] Place in `public/cv/` folder
- [ ] Name it `Yibeltal_Ebabu_CV.pdf` (or update filename in code)
- [ ] Test download link

### Images (To be added after Cloudinary setup)
- [ ] Profile photo
- [ ] Project images
- [ ] Certificate images (if applicable)
- [ ] OG image for social sharing

---

## 🗄️ Phase 4: Supabase Setup (15-20 minutes)

Follow: [docs/SUPABASE_SETUP.md](./docs/SUPABASE_SETUP.md)

### Account Setup
- [ ] Create Supabase account
- [ ] Create new project
- [ ] Note down project URL
- [ ] Note down anon key
- [ ] Note down service role key

### Database Setup
- [ ] Open SQL Editor
- [ ] Create `contact_messages` table
- [ ] Set up RLS policies
- [ ] Test table creation
- [ ] (Optional) Create `projects` table
- [ ] (Optional) Create `testimonials` table

### Environment Variables
- [ ] Update `NEXT_PUBLIC_SUPABASE_URL` in `.env.local`
- [ ] Update `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local`
- [ ] Update `SUPABASE_SERVICE_ROLE_KEY` in `.env.local`
- [ ] Restart development server

### Testing
- [ ] Submit test contact form
- [ ] Verify message in Supabase dashboard
- [ ] Check for any errors in console

---

## ☁️ Phase 5: Cloudinary Setup (15-20 minutes)

Follow: [docs/CLOUDINARY_SETUP.md](./docs/CLOUDINARY_SETUP.md)

### Account Setup
- [ ] Create Cloudinary account
- [ ] Note down Cloud Name
- [ ] Note down API Key
- [ ] Note down API Secret

### Folder Organization
- [ ] Create `portfolio` folder
- [ ] Create `portfolio/profile` folder
- [ ] Create `portfolio/projects` folder
- [ ] Create `portfolio/certificates` folder

### Image Upload
- [ ] Upload profile photo (500x500px recommended)
- [ ] Upload project images (1200x800px recommended)
- [ ] Upload any certificates
- [ ] Upload OG image (1200x630px)

### Environment Variables
- [ ] Update `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` in `.env.local`
- [ ] Update `CLOUDINARY_API_KEY` in `.env.local`
- [ ] Update `CLOUDINARY_API_SECRET` in `.env.local`

### Update Image URLs
- [ ] Update profile photo URL in Hero section
- [ ] Update project image URLs in `src/data/projects.ts`
- [ ] Update any other image URLs
- [ ] Test all images load correctly

---

## 🎨 Phase 6: Customization (Optional, 30-60 minutes)

### Colors & Branding
- [ ] Review color scheme in `tailwind.config.ts`
- [ ] Update primary colors if desired
- [ ] Update accent colors if desired
- [ ] Adjust Ethiopian flag colors if needed
- [ ] Test color contrast for accessibility

### Fonts
- [ ] Review font choices in `src/app/layout.tsx`
- [ ] Update if desired
- [ ] Test font loading

### Styling
- [ ] Review global styles in `src/app/globals.css`
- [ ] Add any custom animations
- [ ] Adjust spacing if needed
- [ ] Test on different screen sizes

---

## 🧪 Phase 7: Testing (30-60 minutes)

### Functionality Testing
- [ ] Test all navigation links
- [ ] Test smooth scrolling
- [ ] Test mobile menu
- [ ] Test contact form submission
- [ ] Test form validation
- [ ] Test error messages
- [ ] Test CV download
- [ ] Test social media links

### Responsive Design Testing
- [ ] Test on mobile (320px width)
- [ ] Test on tablet (768px width)
- [ ] Test on laptop (1024px width)
- [ ] Test on desktop (1920px width)
- [ ] Test landscape and portrait orientations

### Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

### Performance Testing
- [ ] Run Lighthouse audit
- [ ] Check Performance score (target: 90+)
- [ ] Check Accessibility score (target: 90+)
- [ ] Check Best Practices score (target: 90+)
- [ ] Check SEO score (target: 90+)

### Content Review
- [ ] Proofread all text
- [ ] Check for typos
- [ ] Verify all information is accurate
- [ ] Verify all dates are correct
- [ ] Check grammar and punctuation

---

## 🚀 Phase 8: Deployment (30-60 minutes)

Follow: [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md)

### Pre-Deployment
- [ ] Run production build: `npm run build`
- [ ] Fix any build errors
- [ ] Test production build: `npm start`
- [ ] Verify everything works locally

### Version Control
- [ ] Initialize Git: `git init`
- [ ] Create `.gitignore` (already exists)
- [ ] Commit code: `git add . && git commit -m "Initial commit"`
- [ ] Create GitHub repository
- [ ] Push to GitHub

### Vercel Deployment (Recommended)
- [ ] Create Vercel account
- [ ] Connect GitHub repository
- [ ] Configure project settings
- [ ] Add environment variables in Vercel dashboard
- [ ] Deploy to production
- [ ] Test deployed site

### Custom Domain (Optional)
- [ ] Purchase domain name
- [ ] Add domain in Vercel
- [ ] Update DNS records
- [ ] Wait for DNS propagation
- [ ] Verify HTTPS is working

### Post-Deployment
- [ ] Test all functionality on live site
- [ ] Submit test contact form
- [ ] Verify images load from Cloudinary
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse on production URL
- [ ] Update `NEXT_PUBLIC_SITE_URL` in environment variables

---

## 📊 Phase 9: Analytics & Monitoring (Optional, 30 minutes)

### Google Analytics
- [ ] Create GA4 property
- [ ] Add tracking code to site
- [ ] Verify tracking works
- [ ] Set up conversion goals

### Vercel Analytics
- [ ] Enable in Vercel dashboard
- [ ] Monitor page views
- [ ] Track performance metrics

### Search Console
- [ ] Add site to Google Search Console
- [ ] Submit sitemap
- [ ] Verify ownership
- [ ] Monitor indexing status

---

## 🎯 Phase 10: Launch & Promotion (Ongoing)

### Announcement
- [ ] Update LinkedIn profile with portfolio link
- [ ] Share on social media
- [ ] Add to email signature
- [ ] Update resume/CV with portfolio URL

### SEO
- [ ] Submit to search engines
- [ ] Create backlinks
- [ ] Share on relevant forums
- [ ] Join engineering communities

### Maintenance
- [ ] Set up regular backups
- [ ] Monitor contact form submissions
- [ ] Update content regularly
- [ ] Keep dependencies updated
- [ ] Monitor site performance

---

## ✨ Bonus Tasks (Optional)

### Advanced Features
- [ ] Add blog section
- [ ] Implement dark mode
- [ ] Add multi-language support (English/Amharic)
- [ ] Create project detail pages
- [ ] Add admin dashboard
- [ ] Integrate live chat
- [ ] Add newsletter signup
- [ ] Create sitemap
- [ ] Add RSS feed

### Marketing
- [ ] Create business cards with QR code
- [ ] Create LinkedIn posts about projects
- [ ] Write technical blog posts
- [ ] Network in engineering communities
- [ ] Contribute to open source

---

## 📝 Progress Tracking

**Date Started:** ________________

**Date Completed:** ________________

**Total Time Spent:** ________________

**Current Phase:** ________________

---

## 🆘 Need Help?

If you get stuck on any step:

1. ✅ Check the relevant documentation file
2. ✅ Review error messages carefully
3. ✅ Search for the error online
4. ✅ Check browser console for errors
5. ✅ Review the code in similar sections
6. ✅ Ask for help if needed

---

## 🎉 Completion

Once all required phases are complete, you'll have:

✅ A professional, modern portfolio website  
✅ Fully functional contact form  
✅ Optimized images and performance  
✅ Live production deployment  
✅ SEO optimization  
✅ Analytics tracking  

**Congratulations on completing your portfolio website! 🚀**

---

**Last Updated:** January 2024  
**Estimated Total Time:** 4-8 hours (depending on customization)
