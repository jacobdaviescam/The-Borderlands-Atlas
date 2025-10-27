# CV Extraction Guide

Since your CV is in PDF format and couldn't be automatically extracted, here's a simple guide to transfer the information to your website.

## Quick Steps

1. **Open your CV.pdf** in any PDF viewer
2. **Open** `lib/portfolio.ts` in your code editor
3. **Copy and paste** the relevant information

## What to Copy Where

### Personal Information
Look for your:
- Name
- Professional title/role
- Brief bio or summary

Update in `lib/portfolio.ts`:
```typescript
personal: {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio",
}
```

### Education
For each degree, copy:
- Degree level (BS, MS, PhD, etc.)
- Field of study
- Institution name
- Location
- Dates

Add to the `education` array:
```typescript
education: [
  {
    degree: "Bachelor of Science",
    field: "Computer Science",
    institution: "University Name",
    location: "City, State",
    year: "2015-2019",
    description: "Optional details",
  }
]
```

### Experience
For each job/role:
- Job title
- Company name
- Location
- Dates (when to when)
- Key responsibilities
- Achievements/bullet points
- Technologies used

Add to the `experience` array:
```typescript
experience: [
  {
    title: "Software Engineer",
    company: "Company Name",
    location: "City, State",
    period: "2020 - Present",
    description: "What you did in this role",
    achievements: [
      "Specific achievement 1",
      "Specific achievement 2"
    ],
    technologies: ["React", "TypeScript", "Node.js"]
  }
]
```

### Skills
List your technical skills organized by category. Look for sections like:
- Programming Languages
- Frameworks/Libraries
- Tools & Technologies
- Methodologies

Add to the `skills` array:
```typescript
skills: [
  {
    category: "Programming Languages",
    items: ["JavaScript", "Python", "TypeScript"]
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Django"]
  }
]
```

### Contact Information
Find your:
- Email
- GitHub profile
- LinkedIn profile
- Location

Update in `lib/portfolio.ts`:
```typescript
contact: {
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  location: "City, State"
}
```

## Tips

1. **Start with the most important**: Education and most recent work experience
2. **Use achievement statements**: Quantify results when possible (e.g., "Increased performance by 50%")
3. **Keep it relevant**: Include technical skills and experience most relevant to your career goals
4. **Update projects**: Add your portfolio projects to `lib/projects.ts`
5. **Save as you go**: The website will automatically update when you save the file

## View Your Changes

After updating `lib/portfolio.ts`:
1. Save the file
2. Your development server should hot-reload
3. Navigate to `/about` to see your changes

## Need Help?

- See `PORTFOLIO_GUIDE.md` for detailed structure information
- See `lib/portfolio.example.ts` for a complete example
- All fields are optional - add what you have!

