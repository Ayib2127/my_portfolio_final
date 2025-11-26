# Supabase Setup Guide

This guide will help you set up Supabase for your portfolio website.

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in the project details:
   - **Name**: yibeltal-portfolio (or your preferred name)
   - **Database Password**: Create a strong password (save it securely)
   - **Region**: Choose the closest region to Ethiopia (e.g., Frankfurt, Singapore)
5. Click "Create new project"

## Step 2: Get Your Project Credentials

1. Once the project is created, go to **Settings** > **API**
2. Copy the following values:
   - **Project URL** (under "Project URL")
   - **anon/public key** (under "Project API keys")
   - **service_role key** (under "Project API keys" - keep this secret!)

## Step 3: Update Environment Variables

1. In your project, create a `.env.local` file (copy from `.env.example`)
2. Add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

## Step 4: Create Database Tables

Go to **SQL Editor** in your Supabase dashboard and run the following SQL:

### 1. Contact Messages Table

```sql
-- Create contact_messages table
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create index for faster queries
CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX idx_contact_messages_email ON contact_messages(email);

-- Add RLS (Row Level Security) policies
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for contact form submissions)
CREATE POLICY "Allow anonymous inserts" ON contact_messages
  FOR INSERT
  WITH CHECK (true);

-- Allow authenticated users to read (optional - for admin panel)
CREATE POLICY "Allow authenticated reads" ON contact_messages
  FOR SELECT
  USING (auth.role() = 'authenticated');
```

### 2. Projects Table (Optional - for dynamic content)

```sql
-- Create projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  long_description TEXT,
  image_url TEXT,
  technologies TEXT[],
  category TEXT CHECK (category IN ('Academic', 'Professional', 'Personal')),
  featured BOOLEAN DEFAULT false,
  project_url TEXT,
  github_url TEXT,
  completion_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create index
CREATE INDEX idx_projects_featured ON projects(featured);
CREATE INDEX idx_projects_category ON projects(category);

-- Add RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public reads" ON projects
  FOR SELECT
  USING (true);

-- Allow authenticated users to manage projects
CREATE POLICY "Allow authenticated full access" ON projects
  FOR ALL
  USING (auth.role() = 'authenticated');
```

### 3. Testimonials Table (Optional)

```sql
-- Create testimonials table
CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  message TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  image_url TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Add RLS
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public reads" ON testimonials
  FOR SELECT
  USING (true);
```

## Step 5: Configure Storage (Optional - for file uploads)

If you want to store images in Supabase:

1. Go to **Storage** in your Supabase dashboard
2. Create a new bucket called `portfolio-images`
3. Set it to **Public** if you want images to be publicly accessible
4. Configure RLS policies as needed

### Storage Policies Example:

```sql
-- Allow public read access
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'portfolio-images' );

-- Allow authenticated uploads
CREATE POLICY "Authenticated uploads"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'portfolio-images' 
  AND auth.role() = 'authenticated'
);
```

## Step 6: Test Your Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact form
3. Submit a test message
4. Check your Supabase dashboard under **Table Editor** > **contact_messages** to verify the message was saved

## Step 7: Email Notifications (Optional)

To receive email notifications when someone submits the contact form:

### Option 1: Using Supabase Edge Functions

1. Create an Edge Function to send emails
2. Trigger it when a new row is inserted into `contact_messages`

### Option 2: Using Third-Party Services

Integrate with services like:
- **SendGrid**
- **Resend**
- **Postmark**
- **AWS SES**

Add the email service configuration to your `.env.local`:

```env
EMAIL_SERVICE_API_KEY=your_api_key
EMAIL_FROM=noreply@yourdomain.com
EMAIL_TO=yibeltal2127@gmail.com
```

## Security Best Practices

1. ✅ Never commit `.env.local` to version control
2. ✅ Keep your `service_role` key secret (only use it server-side)
3. ✅ Use Row Level Security (RLS) policies
4. ✅ Validate and sanitize all user inputs
5. ✅ Use rate limiting for public endpoints
6. ✅ Enable Supabase Auth if you need admin features

## Troubleshooting

### Issue: "Failed to save message"

- Check that your Supabase URL and keys are correct
- Verify the `contact_messages` table exists
- Check RLS policies allow anonymous inserts

### Issue: CORS errors

- Make sure `NEXT_PUBLIC_SUPABASE_URL` is set correctly
- Check that you're using the correct domain in production

### Issue: "Missing required fields"

- Verify the form is sending all required fields
- Check the API route validation logic

## Next Steps

1. Set up email notifications
2. Create an admin dashboard to view messages
3. Add analytics to track form submissions
4. Implement spam protection (e.g., reCAPTCHA)

---

**Need Help?** Check the [Supabase Documentation](https://supabase.com/docs) or reach out for support.
