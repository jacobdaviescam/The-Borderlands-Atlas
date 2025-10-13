# The Borderlands Atlas

> *Charting the territory between knowing and unknowing*

A personal website built with Next.js, embodying the aesthetic of dark academia meets modern technology—a space for essays, mind maps, and explorations from the borderlands of knowledge.

## ✨ Design Philosophy

This site lives at the intersection of classic and contemporary:
- **Typography**: EB Garamond for that timeless, scholarly feel
- **Color Palette**: Rich burgundy, forest greens, warm parchment tones with gold/brass accents
- **Layout**: Clean centered content with ornate decorative elements at the edges
- **Aesthetic**: "Desert lounge" meets Russian literature meets modern tech

## 🗺️ Structure

- **Essays & Thoughts** (`/blog`) - Long-form writing and explorations
- **Mind Maps** (`/atlas`) - Interactive visualizations of interconnected ideas
- **Code & Projects** (`/code`) - Technical experiments and creations
- **About** (`/about`) - Information about the cartographer

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Mind Maps**: Markmap with D3.js (interactive visualizations)
- **Content**: Markdown files with gray-matter (easily portable from Obsidian)
- **Rendering**: React Markdown with GitHub Flavored Markdown support

## 📝 Adding Content

### Blog Posts

Add markdown files to `content/blog/`:

```markdown
---
title: "Your Post Title"
date: "2025-01-01"
excerpt: "A brief description"
---

Your content here...
```

### Mind Maps

Add markdown files to `content/atlas/` using standard markdown format. Markmap will convert them to interactive visualizations.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

## 🌐 Deployment

This site can be deployed to:
- [Vercel](https://vercel.com) (recommended for Next.js)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com) (with static export)

## 📚 Philosophy

The Borderlands Atlas is inspired by the concept of epistemic humility—the recognition that the edge of knowledge is where the most interesting work happens. It's a space for:

- Mapping what we know
- Acknowledging what we don't
- Planning expeditions into the unknown
- Finding beauty in the liminal spaces between disciplines

---

*"Welcome to the borderlands—that liminal space where certainty fades and curiosity begins."*
