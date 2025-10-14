export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  status: 'active' | 'completed' | 'archived';
}

// You can edit this file directly or later move to a JSON/markdown system
export const projects: Project[] = [
  {
    title: 'The Borderlands Atlas',
    description: 'This very website - a Next.js personal site exploring the intersection of aesthetics and modern web technology.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/jacobdaviescam/The-Borderlands-Atlas',
    status: 'active',
  },
  // Add more projects here...
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getActiveProjects(): Project[] {
  return projects.filter(p => p.status === 'active');
}

