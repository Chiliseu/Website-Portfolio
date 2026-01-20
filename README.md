# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Ready for deployment on Vercel.

## ✨ Features

- **Modern Design** - Clean and professional dark theme with gradient accents
- **Responsive** - Fully responsive design that works on all devices
- **Fast Performance** - Built with Next.js for optimal performance
- **SEO Optimized** - Meta tags and semantic HTML for better search rankings
- **Easy to Customize** - Well-organized code structure

## 📦 Sections

- **Hero** - Eye-catching introduction with social links
- **About** - Personal information and stats
- **Skills** - Technical skills with progress bars
- **Projects** - Showcase of work with links
- **Contact** - Contact form and information
- **Footer** - Quick links and social media

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

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

## 📝 Customization

### Personal Information
Edit the following files to add your information:

- `src/components/Hero.tsx` - Your name, title, and social links
- `src/components/About.tsx` - Your bio and stats
- `src/components/Skills.tsx` - Your technical skills
- `src/components/Projects.tsx` - Your projects
- `src/components/Contact.tsx` - Your contact details
- `src/app/layout.tsx` - Site metadata (title, description)

### Styling
- `src/app/globals.css` - Global styles and CSS variables
- `tailwind.config.ts` - Tailwind theme customization

## 🌐 Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

### Option 1: Deploy via Vercel Dashboard

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Run the deploy command:
   ```bash
   vercel
   ```

3. Follow the prompts to link your project and deploy.

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   └── components/
│       ├── About.tsx        # About section
│       ├── Contact.tsx      # Contact form
│       ├── Footer.tsx       # Footer
│       ├── Hero.tsx         # Hero section
│       ├── Navbar.tsx       # Navigation bar
│       ├── Projects.tsx     # Projects showcase
│       └── Skills.tsx       # Skills section
├── public/                  # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## 🛠 Built With

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [ESLint](https://eslint.org/) - Linting

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📜 License

This project is open source and available under the MIT License.

---

**Note:** Remember to replace placeholder content (name, email, social links, projects) with your actual information before deploying!
