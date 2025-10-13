# Getting Started with The Borderlands Atlas

## 🎨 Your Website is Live (Locally)!

Your development server is running at: **http://localhost:3000**

Open your browser and visit it to see your beautiful dark academia website!

## 📁 Project Structure

```
borderlands_atlas/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Homepage (with ornate corners!)
│   ├── blog/                # Essays & Thoughts section
│   ├── atlas/               # Mind Maps section
│   ├── code/                # Code & Projects section
│   ├── about/               # About page
│   ├── components/          # Reusable components
│   ├── layout.tsx           # Root layout with EB Garamond
│   └── globals.css          # Custom theme & styling
├── content/                 # Your markdown content
│   ├── blog/                # Blog posts go here
│   └── atlas/               # Mind map files go here
├── public/                  # Static assets
└── README.md
```

## ✍️ Adding Your Content

### Blog Posts (from Obsidian)

1. Copy your markdown files from Obsidian to `content/blog/`
2. Add frontmatter at the top:

```markdown
---
title: "Your Post Title"
date: "2025-10-13"
excerpt: "A brief description"
tags: ["tag1", "tag2"]
---

Your content here...
```

### Mind Maps

1. Add markdown files to `content/atlas/`
2. Use standard markdown headings - Markmap will convert them to interactive visualizations
3. See `content/atlas/example-mindmap.md` for an example

## 🎨 Customizing the Design

### Colors
Edit `app/globals.css` to adjust the color palette:
- `--parchment`: Background color
- `--burgundy`: Primary accent
- `--gold`: Decorative accents
- `--forest`, `--navy`: Additional colors

### Typography
The site uses **EB Garamond** by default. To change fonts, edit `app/layout.tsx`

### Ornamental Corners
The decorative SVG corners are in `app/page.tsx` - customize them to your taste!

## 🚀 Next Steps

### 1. Deploy to Vercel (5 minutes)
- Visit [vercel.com](https://vercel.com)
- Import your GitHub repo: `jacobdaviescam/The-Borderlands-Atlas`
- Click Deploy
- Done! You'll get a live URL like `borderlands-atlas.vercel.app`

### 2. Add Custom Domain (Optional)
- Buy a domain (Namecheap, Google Domains, etc.)
- Add it in Vercel project settings
- Update DNS records as shown

### 3. Add More Projects
Edit `lib/projects.ts` to add your projects:
```typescript
{
  title: 'Your Project',
  description: 'Description here',
  tags: ['React', 'TypeScript'],
  github: 'https://github.com/...',
  status: 'active',
}
```

### 4. Customize Mind Maps
The Markmap component uses your theme colors (burgundy, gold, brass).
Add more `.md` files to `content/atlas/` and they'll automatically become interactive maps!

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Add new dependencies
npm install package-name
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Markmap](https://markmap.js.org/)

## 🎯 Current Status

✅ **Completed**
- Dark academia aesthetic with ornate borders
- Homepage with smooth animations
- Navigation structure (Blog, Atlas, Code, About)
- EB Garamond typography
- Parchment color palette with gold accents
- GitHub repository created and pushed
- Sample blog post and mindmap
- **Blog post rendering system** ✨
- **Interactive mind map implementation with Markmap** ✨
- **Code projects gallery** ✨

🔄 **Next Phase** (when you're ready)
- RSS feed
- Search functionality
- Custom D3.js map visualizations
- Newsletter integration

## 💡 Tips

1. **Markdown Files**: Write in Obsidian, copy to `content/blog/`
2. **Images**: Place in `public/images/` and reference as `/images/filename.jpg`
3. **Git Workflow**: 
   ```bash
   git add .
   git commit -m "Your message"
   git push
   ```
4. **Vercel Auto-Deploy**: Once connected, every git push auto-deploys!

---

**Your GitHub Repo**: https://github.com/jacobdaviescam/The-Borderlands-Atlas

Enjoy mapping the borderlands! 🗺️

