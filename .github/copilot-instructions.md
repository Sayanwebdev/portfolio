# Sayan's Portfolio - Copilot Instructions

## Project Overview
This is a modern portfolio website built with Next.js 14+, featuring:
- App Router with TypeScript
- Tailwind CSS v4 for styling
- shadcn/ui components
- Magic UI animations (blur-fade, particles, etc.)
- Resend for contact form emails
- Dark/Light mode support with next-themes

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (new-york style)
- **Animations**: Magic UI, Framer Motion
- **Email**: Resend
- **Icons**: Lucide React

## Project Structure
```
src/
├── app/
│   ├── api/contact/route.ts  # Resend API endpoint
│   ├── globals.css           # Global styles & theme
│   ├── layout.tsx            # Root layout with providers
│   └── page.tsx              # Main portfolio page
├── components/
│   ├── ui/                   # shadcn/ui & Magic UI components
│   ├── emails/               # Resend email templates
│   ├── sections/             # Portfolio sections
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
└── lib/
    └── utils.ts
```

## Key Files to Edit
- **Content**: Update text/data in `src/components/sections/`
- **Styling**: Modify `src/app/globals.css` for theme colors
- **Email**: Configure `src/app/api/contact/route.ts` with your email

## Environment Variables
Required in `.env.local`:
```
RESEND_API_KEY=re_your_api_key
```

## Development Commands
- `bun dev` - Start development server
- `bun run build` - Build for production
- `bun start` - Start production server

## Styling Notes
- Uses Tailwind CSS v4 with new class syntax
- Theme colors defined in CSS variables
- Both `bg-gradient-to-r` and `bg-linear-to-r` work
- Dark mode via `class` attribute on html element

## Component Patterns
- All client components marked with "use client"
- BlurFade for entrance animations
- MagicCard for hover effects
- BorderBeam for featured items
- Particles for background effects
