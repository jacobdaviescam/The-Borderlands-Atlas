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
  {
    title: 'ARENA Capstone: Thought Anchors',
    description: 'White-box AI safety research extending the Thought Anchors methodology from reasoning analysis to practical intervention. Demonstrates that targeted activation patching at critical reasoning layers can prevent harmful AI decisions while preserving general capabilities.',
    tags: ['AI Safety', 'Interpretability', 'Activation Patching', 'PyTorch'],
    github: 'https://github.com/jacobdaviescam/ARENA-Capstone',
    status: 'completed',
  },
  {
    title: 'SLP Dissertation: Dependency Parsing Research',
    description: 'MSc dissertation project. Features novel semantic-to-syntactic conversion algorithms, systematic evaluation of neural parser architectures, and visualization framework.',
    tags: ['NLP', 'Dependency Parsing', 'Python', 'PyTorch', 'Neural Networks', 'Data Visualization', 'Research'],
    github: 'https://github.com/jacobdaviescam/SLPDissertation',
    status: 'completed',
  },
  // Add more projects here...
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getActiveProjects(): Project[] {
  return projects.filter(p => p.status === 'active');
}

