import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const atlasDirectory = path.join(process.cwd(), 'content/atlas');

export type Region = 'technical-safety' | 'technical-governance' | 'governance';
export type TopicStatus = 'exploring' | 'developing' | 'settled';

export interface Topic {
  slug: string;
  title: string;
  region: Region;
  tagline: string;
  status: TopicStatus;
  order: number;
  lastReviewed?: string;
  lastSubstantiveUpdate?: string;
  related: string[];
  content: string;
}

export const REGIONS: { id: Region; label: string; description: string }[] = [
  {
    id: 'technical-safety',
    label: 'Technical Safety',
    description: 'The engineering',
  },
  {
    id: 'technical-governance',
    label: 'Technical Governance',
    description: 'The bridge',
  },
  {
    id: 'governance',
    label: 'Governance',
    description: 'The policy',
  },
];

function readTopicFile(fullPath: string, slug: string): Topic | null {
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  if (!data.region) return null;

  return {
    slug: data.slug || slug,
    title: data.title || slug,
    region: data.region as Region,
    tagline: data.tagline || '',
    status: (data.status as TopicStatus) || 'exploring',
    order: typeof data.order === 'number' ? data.order : 999,
    lastReviewed: data.last_reviewed
      ? String(data.last_reviewed)
      : undefined,
    lastSubstantiveUpdate: data.last_substantive_update
      ? String(data.last_substantive_update)
      : undefined,
    related: Array.isArray(data.related) ? data.related : [],
    content,
  };
}

export function getAllTopics(): Topic[] {
  if (!fs.existsSync(atlasDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(atlasDirectory);
  const topics: Topic[] = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith('.md')) continue;
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(atlasDirectory, fileName);
    const topic = readTopicFile(fullPath, slug);
    if (topic) topics.push(topic);
  }

  return topics.sort((a, b) => {
    if (a.order !== b.order) return a.order - b.order;
    return a.title.localeCompare(b.title);
  });
}

export function getTopicsByRegion(region: Region): Topic[] {
  return getAllTopics().filter((t) => t.region === region);
}

export function getTopicBySlug(slug: string): Topic | null {
  try {
    const fullPath = path.join(atlasDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;
    return readTopicFile(fullPath, slug);
  } catch {
    return null;
  }
}
