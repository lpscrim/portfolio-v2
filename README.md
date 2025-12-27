# Lewis Scrimgeour Web Design Portfolio

This is a [Next.js](https://nextjs.org) portfolio project for Lewis Scrimgeour, a web designer and developer specializing in modern, responsive, and user-friendly websites.

## Features

- **Modern Next.js 14 App Router** architecture
- **Custom Parallax Effects** for hero and projects sections
- **Animated UI** with GSAP and ScrollTrigger
- **Responsive Design** with Tailwind CSS
- **Photography Gallery** and project showcases
- **Contact Form** with Netlify integration
- **Smooth Scrolling** using Lenis
- **Custom Animations** and transitions
- **Accessible and SEO-friendly**

## Getting Started

First, install dependencies:

```sh
npm install
# or
yarn install
```

Then, run the development server:

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
portfolio-v2/
  app/
    components/
      Layout/           # Header, Footer, Form components
      Sections/         # Home, Photo, Projects sections
      UI/              # Card, Button, NavIcon components
      Animation/       # Clock animation component
      Functions/       # LenisScroll utility
    data/
      projects.tsx     # Project data
    photo/
      page.tsx         # Photography page
    projects/
      [slug]/          # Dynamic project pages
      page.tsx         # Projects listing page
    globals.css        # Global styles and animations
    layout.tsx         # Root layout
    page.tsx           # Home page
  public/
    fonts/             # Custom fonts (Ballmer)
    photos/            # Photography gallery images
    projects/          # Project thumbnails
    Layered/           # Parallax layer images
    Vids/              # Project demo videos
  package.json
  postcss.config.mjs
  next.config.ts
  tailwind.config.ts
  tsconfig.json
  eslint.config.mjs
```

## Key Components

### Pages
- [`app/page.tsx`](app/page.tsx) - Home page with Hero and About sections
- [`app/projects/page.tsx`](app/projects/page.tsx) - Projects showcase page
- [`app/photo/page.tsx`](app/photo/page.tsx) - Photography gallery page
- [`app/projects/[slug]/page.tsx`](app/projects/[slug]/page.tsx) - Individual project detail pages

### Layout Components
- [`app/components/Layout/Header.tsx`](app/components/Layout/Header.tsx) - Navigation header with mobile menu
- [`app/components/Layout/Footer.tsx`](app/components/Layout/Footer.tsx) - Footer with social links
- [`app/components/Layout/Form.tsx`](app/components/Layout/Form.tsx) - Contact form with Netlify integration

### Section Components
- [`app/components/Sections/Home/Hero.tsx`](app/components/Sections/Home/Hero.tsx) - Hero section with parallax effect
- [`app/components/Sections/Home/About.tsx`](app/components/Sections/Home/About.tsx) - About section with featured projects
- [`app/components/Sections/Projects/ProjectContainer.tsx`](app/components/Sections/Projects/ProjectContainer.tsx) - Projects container with parallax
- [`app/components/Sections/Projects/Proj.tsx`](app/components/Sections/Projects/Proj.tsx) - Projects grid component
- [`app/components/Sections/Photo/Photo.tsx`](app/components/Sections/Photo/Photo.tsx) - Photography gallery with load more

### UI Components
- [`app/components/UI/Card.tsx`](app/components/UI/Card.tsx) - Project card with video preview
- [`app/components/UI/Button.tsx`](app/components/UI/Button.tsx) - Reusable button component
- [`app/components/UI/NavIcon.tsx`](app/components/UI/NavIcon.tsx) - Hamburger menu icon

### Animation
- [`app/components/Animation/Clock.tsx`](app/components/Animation/Clock.tsx) - Interactive clock animation
- [`app/components/Functions/LenisScroll.tsx`](app/components/Functions/LenisScroll.tsx) - Smooth scroll integration

### Data
- [`app/data/projects.tsx`](app/data/projects.tsx) - Project portfolio data with details, images, and videos

## Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS, CSS Modules
- **Animations**: GSAP, ScrollTrigger, Lenis
- **Forms**: Netlify Forms
- **Icons & Images**: Next.js Image optimization
- **Type Safety**: TypeScript
- **Linting**: ESLint with Next.js config

## Features in Detail

### Parallax Effects
The portfolio features custom parallax scrolling effects implemented with vanilla JavaScript in both the Hero section and Projects showcase, creating dynamic visual depth as users scroll.

### Responsive Design
Fully responsive design using Tailwind CSS breakpoints (sm, md, lg, xl, 2xl) ensuring optimal viewing on all devices from mobile to 4K displays.

### Photography Gallery
Dynamic photography gallery with lazy loading, responsive grid layout (2-3 columns depending on screen size), and "Show more/less" functionality.

### Project Showcase
Interactive project cards featuring:
- Video preview on hover/scroll
- Brief description overlay
- Dynamic slug-based routing
- Detailed project pages with full descriptions, tech stack, and links

### Smooth Scrolling
Integrated Lenis smooth scrolling library with GSAP ScrollTrigger for enhanced scroll experience and trigger-based animations.

### Contact Form
Netlify-integrated contact form with:
- Form validation
- Success/error messaging
- Accessibility features
- Mobile-responsive layout

## Styling

The project uses a custom color theme defined in [`app/globals.css`](app/globals.css):

- **Background**: `#fdfdfc` (light cream)
- **Foreground**: `#141414` (dark)
- **Primary**: `#6C9A8B` (sage green)
- **Secondary**: `#32726d` (teal)
- **Accent**: `#e9d7d3` (blush)
- **Button**: `#864d34` (rust brown)

Custom font "Ballmer" is used for headings via the `.home-title` class.

## Deployment

Deploy easily on [Vercel](https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app-readme):

```sh
npm run build
npm run start
```

## Performance

- **Image Optimization**: Next.js Image component for automatic optimization
- **Code Splitting**: Automatic code splitting with Next.js
- **Dynamic Imports**: Lazy loading of components
- **CSS Optimization**: Purged unused styles with Tailwind CSS

## Browser Support

- Modern browsers with ES6+ support
- Graceful degradation for older browsers (site remains functional without JavaScript)
- Webkit scrollbar styling for enhanced custom scrollbars

## License

&copy; 2025 Lewis Scrimgeour. All rights reserved.

## Contact

For inquiries or collaborations, visit the [contact form](#contact) on the website or email at Lpscrim@gmail.com.
