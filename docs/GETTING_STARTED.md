# Getting Started Guide

Welcome! This guide will help you set up and run your portfolio website locally.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- **Git** ([Download](https://git-scm.com/))
- A code editor (VS Code recommended)

Check your versions:
```bash
node --version  # Should be 18.x or higher
npm --version   # Should be 9.x or higher
```

## 🚀 Quick Start

### Step 1: Navigate to Project Directory

```bash
cd MyPortfolio/portfolio-website
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Supabase client
- Cloudinary
- Framer Motion
- And more...

### Step 3: Set Up Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and add your credentials:
   ```env
   # Supabase (Get from https://supabase.com)
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

   # Cloudinary (Get from https://cloudinary.com)
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret

   # Site Configuration
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

**Don't have these credentials yet?**
- Follow [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) to set up Supabase
- Follow [CLOUDINARY_SETUP.md](./CLOUDINARY_SETUP.md) to set up Cloudinary

### Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your portfolio!

## 📁 Project Structure

```
portfolio-website/
├── public/                     # Static files
│   ├── images/                # Images
│   └── cv/                    # CV PDF files
│
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── api/              # API routes
│   │   │   └── contact/      # Contact form endpoint
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   ├── globals.css       # Global styles
│   │   └── not-found.tsx     # 404 page
│   │
│   ├── components/           # React components
│   │   ├── layout/          # Header, Footer
│   │   ├── sections/        # Hero, About, Skills, etc.
│   │   └── ui/              # Reusable UI components
│   │
│   ├── data/                # Content data
│   │   ├── personal.ts      # Personal information
│   │   ├── skills.ts        # Technical skills
│   │   ├── experience.ts    # Work experience
│   │   ├── projects.ts      # Portfolio projects
│   │   ├── testimonials.ts  # Testimonials
│   │   └── navigation.ts    # Navigation items
│   │
│   ├── lib/                 # Utilities
│   │   ├── supabase/       # Supabase clients
│   │   ├── cloudinary/     # Cloudinary config
│   │   └── utils.ts        # Helper functions
│   │
│   └── types/              # TypeScript types
│       └── index.ts        # Type definitions
│
├── docs/                   # Documentation
│   ├── GETTING_STARTED.md
│   ├── SUPABASE_SETUP.md
│   ├── CLOUDINARY_SETUP.md
│   └── DEPLOYMENT.md
│
├── .env.example           # Environment variables template
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

## ✏️ Customization Guide

### 1. Update Personal Information

Edit `src/data/personal.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  phone: '+1234567890',
  location: 'Your City, Country',
  // ... update other fields
}
```

### 2. Add Your Skills

Edit `src/data/skills.ts`:

```typescript
export const skillsData: SkillCategory[] = [
  {
    category: 'Your Category',
    skills: [
      {
        name: 'Skill Name',
        proficiency: 'Expert',
        level: 'C2',
        icon: '🎯',
      },
      // Add more skills...
    ],
  },
]
```

### 3. Add Work Experience

Edit `src/data/experience.ts`:

```typescript
export const workExperience: WorkExperience[] = [
  {
    id: '1',
    title: 'Your Job Title',
    company: 'Company Name',
    location: 'City, Country',
    startDate: '2020-01',
    endDate: 'Present',
    description: 'Job description...',
    responsibilities: ['Task 1', 'Task 2'],
    technologies: ['Tech1', 'Tech2'],
  },
]
```

### 4. Add Projects

Edit `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Name',
    description: 'Short description',
    image: '/images/projects/project-1.jpg',
    technologies: ['Tech1', 'Tech2'],
    category: 'Professional',
    featured: true,
    completionDate: '2024-01',
  },
]
```

### 5. Update Colors and Branding

Edit `tailwind.config.ts` to change colors:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-primary-color',
        600: '#your-primary-color-darker',
      },
      accent: {
        500: '#your-accent-color',
      },
    },
  },
}
```

### 6. Add Your CV

1. Place your CV PDF in `public/cv/`
2. Name it `Yibeltal_Ebabu_CV.pdf` (or update the filename in the code)

### 7. Upload Your Photos

Upload images to Cloudinary and update URLs in:
- Hero section (profile photo)
- Projects (project images)
- About section (if needed)

## 🛠️ Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Type checking
npx tsc --noEmit
```

## 🎨 Component Library

Your portfolio includes pre-built UI components:

### Buttons
```tsx
import Button from '@/components/ui/Button'

<Button variant="primary" size="lg">Click Me</Button>
<Button variant="outline">Outline</Button>
```

### Cards
```tsx
import Card from '@/components/ui/Card'

<Card hover>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

### Sections
```tsx
import Section, { SectionHeader } from '@/components/ui/Section'

<Section id="about" background="gray">
  <SectionHeader 
    subtitle="About"
    title="About Me"
    description="Description here"
  />
</Section>
```

## 🔧 Troubleshooting

### Issue: Port 3000 already in use

```bash
# Use a different port
npm run dev -- -p 3001
```

### Issue: Module not found

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### Issue: TypeScript errors

```bash
# Check TypeScript configuration
npx tsc --noEmit
```

### Issue: Environment variables not working

- Ensure `.env.local` exists
- Restart dev server after changing `.env.local`
- Variables must start with `NEXT_PUBLIC_` for client-side access

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 🆘 Getting Help

If you encounter issues:

1. Check the documentation in the `docs/` folder
2. Review error messages in the terminal
3. Check browser console for errors
4. Search for similar issues online
5. Reach out for support

## ✅ Next Steps

After getting the website running locally:

1. ✅ Complete Supabase setup ([Guide](./SUPABASE_SETUP.md))
2. ✅ Complete Cloudinary setup ([Guide](./CLOUDINARY_SETUP.md))
3. ✅ Customize all content with your information
4. ✅ Upload your images to Cloudinary
5. ✅ Test the contact form
6. ✅ Deploy to production ([Guide](./DEPLOYMENT.md))

---

**Happy coding!** 🚀 Your professional portfolio is ready to showcase your amazing work!
