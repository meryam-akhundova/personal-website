# Setup Guide for Your Portfolio Website

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Adding Your Content

### Step 1: Add Your Projects

1. **Download project images from your Wix site:**
   - Visit meryamakhundova.com
   - Right-click on project images and save them
   - Place them in the `public/projects/` folder
   - Name them descriptively (e.g., `project1.png`, `todo-app.png`)

2. **Edit `lib/data.ts`:**
   - Open the file and find the `projects` array
   - Add your projects following this structure:

   ```typescript
   {
     id: "unique-id",
     title: "Project Name",
     description: "A brief one-line description",
     longDescription: "A longer description explaining what the project does, what you learned, and any challenges you faced",
     technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
     imageUrl: "/projects/your-image-name.png",
     githubUrl: "https://github.com/yourusername/project-repo",
     liveUrl: "https://your-project-demo.com", // Optional
     featured: true, // Set to true for projects you want to highlight
   }
   ```

### Step 2: Add Your Experience

Edit the `experiences` array in `lib/data.ts`:

```typescript
{
  id: "exp-1",
  title: "Your Position Title",
  company: "Company Name",
  location: "City, Country",
  period: "Start Date - End Date",
  description: [
    "Achievement or responsibility 1",
    "Achievement or responsibility 2",
    "Achievement or responsibility 3",
  ],
  technologies: ["React", "Python", "AWS"], // Optional
}
```

### Step 3: Update Your Skills

Edit the `skills` object in `lib/data.ts` to reflect your actual skills:

```typescript
export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
  frontend: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  backend: ["Node.js", "Express", "REST APIs"],
  tools: ["Git", "GitHub", "VS Code", "Figma"],
};
```

### Step 4: Update Social Links

Update the `socialLinks` object in `lib/data.ts`:

```typescript
export const socialLinks = {
  github: "https://github.com/your-actual-username",
  linkedin: "https://linkedin.com/in/your-actual-username",
  email: "mailto:your-actual-email@example.com",
};
```

### Step 5: Customize About Section

Edit `components/About.tsx` to personalize:
- Your background story
- What you're learning
- Your interests and goals

### Step 6: Update Metadata

Edit `app/layout.tsx` to update:
- Page title
- Meta description (for SEO)

## Deploying Your Website

### Option 1: Deploy to Vercel (Recommended - Free)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Connect Your Domain:**
   - In Vercel project settings, go to "Domains"
   - Add `meryamakhundova.com`
   - Follow the DNS configuration instructions
   - Update your domain's DNS records as instructed

### Option 2: Deploy to Netlify

1. Push to GitHub (same as above)
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Add your domain in Netlify settings

## Tips for Migrating from Wix

1. **Export Images:**
   - Download all project images from your Wix site
   - Optimize them (use tools like TinyPNG or ImageOptim)
   - Keep file sizes under 500KB for faster loading

2. **Copy Project Descriptions:**
   - Review your current Wix site
   - Copy project descriptions and adapt them to the new format
   - You can make them more detailed in the new site!

3. **Test Responsively:**
   - Test on mobile, tablet, and desktop
   - Make sure all images load correctly
   - Check that all links work

4. **SEO:**
   - Update meta descriptions
   - Add alt text to images
   - Ensure all pages have proper titles

## Customization

- **Colors:** Edit `app/globals.css` or use Tailwind classes directly
- **Fonts:** The site uses Geist Sans and Geist Mono (already included)
- **Layout:** Modify component files in the `components/` folder
- **Styling:** All components use Tailwind CSS - easy to customize!

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS Docs: https://tailwindcss.com/docs
- Vercel Deployment: https://vercel.com/docs

Good luck with your portfolio! 🚀
