# Deployment Guide

## Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications and it's free for personal projects.

### Option 1: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Add New Project"
4. Import `jacobdaviescam/The-Borderlands-Atlas`
5. Click "Deploy"

That's it! Vercel will automatically detect Next.js and configure everything.

### Option 2: Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts to link your project
```

### Custom Domain

After deployment, you can add a custom domain:

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod
```

## Deploy to GitHub Pages

1. Update `next.config.ts`:

```typescript
const nextConfig = {
  output: 'export',
  basePath: '/The-Borderlands-Atlas',
  images: {
    unoptimized: true,
  },
}
```

2. Build and deploy:

```bash
npm run build
# The output will be in the `out` folder
# Use GitHub Actions or manually push to gh-pages branch
```

## Environment Variables

Currently, no environment variables are needed. If you add any APIs or services later, create a `.env.local` file:

```bash
# .env.local (never commit this file)
NEXT_PUBLIC_YOUR_VAR=value
```

## Continuous Deployment

Once connected to Vercel or Netlify, every push to the `main` branch will automatically deploy. You can also set up preview deployments for pull requests.

## Performance Tips

- Images are automatically optimized by Next.js
- Fonts are loaded via Google Fonts with `display: swap`
- CSS is purged and optimized by Tailwind
- Framer Motion animations are tree-shaken

## Monitoring

After deployment, consider adding:
- [Vercel Analytics](https://vercel.com/analytics) (built-in)
- [Google Analytics](https://analytics.google.com)
- [Plausible](https://plausible.io) (privacy-friendly alternative)

---

For more deployment options, see the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

