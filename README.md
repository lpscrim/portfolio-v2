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
      Layout/
      Sections/
      UI/
      Animation/
    globals.css
    layout.tsx
    page.tsx
    ...
  public/
    fonts/
    photos/
    projects/
    ...
  package.json
  postcss.config.mjs
  tailwind.config.js
  ...
```

- Main pages are in [`app/page.tsx`](app/page.tsx) and [`app/projects/page.tsx`](app/projects/page.tsx)
- Parallax and animation logic in [`app/components/Sections/Home/Hero.tsx`](app/components/Sections/Home/Hero.tsx) and [`app/components/Sections/Projects/ProjectContainer.tsx`](app/components/Sections/Projects/ProjectContainer.tsx)
- Contact form in [`app/components/Layout/Form.tsx`](app/components/Layout/Form.tsx)
- Custom UI components in [`app/components/UI/`](app/components/UI/)

## Deployment

Deploy easily on [Vercel](https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app-readme).

## License

&copy; {new Date().getFullYear()} Lewis Scrimgeour. All rights reserved.
