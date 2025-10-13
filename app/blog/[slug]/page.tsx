import { getPostBySlug, getAllPosts } from '@/lib/blog';
import PageLayout from '@/app/components/PageLayout';
import MarkdownContent from '@/app/components/MarkdownContent';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <PageLayout title={post.title}>
      <article className="max-w-3xl mx-auto">
        {/* Post metadata */}
        <div className="mb-12 pb-8 border-b border-gold/30 space-y-4">
          <time className="text-sm text-brass uppercase tracking-wider block">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-parchment-dark text-text-secondary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Post content */}
        <MarkdownContent content={post.content} />
      </article>
    </PageLayout>
  );
}

