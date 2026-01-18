# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with dark mode support
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Next.js
- 🎯 SEO optimized
- 🚀 Easy to customize and deploy

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Adding Your Projects

Edit `lib/data.ts` and add your projects to the `projects` array:

```typescript
{
  id: "project-1",
  title: "Project Name",
  description: "Short description",
  longDescription: "Longer description",
  technologies: ["React", "TypeScript"],
  imageUrl: "/projects/project1.png", // Place images in public/projects/
  githubUrl: "https://github.com/yourusername/project",
  liveUrl: "https://project-demo.com",
  featured: true,
}
```

### Adding Your Experience

Add your experiences to the `experiences` array in `lib/data.ts`:

```typescript
{
  id: "exp-1",
  title: "Software Developer Intern",
  company: "Company Name",
  location: "Location",
  period: "May 2024 - Aug 2024",
  description: [
    "Description point 1",
    "Description point 2",
  ],
  technologies: ["React", "TypeScript"],
}
```

### Updating Social Links

Update the `socialLinks` object in `lib/data.ts` with your actual links:

```typescript
export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  email: "mailto:your.email@example.com",
};
```

### Adding Project Images

1. Place your project images in the `public/projects/` directory
2. Reference them in your project data using `/projects/filename.png`

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Connect your domain (meryamakhundova.com) in Vercel settings
4. Deploy!

### Deploy to Other Platforms

This is a static Next.js site, so it can be deployed to:
- Netlify
- GitHub Pages
- Any static hosting service

## Project Structure

```
personal-website/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page with all sections
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Navigation bar
│   ├── Hero.tsx        # Hero/landing section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Experience.tsx  # Experience timeline
│   ├── Contact.tsx     # Contact section
│   └── Footer.tsx      # Footer
├── lib/
│   └── data.ts         # Projects, experience, and skills data
└── public/
    └── projects/       # Project images
```

## Customization Tips

- Update colors in `app/globals.css` or use Tailwind classes
- Modify component styles in individual component files
- Add new sections by creating new components and adding them to `app/page.tsx`
- Update metadata in `app/layout.tsx` for better SEO

## License

This project is open source and available for personal use.
