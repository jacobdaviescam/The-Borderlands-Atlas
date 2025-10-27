# Portfolio Guide

This guide will help you populate your personal website with information from your CV.

## Quick Start

1. Open `lib/portfolio.ts` in your editor
2. Replace the placeholder data with your actual information
3. Add your education, experience, skills, and contact details
4. The About page will automatically display all the information

## Data Structure

The portfolio data structure in `lib/portfolio.ts` includes:

### Personal Information
```typescript
personal: {
  name: "Your Name",
  title: "Your Professional Title",
  bio: "A brief bio about yourself",
}
```

### Education
```typescript
education: [
  {
    degree: "Bachelor of Science", // e.g., "Master of Science", "Bachelor of Arts"
    field: "Computer Science", // Your field of study
    institution: "University Name",
    location: "City, Country",
    year: "2019-2023",
    description: "Optional additional details",
    achievements: [
      "Dean's List",
      "Relevant awards or honors"
    ]
  }
]
```

### Experience
```typescript
experience: [
  {
    title: "Software Developer",
    company: "Company Name",
    location: "City, Country",
    period: "2020 - Present", // or "Jan 2020 - Dec 2022"
    description: "Main description of your role",
    achievements: [
      "Led team of 5 developers",
      "Increased performance by 50%"
    ],
    technologies: ["TypeScript", "React", "Next.js"]
  }
]
```

### Skills
```typescript
skills: [
  {
    category: "Programming Languages",
    items: ["JavaScript", "Python", "Go", "Rust"]
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Django", "FastAPI"]
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "Kubernetes"]
  }
]
```

### Contact Information
```typescript
contact: {
  email: "your.email@example.com",
  website: "https://yourwebsite.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  location: "City, Country"
}
```

## Tips

1. **Education**: Add all degrees and certifications that are relevant to your career
2. **Experience**: Include both work experience and relevant internships or volunteer work
3. **Achievements**: Highlight quantifiable achievements where possible (e.g., "Increased revenue by 25%")
4. **Technologies**: List specific technologies you worked with at each role
5. **Skills**: Organize skills into logical categories for better presentation

## Display Options

The About page (`app/about/page.tsx`) automatically renders:
- Personal introduction with name and bio
- Education section
- Experience timeline with achievements
- Skills organized by category
- Contact links

All sections are optional - if you leave arrays empty, they won't be displayed.

## Adding More Sections

If you want to add additional sections (like publications, projects, certifications, etc.), you can:

1. Add new interfaces to `lib/portfolio.ts`
2. Add them to the `PortfolioData` interface
3. Add corresponding display components in `app/about/page.tsx`

## Example: Adding Publications

In `lib/portfolio.ts`:

```typescript
export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
}

export interface PortfolioData {
  // ... existing fields
  publications?: Publication[];
}
```

Then update the About page to display publications similarly to how education and experience are displayed.

## Updating Projects

Your technical projects are managed separately in `lib/projects.ts`. Add your projects there to showcase your work on the `/code` page.

## Need Help?

The portfolio system is designed to be flexible. If you need to add new sections or modify the display, the code in `lib/portfolio.ts` and `app/about/page.tsx` is well-commented and easy to extend.

