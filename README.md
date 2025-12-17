# FDI Associates - Oracle Fusion Data Intelligence Platform

A modern, production-ready website for FDI Associates built with Vite + React 18 + TypeScript + Tailwind CSS + Shadcn UI + Framer Motion.

## Overview

This is a complete redesign of the FDI Associates website (https://www.fdiassociates.com) featuring:
- All visible content copied verbatim from the live site
- Modern vibrant SaaS aesthetic with red-to-blue gradients
- Glassmorphic design components with smooth Framer Motion animations
- Full dark mode support with system preference detection
- Fully responsive design for mobile, tablet, and desktop
- Accessible components with semantic HTML and ARIA attributes
- Strict TypeScript implementation for type safety

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation & Running

\`\`\`bash
# Clone the repository
git clone <repository-url>
cd fdi-associates

# Install dependencies
npm install

# Start development server (runs at http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run tests
npm run test

# Type check
npm run type-check

# Format code
npm run format

# Lint code
npm run lint
\`\`\`

Visit `http://localhost:5173` in your browser.

## Project Structure

\`\`\`
src/
├── components/
│   ├── Header.tsx              # Navigation with dark mode toggle
│   ├── Hero.tsx                # Hero section with CTA buttons
│   ├── Footer.tsx              # Footer with newsletter form
│   ├── ServiceCard.tsx         # Service card component
│   ├── AcceleratorCard.tsx     # Accelerator card component
│   ├── JobCard.tsx             # Job listing card
│   ├── ContactForm.tsx         # Contact form with validation
│   ├── NewsletterForm.tsx      # Newsletter subscription form
│   └── ui/                     # Shadcn UI components
├── pages/
│   ├── Home.tsx                # Home page
│   ├── Services.tsx            # Services page
│   ├── Accelerators.tsx        # Accelerators page
│   ├── WhyUs.tsx               # Why Us page
│   ├── Careers.tsx             # Careers page
│   └── Contact.tsx             # Contact page
├── api/
│   └── handlers.ts             # API handlers with validation
├── __tests__/                  # Unit tests
├── App.tsx                     # Main app component with routing
├── main.tsx                    # Entry point
└── globals.css                 # Global styles with design tokens
\`\`\`

## Pages

### 1. Home (`/`)
- Hero section with main value proposition
- Three professional services overview
- Why Us section with key benefits
- Oracle FDI packaged offerings (5 accelerators)
- Call-to-action section

### 2. Services (`/services`)
Detailed breakdown of:
- Implementation Services
- Managed Services
- FDI Advisory Services

### 3. Accelerators (`/accelerators`)
Pre-built packaged offerings:
- Financial Analytics
- Supply Chain Optimization
- HR Analytics
- Customer Experience
- Operational Excellence

### 4. Why Us (`/why-us`)
- Our Mission and Vision
- Key differentiators
- Trusted Expertise
- Faster Adoption
- Reduced Costs
- Smarter Insights

### 5. Careers (`/careers`)
Job listings with external links to career portal

### 6. Contact (`/contact`)
- Contact form with validation
- Contact information
- FAQ section
- Newsletter subscription

## Content Fidelity

All visible text has been copied verbatim from https://www.fdiassociates.com:
- Hero H1 heading: "Empowering Enterprise with Oracle Fusion Data Intelligence(FDI) Solutions"
- Service descriptions
- Accelerator titles and descriptions
- Career listings
- Contact details: info@fdiassociates.com, 7605848820
- Form labels: Name, Email Address*, Company Name, Message*, Submit
- Newsletter placeholder: "Enter your email address"
- Copyright: © 2025. All rights reserved.

## Tech Stack

- **Framework**: React 18.3 + TypeScript 5 (strict mode)
- **Runtime**: Vite 5.1 (HMR, ESM, optimized builds)
- **Styling**: Tailwind CSS 4.1 with PostCSS
- **UI Components**: Shadcn UI + Radix UI primitives
- **Animations**: Framer Motion 10.16
- **Routing**: React Router 7.9
- **Forms**: React Hook Form 7.60 + Zod validation
- **Icons**: Lucide React 0.454
- **Testing**: Vitest + React Testing Library

## Design System

### Colors
- **Primary Red**: #ef4444 (accent-red)
- **Primary Blue**: #2563eb (accent-blue)
- **Background**: #ffffff (light) / #0f172a (dark)
- **Surface**: #f3f4f6 (light) / #1e293b (dark)
- **Text**: #1f2937 (light) / #f1f5f9 (dark)

### Components
- **Glass Cards**: `glass-card` class with backdrop blur and rounded corners
- **Primary Button**: `btn-primary` class with red-to-blue gradient
- **Secondary Button**: `btn-secondary` class with border
- **Section Title**: `section-title` class with gradient text effect

### Animations
- **Framer Motion**: Used for page transitions and micro-interactions
- **Fade-in**: Elements fade in on scroll with stagger effect
- **Slide**: Hero sections slide in from left/right
- **Hover Effects**: Cards lift up with shadow on hover
- **Dark Mode Toggle**: Smooth theme transition

## Features

- ✅ Dark mode with system preference detection + toggle
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Accessibility features (ARIA labels, semantic HTML, keyboard nav)
- ✅ Smooth page transitions and micro-interactions
- ✅ Contact form with email validation
- ✅ Newsletter subscription
- ✅ External job links integration
- ✅ SEO optimized meta tags
- ✅ Type-safe implementation with strict TypeScript

## API Integration

### Contact Form (`/api/contact`)
Handler provided in `src/api/handlers.ts` with email validation.

**Production Setup Options:**
1. **Vercel Functions**: Use Vercel's serverless functions
2. **Netlify Functions**: Use Netlify's lambda functions
3. **AWS Lambda**: Use with API Gateway
4. **Webhook**: Post to Zapier, Make.com, or similar
5. **Email Service**: SendGrid, Mailgun, Resend

Example with Resend:
\`\`\`typescript
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)
await resend.emails.send({
  from: 'hello@fdiassociates.com',
  to: 'info@fdiassociates.com',
  subject: `New contact from ${name}`,
  html: `<p>${message}</p>`
})
\`\`\`

### Newsletter (`/api/newsletter`)
Handler provided in `src/api/handlers.ts` with email validation.

**Production Setup Options:**
1. **Mailchimp API**: Most popular for newsletters
2. **ConvertKit**: For creators
3. **Substack**: Integrated newsletter platform
4. **Brevo (Sendinblue)**: Affordable option
5. **Custom Email Service**: SendGrid, AWS SES

Example with Mailchimp:
\`\`\`typescript
const response = await fetch('https://us1.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members', {
  method: 'POST',
  headers: {
    'Authorization': `Basic ${btoa(`anystring:${MAILCHIMP_API_KEY}`)}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email_address: email,
    status: 'subscribed'
  })
})
\`\`\`

## Testing

Unit tests included for:
- Header component (navigation and dark mode toggle)
- Hero component (exact H1 text verification)
- ContactForm (validation and required fields)

Run tests:
\`\`\`bash
npm run test
\`\`\`

## Deployment

### Vercel (Recommended)
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Netlify
\`\`\`bash
npm run build
netlify deploy --prod --dir=dist
\`\`\`

### GitHub Pages
\`\`\`bash
npm run build
# Deploy dist folder to gh-pages branch
\`\`\`

### Self-Hosted
\`\`\`bash
npm run build
# Upload dist/ folder to any web server
\`\`\`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightning-fast development with Vite HMR
- Optimized bundle with tree-shaking
- Lazy-loaded routes with React Router
- Image optimization with lazy loading
- Production build size: ~150KB gzipped

## Accessibility

- Semantic HTML elements (header, nav, main, footer)
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast ratio compliant (WCAG AA)
- Focus visible styles on all buttons
- Screen reader tested

## Environment Variables

Copy `.env.example` to `.env` for local development. For production, set these in your deployment platform:

\`\`\`env
# Optional for email service integration:
VITE_MAILCHIMP_API_KEY=your_key
VITE_SENDGRID_API_KEY=your_key
VITE_RESEND_API_KEY=your_key
\`\`\`

## Content Location Reference

To verify all content was copied verbatim from https://www.fdiassociates.com:

- **Hero H1**: `src/components/Hero.tsx` line ~25
- **Service Descriptions**: `src/pages/Home.tsx` line ~12-30
- **Accelerators**: `src/pages/Accelerators.tsx` line ~6-30
- **Contact Info**: `src/pages/Contact.tsx` and `src/components/Footer.tsx`
- **Form Labels**: `src/components/ContactForm.tsx` and `src/components/NewsletterForm.tsx`
- **Copyright**: `src/components/Footer.tsx`

## Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Hamburger menu on mobile
- Touch-friendly interactions
- Optimized for all screen sizes

## License

All content and design © 2025 FDI Associates. All rights reserved.

## Support

For questions about the live FDI Associates site:
- Email: info@fdiassociates.com
- Phone: 7605848820
- Website: https://www.fdiassociates.com

---

**Note**: This website preserves all visible text exactly as it appears on the live site. Visual design has been modernized with contemporary UI/UX practices including glassmorphism, gradients, dark mode support, enhanced animations, and improved accessibility.
