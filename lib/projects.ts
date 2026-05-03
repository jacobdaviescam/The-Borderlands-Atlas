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
    title: 'Persona-Conditional Steering Vectors',
    description: 'Investigates whether steering vectors for the same trait change depending on which persona a model is operating under. Extracts per-persona vectors for 8 traits across 10 character archetypes using two methods (Instruction-Variant and Contrastive Activation Addition), and tests whether the resulting geometry is persona-specific or trait-universal. Headline finding: vectors are predominantly trait-universal (cross-persona cosine similarity ~0.82 for IV) — but CAA picks up more persona-specific structure, with persona identity leaking into the vectors. Direct empirical test of the central uncertainty on the Personas page of the Atlas.',
    tags: ['AI Safety', 'Interpretability', 'Activation Steering', 'Personas', 'PyTorch', 'Research'],
    github: 'https://github.com/jacobdaviescam/steering_across_personas',
    status: 'active',
  },
  {
    title: 'Descendants: How older Claude models react to their successors',
    description: 'A small probe study using OpenRouter that asks older Claude models to react to descriptions and outputs from their newer descendants. Each pair × condition × mode crosses framing (told vs. blind), stimulus (spec sheet, sample outputs, live conversation, or self-in-descendant lineage claim), and probes how the older model responds — what it endorses, what it disowns, what it claims continuity with. Sprint-scale, qualitative, n = 1 per cell.',
    tags: ['AI Safety', 'Model Behaviour', 'OpenRouter', 'Python', 'Qualitative Research'],
    github: 'https://github.com/jacobdaviescam/descendants',
    status: 'active',
  },
  {
    title: 'The Borderlands Atlas',
    description: 'This very website — a Next.js personal site mapping current beliefs, uncertainties, and what would update them across technical AI safety, governance, and field-building.',
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

