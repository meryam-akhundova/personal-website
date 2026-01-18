# personal portfolio website

built with Next.js, TypeScript, and Tailwind CSS

### prerequisites

- Node.js 18+ and npm

### installation

1. install dependencies:
```bash
npm install
```

2. run the development server:
```bash
npm run dev
```

3. open [http://localhost:3000](http://localhost:3000) in your browser

## customization

### adding your projects

edit `lib/data.ts` and add your projects to the `projects` array:

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

### adding your experience

add your experiences to the `experiences` array in `lib/data.ts`:

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

### updating social Links

update the `socialLinks` object in `lib/data.ts` with your actual links:

```typescript
export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  email: "mailto:your.email@example.com",
};
```

## building for production

```bash
npm run build
npm start
```

## deployment

### deploy to vercel

1. push your code to GitHub
2. import your repository on [Vercel](https://vercel.com)
3. connect your domain in Vercel settings
4. deploy

## project structure

```
personal-website/
├── app/
│   ├── layout.tsx      # root layout with metadata
│   ├── page.tsx        # main page with all sections
│   └── globals.css     # global styles
├── components/
│   ├── Navigation.tsx  # navigation bar
│   ├── Hero.tsx        # landing section
│   ├── About.tsx       # about section
│   ├── Projects.tsx    # projects showcase
│   ├── Experience.tsx  # experience timeline
│   ├── Contact.tsx     # contact section
│   └── Footer.tsx      # footer
├── lib/
│   └── data.ts         # projects, experience, and skills data
└── public/
    └── projects/       # project images
```
