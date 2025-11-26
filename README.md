# Yibeltal Ebabu Dires - Professional Portfolio Website

A modern, professional portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Supabase**, and **Cloudinary**.

## 🎯 About

This portfolio showcases the expertise of **Yibeltal Ebabu Dires**, a highly skilled:
- **Structural Engineer** specializing in high-rise building design
- **Engineering Software Trainer** with expertise in ETABS, SAP2000, SAFE, AutoCAD, Revit, and more
- **BSc in Civil Engineering** from Debre Markos University (CGPA: 3.73, Ranked 2nd)

## 🚀 Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Icons & Lucide** - Beautiful icons

### Backend & Storage
- **Supabase** - Backend as a Service (Authentication, Database, Storage)
- **Cloudinary** - Media management and optimization
- **Next.js API Routes** - Serverless functions

## 📁 Project Structure

```
portfolio-website/
├── public/                  # Static assets
│   ├── images/             # Images and media
│   └── cv/                 # CV PDF files
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   ├── about/          # About page
│   │   ├── projects/       # Projects showcase
│   │   ├── contact/        # Contact form
│   │   └── api/            # API routes
│   ├── components/         # React components
│   │   ├── layout/         # Layout components (Header, Footer)
│   │   ├── sections/       # Page sections (Hero, Skills, etc.)
│   │   └── ui/             # Reusable UI components
│   ├── lib/                # Utilities and configurations
│   │   ├── supabase/       # Supabase client
│   │   ├── cloudinary/     # Cloudinary setup
│   │   └── utils.ts        # Helper functions
│   ├── data/               # Content and data
│   │   ├── personal.ts     # Personal information
│   │   ├── experience.ts   # Work experience
│   │   ├── skills.ts       # Technical skills
│   │   └── projects.ts     # Portfolio projects
│   └── types/              # TypeScript types
├── .env.example            # Environment variables template
├── package.json
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Supabase account (free tier available)
- Cloudinary account (free tier available)

### Installation

1. **Clone or navigate to the project:**
   ```bash
   cd MyPortfolio/portfolio-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your actual credentials:
   - Supabase URL and keys from your Supabase project
   - Cloudinary cloud name and API credentials

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Supabase Setup

Create the following tables in your Supabase project:

### `contact_messages` table
```sql
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);
```

### `projects` table (optional, for dynamic content)
```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  technologies TEXT[],
  project_url TEXT,
  github_url TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);
```

## ☁️ Cloudinary Setup

1. Sign up at [Cloudinary](https://cloudinary.com/)
2. Get your Cloud Name, API Key, and API Secret
3. Add them to `.env.local`
4. Upload your images to Cloudinary folders:
   - `/portfolio/profile` - Profile photos
   - `/portfolio/projects` - Project images
   - `/portfolio/certificates` - Certificate images

## 📦 Build & Deploy

### Build for production:
```bash
npm run build
```

### Deploy to Vercel (Recommended):
```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Other deployment options:
- **Netlify**
- **Railway**
- **DigitalOcean App Platform**
- **AWS Amplify**

## 🎨 Features

- ✅ Fully responsive design (mobile-first)
- ✅ Modern UI with smooth animations
- ✅ SEO optimized
- ✅ Fast page loads with Next.js optimization
- ✅ Contact form with Supabase backend
- ✅ Dynamic content management
- ✅ Image optimization with Cloudinary
- ✅ Dark/Light mode (optional)
- ✅ Accessibility compliant (WCAG)
- ✅ Ethiopian cultural design touches

## 📧 Contact Information

**Yibeltal Ebabu Dires**
- 📍 Location: Addis Ababa, Ethiopia
- 📞 Phone: +251 909 63 43 53
- 📧 Email: yibeltal2127@gmail.com
- 🌐 Website: [Coming Soon]

## 📄 License

This project is private and proprietary. All rights reserved © 2024 Yibeltal Ebabu Dires

---

**Built with ❤️ and precision engineering**
