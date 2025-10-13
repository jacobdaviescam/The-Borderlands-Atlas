import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const atlasDirectory = path.join(process.cwd(), 'content/atlas');

export interface MindMap {
  slug: string;
  title: string;
  description?: string;
  content: string;
}

export function getAllMindMaps(): MindMap[] {
  // Check if directory exists
  if (!fs.existsSync(atlasDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(atlasDirectory);
  const allMaps = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(atlasDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      // Extract title from first H1 or use frontmatter
      const titleMatch = content.match(/^#\s+(.+)$/m);
      const title = data.title || (titleMatch ? titleMatch[1] : slug);

      return {
        slug,
        title,
        description: data.description || '',
        content,
      };
    });

  return allMaps.sort((a, b) => a.title.localeCompare(b.title));
}

export function getMindMapBySlug(slug: string): MindMap | null {
  try {
    const fullPath = path.join(atlasDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = data.title || (titleMatch ? titleMatch[1] : slug);

    return {
      slug,
      title,
      description: data.description || '',
      content,
    };
  } catch {
    return null;
  }
}

