# 🌿 Aesthetic Guide: The Greenhouse Study

## Vision

*A study within a greenhouse: bookshelves spanning from Dostoevsky to deep learning, ivy creeping over leather-bound volumes, an old map connecting disparate ideas, and a drinks globe with carefully crafted cocktails nearby.*

This site captures the aesthetic of a scholar's refuge where plants and books coexist, where a Negroni sits beside ancient philosophy, and where knowledge from disparate fields mingles at the borderlands.

## Implemented Elements

### 🌿 Botanical Elements

**Ivy Tendrils**
- Delicate vines creeping into corner ornaments
- Small leaf details that feel organic and hand-drawn
- Forest green color (#2C4A2C) at 50-70% opacity
- Animated on page load to "grow" into view

**Botanical Dividers**
- Vine motifs connecting decorative elements
- Used throughout site for visual consistency
- Component: `BotanicalDivider.tsx`
- Appears between major sections

**Location**:
- Homepage corners
- Section dividers
- Blog post separators
- Page headers

### 📚 Literary Elements

**Book Spine Accents**
- Subtle book spine in top-left corner ornament
- Burgundy with gold line detailing
- Suggests the library/study setting
- Very subtle (15% opacity)

**Section Icons**
- Book icon for Essays & Thoughts
- Map icon for Mind Maps
- Code icon for Projects
- Cocktail glass icon for About

**"Pairs Well With" Feature**
- Appears at end of blog posts
- Recommends a book and drink
- Styled as a sidebar with forest green accent
- Add to blog post frontmatter:
  ```yaml
  pairsWith:
    book: "Book Title by Author"
    drink: "Cocktail Name — tasting notes"
  ```

### 🍷 Sommelier/Mixologist Elements

**Wine Glass Silhouette**
- Delicate line-art wine glass in top-right corner
- Burgundy color matching theme
- 40% opacity for subtlety

**Cocktail Glass Icon**
- Used for "About" navigation
- Represents the bar/lounge aspect

**Drink Pairings**
- Integrated into blog posts
- Can recommend cocktails or wines
- Formatted with tasting note style

## Color Palette

```css
/* Primary Colors */
--parchment: #F4E8D0;         /* Background */
--burgundy: #6B2C2C;          /* Primary accent */
--forest: #2C4A2C;            /* Botanical elements */
--gold: #C9A961;              /* Decorative accents */
--brass: #B8860B;             /* Secondary accents */

/* Usage */
Botanical elements: forest green at 50-70% opacity
Book accents: burgundy at 15-40% opacity  
Wine/cocktail: burgundy strokes
Vines/dividers: gold with forest leaves
```

## Design Philosophy

### Barely-There Details
All elements are designed to be **subtle enhancements** rather than dominant features:
- Opacity levels: 15-70%
- Delicate line weights: 1-2px
- Small scale relative to page
- Peek in from edges rather than center

### Layered Aesthetic
Multiple themes coexist without competing:
1. **Base layer**: Parchment & typography (scholarly)
2. **Botanical layer**: Vines & leaves (greenhouse)
3. **Literary layer**: Books & maps (study)
4. **Bar layer**: Glassware & pairings (lounge)

### Contextual Details
Different sections emphasize different aspects:
- **Homepage**: All elements balanced
- **Blog**: Heavy on books & pairings
- **Atlas**: Map/cartography focus
- **Code**: More minimal, modern
- **About**: Glassware & personal touch

## How to Use

### Adding Pairings to Blog Posts

Edit your markdown frontmatter:

```yaml
---
title: "Your Post Title"
date: "2025-10-13"
excerpt: "Description"
tags: ["tag1", "tag2"]
pairsWith:
  book: "The Brothers Karamazov by Dostoevsky"
  drink: "Negroni — bitter, complex, contemplative"
---
```

**Tips for Pairings:**
- **Book**: Can be fiction, non-fiction, poetry—whatever complements the essay's theme
- **Drink**: Include tasting notes or why it pairs (e.g., "rich and layered", "sharp and refreshing")
- Either field is optional

### Customizing Botanical Elements

**To adjust vine opacity:**
Edit `app/components/BotanicalDivider.tsx` or `app/page.tsx`:
```typescript
opacity="0.6"  // Change to 0.3-0.9
```

**To change botanical color:**
```typescript
className="text-forest"  // Change to text-navy, text-brass, etc.
```

**To add more leaves:**
Add more `<path>` elements following the pattern:
```svg
<path d="M x y Q x y x y" fill="currentColor" className="text-forest" opacity="0.5" />
```

### Adding New Corner Details

Edit `CornerOrnaments()` in `app/page.tsx`:
- Each corner is a separate `<motion.div>`
- Add SVG elements inside the existing structure
- Follow opacity conventions (0.3-0.6 for main elements)
- Use transform attributes for positioning

## Visual Examples

### Corner Ornaments
```
Top-left: Ivy tendrils + book spine + decorative border
Top-right: Wine glass + ivy + decorative border
Bottom-left: Mirror of top-left (scaled)
Bottom-right: Mirror of top-right (scaled)
```

### Dividers
```
[vine—leaf] ○ [leaf—vine]
```

### Pairings Section
```
┃  📖 Pairs Well With
┃  
┃  Reading: The Brothers Karamazov
┃  🍷 Negroni — bitter, complex, contemplative
```

## Future Enhancements

**Potential additions** (all maintaining the barely-there philosophy):

1. **Seasonal botanicals**: Different plants per season
2. **Animated vines**: Subtle grow animations on scroll
3. **Vintage map borders**: On atlas pages
4. **Bookshelf sidebar**: On larger screens
5. **Cocktail recipe cards**: Expandable drink details
6. **Reading list integration**: Dynamic book recommendations

## Maintaining the Aesthetic

### Do's ✅
- Keep elements subtle (30-70% opacity)
- Use forest green for botanical
- Use burgundy for book/wine elements
- Add details at edges, not center
- Layer elements without overcrowding

### Don'ts ❌
- Don't make botanicals too prominent
- Don't use bright/saturated greens
- Don't center decorative elements
- Don't add elements without purpose
- Don't override the clean content areas

---

**The goal**: Create an atmosphere where you feel like you're sitting in a greenhouse study with a good book, a well-crafted drink, and ivy creeping along the walls—scholarly, comfortable, and at the beautiful intersection of nature, literature, and craft.

