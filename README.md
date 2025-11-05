# Personal Website

A modern, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- ⚡ Fast performance with Next.js
- 📱 Mobile-first approach
- 🎯 SEO optimized
- ♿ Accessible components
- 🌈 Beautiful UI with Tailwind CSS

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`): Update your name and title
2. **About Section** (`components/About.tsx`): Add your personal story
3. **Experience Section** (`components/Experience.tsx`): Add your work experience
4. **Skills Section** (`components/Skills.tsx`): Update your skills and technologies
5. **Projects Section** (`components/Projects.tsx`): Add your featured projects
6. **Contact Section** (`components/Contact.tsx`): Update contact information and form handling

### Styling

The website uses Tailwind CSS for styling. You can customize colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your custom color palette
  }
}
```

### Form Submission

The contact form currently shows an alert. To enable actual form submission, integrate with:
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- Your own backend API

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons

