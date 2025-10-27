// EXAMPLE: This file shows what the portfolio data structure looks like
// Copy and customize the data in lib/portfolio.ts

import { PortfolioData } from './portfolio';

export const examplePortfolioData: PortfolioData = {
  personal: {
    name: "Jane Doe",
    title: "Full-Stack Developer & Technical Writer",
    bio: "Passionate developer with 5+ years of experience building scalable web applications. Love exploring new technologies and sharing knowledge through writing.",
  },
  education: [
    {
      degree: "Master of Science",
      field: "Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      year: "2018-2020",
      description: "Focused on machine learning and distributed systems",
      achievements: [
        "Graduated magna cum laude",
        "Teaching Assistant for Data Structures course"
      ]
    },
    {
      degree: "Bachelor of Science",
      field: "Software Engineering",
      institution: "MIT",
      location: "Cambridge, MA",
      year: "2014-2018",
      description: "Software engineering fundamentals with emphasis on clean code and architecture"
    }
  ],
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Tech Startup Inc.",
      location: "San Francisco, CA",
      period: "2021 - Present",
      description: "Lead development of customer-facing web platform serving 1M+ users. Architect and implement scalable solutions using modern web technologies.",
      achievements: [
        "Led team of 6 engineers to rebuild legacy system",
        "Reduced page load time by 60% through optimization",
        "Implemented CI/CD pipeline reducing deployment time by 80%"
      ],
      technologies: ["TypeScript", "React", "Next.js", "AWS", "Docker", "Kubernetes"]
    },
    {
      title: "Software Engineer",
      company: "Big Corp",
      location: "San Francisco, CA",
      period: "2018 - 2021",
      description: "Developed and maintained internal tools and APIs. Collaborated with cross-functional teams to deliver high-quality software.",
      achievements: [
        "Built RESTful API serving 500K requests daily",
        "Improved code quality metrics by 40%",
        "Mentored 3 junior developers"
      ],
      technologies: ["Python", "Django", "PostgreSQL", "Docker"]
    },
    {
      title: "Software Development Intern",
      company: "Startup Company",
      location: "Boston, MA",
      period: "Summer 2017",
      description: "Assisted in developing mobile application features. Learned agile development practices and modern frameworks.",
      technologies: ["JavaScript", "React Native", "Redux"]
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["JavaScript", "TypeScript", "Python", "Go", "Java"]
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "GraphQL"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Django", "FastAPI", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"]
    },
    {
      category: "Tools & Methodologies",
      items: ["Git", "Agile", "Scrum", "TDD", "Microservices"]
    }
  ],
  contact: {
    email: "jane.doe@example.com",
    github: "https://github.com/janedoe",
    linkedin: "https://linkedin.com/in/janedoe",
    twitter: "https://twitter.com/janedoe",
    location: "San Francisco, CA"
  }
};

