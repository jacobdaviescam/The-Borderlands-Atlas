// Portfolio/CV Data
// Update this file with your professional information

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  year: string;
  description?: string;
  achievements?: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
  technologies?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Contact {
  email?: string;
  website?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  location?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    bio: string;
    avatar?: string;
  };
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  contact: Contact;
}

// Update this data with your information
export const portfolioData: PortfolioData = {
  personal: {
    name: "Jacob Davies",
    title: "Software Developer & Explorer",
    bio: "I find myself drawn to the spaces between disciplines, between certainty and doubt, between the ancient wisdom of classical literature and the cutting edge of modern technology. This website serves as a cartographic journal for someone perpetually stationed in the borderlands of knowledge.",
  },
  education: [
    // Example structure - update with your education
    {
      degree: "Bachelor of Science",
      field: "Computer Science",
      institution: "University",
      location: "Location",
      year: "20XX",
      description: "Focus on software engineering and modern web development",
    },
    // Add more education entries as needed
  ],
  experience: [
    // Example structure - update with your experience
    {
      title: "Software Developer",
      company: "Company Name",
      location: "Location",
      period: "2020 - Present",
      description: "Developed and maintained web applications using modern frameworks",
      achievements: [
        "Built scalable frontend applications",
        "Collaborated with cross-functional teams",
      ],
      technologies: ["TypeScript", "React", "Next.js"],
    },
    // Add more experience entries as needed
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["TypeScript", "JavaScript", "Python", "Java"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Next.js", "Node.js", "Tailwind CSS"],
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "Docker", "AWS", "Linux"],
    },
  ],
  contact: {
    email: "your.email@example.com",
    github: "https://github.com/jacobdaviescam",
    linkedin: "https://linkedin.com/in/yourprofile",
    location: "Location",
  },
};

export function getPortfolioData(): PortfolioData {
  return portfolioData;
}

