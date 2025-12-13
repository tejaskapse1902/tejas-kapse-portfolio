# Tejas Kapse - Portfolio Website

A modern, responsive personal portfolio website showcasing projects, skills, and experience.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Focused**: Fast loading times and optimized assets

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (React 19)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: shadcn/ui
- **Deployment**: Ready for Vercel/Netlify

## 📦 Installation

1. Clone or download the project
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Run development server:
   \`\`\`bash
   npm run dev
   \`\`\`
4. Open [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Update Personal Information

Edit the component files in `components/portfolio/`:

- **Hero Section** (`hero.tsx`): Name, tagline, social links
- **About Section** (`about.tsx`): Professional summary
- **Skills Section** (`skills.tsx`): Add/remove skills and categories
- **Projects Section** (`projects.tsx`): Add your projects with descriptions
- **Experience Section** (`experience.tsx`): Update work experience
- **Education Section** (`education.tsx`): Update educational background
- **Contact Section** (`contact.tsx`): Update contact information

### Customize Colors

Edit `app/globals.css` to change the color scheme:
- Primary color is defined in `--primary`
- Modify other color tokens as needed

### Add Resume

Place your resume PDF as `public/resume.pdf`

## 📁 Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles and theme
├── components/
│   ├── portfolio/          # Portfolio sections
│   │   ├── navbar.tsx
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── projects.tsx
│   │   ├── experience.tsx
│   │   ├── education.tsx
│   │   ├── contact.tsx
│   │   ├── footer.tsx
│   │   └── scroll-to-top.tsx
│   └── ui/                 # Reusable UI components
└── public/                 # Static assets
\`\`\`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Netlify

1. Push your code to GitHub
2. Import project in Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Connect

- Email: tejaskapse19@gmail.com
- GitHub: [tejaskapse1902](https://github.com/tejaskapse1902)
- LinkedIn: [Tejas Kapse](https://www.linkedin.com/in/tejas-kapse/)

---

Built with ❤️ using Next.js and Tailwind CSS
