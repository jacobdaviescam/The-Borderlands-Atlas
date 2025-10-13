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
        {/* Ornate manuscript borders around content */}
        <div className="hidden md:block absolute -left-16 top-0 bottom-0 w-14 opacity-75">
          <svg viewBox="0 0 56 100" fill="none" className="w-full h-full" preserveAspectRatio="none">
            {/* Main decorative border */}
            <path
              d="M 42 0 Q 32 25 42 50 Q 52 75 42 100"
              stroke="currentColor"
              strokeWidth="2.5"
              className="text-gold"
            />
            <path
              d="M 38 0 Q 28 25 38 50 Q 48 75 38 100"
              stroke="currentColor"
              strokeWidth="1"
              className="text-brass"
              opacity="0.6"
            />
            
            {/* Corner flourishes */}
            <g transform="translate(28, 2)">
              <path d="M 0 0 Q 8 2 10 8 Q 8 6 4 4 Q 2 2 0 0" fill="currentColor" className="text-burgundy" opacity="0.7" />
              <circle cx="6" cy="4" r="1" fill="currentColor" className="text-gold" opacity="0.8" />
            </g>
            
            <g transform="translate(28, 94)">
              <path d="M 0 0 Q 8 -2 10 -8 Q 8 -6 4 -4 Q 2 -2 0 0" fill="currentColor" className="text-burgundy" opacity="0.7" />
              <circle cx="6" cy="-4" r="1" fill="currentColor" className="text-gold" opacity="0.8" />
            </g>
            
            {/* Botanical elements */}
            <path d="M 32 20 Q 22 18 18 25 Q 22 28 28 26 Q 31 23 32 20" fill="currentColor" className="text-forest" opacity="0.7" />
            <path d="M 48 40 Q 54 38 56 44 Q 54 48 50 46 Q 49 43 48 40" fill="currentColor" className="text-burgundy" opacity="0.65" />
            <path d="M 30 60 Q 20 58 16 65 Q 20 68 26 66 Q 29 63 30 60" fill="currentColor" className="text-forest" opacity="0.68" />
            
            {/* Filigree details */}
            <line x1="36" y1="15" x2="44" y2="15" stroke="currentColor" className="text-brass" strokeWidth="0.8" opacity="0.6" />
            <line x1="36" y1="35" x2="44" y2="35" stroke="currentColor" className="text-brass" strokeWidth="0.8" opacity="0.6" />
            <line x1="36" y1="85" x2="44" y2="85" stroke="currentColor" className="text-brass" strokeWidth="0.8" opacity="0.6" />
          </svg>
        </div>

        <div className="hidden md:block absolute -right-16 top-0 bottom-0 w-14 opacity-75">
          <svg viewBox="0 0 56 100" fill="none" className="w-full h-full" preserveAspectRatio="none">
            {/* Main decorative border */}
            <path
              d="M 14 0 Q 24 25 14 50 Q 4 75 14 100"
              stroke="currentColor"
              strokeWidth="2.5"
              className="text-gold"
            />
            <path
              d="M 18 0 Q 28 25 18 50 Q 8 75 18 100"
              stroke="currentColor"
              strokeWidth="1"
              className="text-brass"
              opacity="0.6"
            />
            
            {/* Corner flourishes */}
            <g transform="translate(18, 2)">
              <path d="M 0 0 Q -8 2 -10 8 Q -8 6 -4 4 Q -2 2 0 0" fill="currentColor" className="text-burgundy" opacity="0.7" />
              <circle cx="-6" cy="4" r="1" fill="currentColor" className="text-gold" opacity="0.8" />
            </g>
            
            <g transform="translate(18, 94)">
              <path d="M 0 0 Q -8 -2 -10 -8 Q -8 -6 -4 -4 Q -2 -2 0 0" fill="currentColor" className="text-burgundy" opacity="0.7" />
              <circle cx="-6" cy="-4" r="1" fill="currentColor" className="text-gold" opacity="0.8" />
            </g>
            
            {/* Botanical elements */}
            <path d="M 24 20 Q 34 18 38 25 Q 34 28 28 26 Q 25 23 24 20" fill="currentColor" className="text-forest" opacity="0.7" />
            <path d="M 8 40 Q 2 38 0 44 Q 2 48 6 46 Q 7 43 8 40" fill="currentColor" className="text-burgundy" opacity="0.65" />
            <path d="M 26 60 Q 36 58 40 65 Q 36 68 30 66 Q 27 63 26 60" fill="currentColor" className="text-forest" opacity="0.68" />
            
            {/* Filigree details */}
            <line x1="12" y1="15" x2="20" y2="15" stroke="currentColor" className="text-brass" strokeWidth="0.8" opacity="0.6" />
            <line x1="12" y1="35" x2="20" y2="35" stroke="currentColor" className="text-brass" strokeWidth="0.8" opacity="0.6" />
            <line x1="12" y1="85" x2="20" y2="85" stroke="currentColor" className="text-brass" strokeWidth="0.8" opacity="0.6" />
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

