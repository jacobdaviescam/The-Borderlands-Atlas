export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  status: 'active' | 'completed' | 'archived';
  year?: string;
  role?: string;
  highlights?: string[];
}

// You can edit this file directly or later move to a JSON/markdown system
export const projects: Project[] = [
  {
    title: 'The Borderlands Atlas',
    description: 'This very website - a Next.js personal site exploring the intersection of aesthetics and modern web technology.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/jacobdaviescam/The-Borderlands-Atlas',
    status: 'active',
    year: '2024',
    role: 'Full-stack Developer',
    highlights: [
      'Built with Next.js 15 and TypeScript',
      'Implemented responsive design with Tailwind CSS',
      'Created interactive mind map visualizations',
      'Developed blog system with markdown support'
    ]
  },
  // Add more projects here...
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getActiveProjects(): Project[] {
  return projects.filter(p => p.status === 'active');
}

