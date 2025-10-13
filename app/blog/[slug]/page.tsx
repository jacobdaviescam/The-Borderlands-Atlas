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
      <article className="max-w-3xl mx-auto relative">
        {/* Manuscript-style borders */}
        <div className="hidden md:block absolute -left-12 top-0 bottom-0 w-8 opacity-60">
          <svg viewBox="0 0 32 100" fill="none" className="w-full h-full" preserveAspectRatio="none">
            {/* Double vertical lines like manuscript margins */}
            <line x1="20" y1="0" x2="20" y2="100" stroke="currentColor" className="text-gold" strokeWidth="1.5" />
            <line x1="24" y1="0" x2="24" y2="100" stroke="currentColor" className="text-brass" strokeWidth="0.8" opacity="0.7" />
            
            {/* Small decorative dots */}
            <circle cx="22" cy="10" r="1.5" fill="currentColor" className="text-brass" />
            <circle cx="22" cy="30" r="1.5" fill="currentColor" className="text-brass" />
            <circle cx="22" cy="50" r="1.5" fill="currentColor" className="text-brass" />
            <circle cx="22" cy="70" r="1.5" fill="currentColor" className="text-brass" />
            <circle cx="22" cy="90" r="1.5" fill="currentColor" className="text-brass" />
          </svg>
        </div>

        <div className="hidden md:block absolute -right-12 top-0 bottom-0 w-8 opacity-60">
          <svg viewBox="0 0 32 100" fill="none" className="w-full h-full" preserveAspectRatio="none">
            {/* Double vertical lines like manuscript margins */}
            <line x1="8" y1="0" x2="8" y2="100" stroke="currentColor" className="text-brass" strokeWidth="0.8" opacity="0.7" />
            <line x1="12" y1="0" x2="12" y2="100" stroke="currentColor" className="text-gold" strokeWidth="1.5" />
            
            {/* Small decorative dots */}
            <circle cx="10" cy="10" r="1.5" fill="currentColor" className="text-brass" />
            <circle cx="10" cy="30" r="1.5" fill="currentColor" className="text-brass" />
            <circle cx="10" cy="50" r="1.5" fill="currentColor" className="text-brass" />
            <circle cx="10" cy="70" r="1.5" fill="currentColor" className="text-brass" />
            <circle cx="10" cy="90" r="1.5" fill="currentColor" className="text-brass" />
          </svg>
        </div>
        
        {/* Post metadata with manuscript styling */}
        <div className="mb-12 pb-8 border-b-2 border-double border-gold/40 space-y-4">
          <time className="text-sm text-brass uppercase tracking-widest block font-medium">
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
                  className="text-xs px-3 py-1 border border-gold/30 text-text-secondary rounded-sm uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Manuscript initial letter decoration */}
        <div className="relative pl-16 mb-8">
          <div className="absolute left-0 top-0 w-12 h-12 flex items-center justify-center bg-burgundy/10 border-2 border-gold/40">
            <span className="text-4xl font-bold text-burgundy">
              {post.content.trim().charAt(0).toUpperCase()}
            </span>
          </div>
          
          {/* Post content */}
          <div className="pt-2">
            <MarkdownContent content={post.content.trim().substring(1)} />
          </div>
        </div>

        {/* Pairs Well With section */}
        {post.pairsWith && (post.pairsWith.book || post.pairsWith.drink) && (
          <>
            {/* Manuscript-style divider */}
            <div className="flex items-center justify-center gap-4 my-12">
              <div className="w-16 h-px bg-gold opacity-40"></div>
              <div className="w-2 h-2 rotate-45 border border-gold opacity-50"></div>
              <div className="w-16 h-px bg-gold opacity-40"></div>
            </div>
            
            <div className="mt-12 p-8 border-2 border-double border-gold/30 bg-parchment-dark/30">
              <h3 className="text-xl font-semibold text-burgundy mb-4 uppercase tracking-wider text-center border-b border-gold/30 pb-3">
                Pairs Well With
              </h3>
              <div className="space-y-4 text-deep-brown">
                {post.pairsWith.book && (
                  <div className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1 text-burgundy flex-shrink-0">
                      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <div>
                      <span className="text-brass font-medium text-sm uppercase tracking-wider block mb-1">Reading</span>
                      <span className="italic">{post.pairsWith.book}</span>
                    </div>
                  </div>
                )}
                {post.pairsWith.drink && (
                  <div className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1 text-burgundy flex-shrink-0">
                      <path d="M8 2h8M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 1-.672-2.219l-.656-.984A4 4 0 0 0 15 4.788V2" />
                    </svg>
                    <div>
                      <span className="text-brass font-medium text-sm uppercase tracking-wider block mb-1">Drinking</span>
                      <span className="italic">{post.pairsWith.drink}</span>
                    </div>
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

