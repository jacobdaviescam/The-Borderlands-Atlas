import { getPostBySlug, getAllPosts } from '@/lib/blog';
import PageLayout from '@/app/components/PageLayout';
import MarkdownContent from '@/app/components/MarkdownContent';
import BotanicalDivider from '@/app/components/BotanicalDivider';
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
      <article className="max-w-3xl mx-auto relative">
        {/* Decorative manuscript borders around content */}
        <div className="hidden md:block absolute -left-12 top-0 bottom-0 w-8 opacity-60">
          <svg viewBox="0 0 32 100" fill="none" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M 24 0 Q 16 50 24 100"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gold"
            />
            <path d="M 16 25 Q 12 22 16 18" fill="currentColor" className="text-forest" opacity="0.8" />
            <path d="M 16 75 Q 12 72 16 68" fill="currentColor" className="text-forest" opacity="0.8" />
          </svg>
        </div>

        <div className="hidden md:block absolute -right-12 top-0 bottom-0 w-8 opacity-60">
          <svg viewBox="0 0 32 100" fill="none" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M 8 0 Q 16 50 8 100"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gold"
            />
            <path d="M 16 25 Q 20 22 16 18" fill="currentColor" className="text-forest" opacity="0.8" />
            <path d="M 16 75 Q 20 72 16 68" fill="currentColor" className="text-forest" opacity="0.8" />
          </svg>
        </div>
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

        {/* Pairs Well With section */}
        {post.pairsWith && (post.pairsWith.book || post.pairsWith.drink) && (
          <>
            <BotanicalDivider />
            <div className="mt-12 p-6 bg-cream/70 border-l-4 border-forest/60 rounded-r shadow-sm">
              <h3 className="text-xl font-semibold text-burgundy mb-4 flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Pairs Well With
              </h3>
              <div className="space-y-3 text-deep-brown">
                {post.pairsWith.book && (
                  <div className="flex items-start gap-3">
                    <span className="text-brass font-medium min-w-[80px]">Reading:</span>
                    <span className="italic">{post.pairsWith.book}</span>
                  </div>
                )}
                {post.pairsWith.drink && (
                  <div className="flex items-start gap-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-burgundy mt-1 min-w-[18px]">
                      <path d="M8 2h8M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 1-.672-2.219l-.656-.984A4 4 0 0 0 15 4.788V2" />
                    </svg>
                    <span className="italic">{post.pairsWith.drink}</span>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </article>
    </PageLayout>
  );
}

