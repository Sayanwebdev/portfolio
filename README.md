# Sayan's Portfolio - Next.js

A modern, animated portfolio website built with Next.js 14+, featuring beautiful animations and a stunning UI.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop)

## ✨ Features

- **Modern Stack**: Next.js 14+ with App Router, TypeScript, and Tailwind CSS
- **Beautiful UI**: shadcn/ui components with Magic UI animations
- **Smooth Animations**: Framer Motion powered transitions and effects
- **Dark/Light Mode**: System-aware theme with smooth transitions
- **Contact Form**: Resend integration with custom email templates
- **Responsive Design**: Mobile-first approach for all screen sizes
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- **Performance**: Optimized images, lazy loading, and code splitting

## 🚀 Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Magic UI](https://magicui.design/) + [Framer Motion](https://www.framer.com/motion/)
- **Email**: [Resend](https://resend.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts    # Contact form API
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── ui/                 # shadcn/ui & Magic UI components
│   ├── emails/             # Email templates
│   ├── sections/           # Page sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── portfolio.tsx
│   │   └── contact.tsx
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
└── lib/
    └── utils.ts            # Utility functions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Sayanwebdev/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Create a `.env.local` file:
```bash
cp .env.example .env.local
```

4. Add your Resend API key to `.env.local`:
```env
RESEND_API_KEY=re_your_api_key_here
```

5. Update the email recipient in `src/app/api/contact/route.ts`:
```typescript
to: ["your-email@example.com"],
```

### Development

```bash
bun dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
bun run build
# or
npm run build
```

### Production

```bash
bun start
# or
npm start
```

## ⚙️ Configuration

### Theme Colors

The theme colors can be customized in `src/app/globals.css`. The portfolio uses a purple-pink gradient as the primary accent.

### Content

Update the following files to customize your portfolio:

- **Hero Section**: `src/components/sections/hero.tsx`
- **About Section**: `src/components/sections/about.tsx`
- **Skills**: `src/components/sections/skills.tsx`
- **Projects**: `src/components/sections/portfolio.tsx`
- **Contact Info**: `src/components/sections/contact.tsx`
- **Social Links**: Update in navbar.tsx and footer.tsx

### Email Configuration

1. Sign up for [Resend](https://resend.com/)
2. Get your API key from the dashboard
3. (Optional) Add a custom domain for better deliverability
4. Update the `from` address in `src/app/api/contact/route.ts`

## 📱 Sections

1. **Hero**: Animated introduction with typing effect and particles background
2. **About**: Personal introduction with highlights and image
3. **Skills**: Technical skills with animated progress bars
4. **Portfolio**: Project showcase with filtering and hover effects
5. **Contact**: Contact form with validation and email notifications

## 🎨 Animation Components Used

- **BlurFade**: Smooth fade-in with blur effect
- **Particles**: Interactive particle background
- **MagicCard**: Hover spotlight effect
- **BorderBeam**: Animated border light
- **TypingAnimation**: Typewriter text effect
- **TextAnimate**: Various text animations
- **ShineBorder**: Glowing border effect

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Magic UI](https://magicui.design/) for the stunning animations
- [Resend](https://resend.com/) for the email API

---

Made with ❤️ by Sayan Dey
