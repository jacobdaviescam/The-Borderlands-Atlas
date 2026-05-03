import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageLayout from '@/app/components/PageLayout';
import TopicContent from '@/app/components/TopicContent';
import { getAllTopics, getTopicBySlug, REGIONS } from '@/lib/atlas';
import { getPostsByTopic } from '@/lib/blog';

interface AtlasTopicPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const topics = getAllTopics();
  return topics.map((t) => ({ slug: t.slug }));
}

const STATUS_LABEL = {
  exploring: 'Exploring',
  developing: 'Developing',
  settled: 'Settled',
} as const;

const STATUS_PILL_CLASS = {
  exploring: 'text-text-secondary border border-text-secondary/40',
  developing: 'text-brass border border-brass/40',
  settled: 'text-forest border border-forest/40',
} as const;

function formatDate(date?: string): string | null {
  if (!date) return null;
  const parsed = Date.parse(date);
  if (Number.isNaN(parsed)) return date;
  return new Date(parsed).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Strip the trailing "Related writing" and "Related regions" sections from the
// raw markdown — those are rendered programmatically below from blog posts and
// frontmatter so the page can stay live without manual editing.
function stripAutoSections(content: string): string {
  return content.replace(/##\s+Related writing[\s\S]*?(?=##|$)/i, '')
    .replace(/##\s+Related regions[\s\S]*?(?=##|$)/i, '')
    .trimEnd();
}

export default async function AtlasTopicPage({ params }: AtlasTopicPageProps) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  const allTopics = getAllTopics();
  const region = REGIONS.find((r) => r.id === topic.region);
  const relatedPosts = getPostsByTopic(topic.slug);
  const relatedTopics = topic.related
    .map((relSlug) => allTopics.find((t) => t.slug === relSlug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const lastReviewed = formatDate(topic.lastReviewed);
  const lastUpdate = formatDate(topic.lastSubstantiveUpdate);

  return (
    <PageLayout
      title={topic.title}
      subtitle={topic.tagline}
      backHref={region ? `/atlas/region/${region.id}` : '/atlas'}
      backLabel={region ? region.label : 'The Atlas'}
    >
      <article className="max-w-3xl mx-auto">
        {/* Meta strip */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs uppercase tracking-widest text-text-secondary mb-12">
          {region && (
            <span className="text-burgundy font-medium">{region.label}</span>
          )}
          <span className="text-gold/60">·</span>
          <span className={`px-2 py-0.5 ${STATUS_PILL_CLASS[topic.status]}`}>
            {STATUS_LABEL[topic.status]}
          </span>
          {lastReviewed && (
            <>
              <span className="text-gold/60">·</span>
              <span>Last reviewed {lastReviewed}</span>
            </>
          )}
          {lastUpdate && lastUpdate !== lastReviewed && (
            <>
              <span className="text-gold/60">·</span>
              <span>Last update {lastUpdate}</span>
            </>
          )}
        </div>

        {/* Stub banner — only on placeholder pages */}
        {topic.stub && (
          <div className="mb-10 px-5 py-4 border border-dashed border-text-secondary/40 bg-parchment-dark/30">
            <p className="text-base text-deep-brown leading-relaxed">
              <span className="font-semibold text-burgundy">This page is a stub.</span>{' '}
              I&rsquo;ve marked the territory but haven&rsquo;t written my views here yet.
              The headings below are placeholders — the actual beliefs, uncertainties,
              and evidence are still in my notes. If you want my current take on this
              topic before it lands here, get in touch.
            </p>
          </div>
        )}

        {/* Body */}
        <TopicContent content={stripAutoSections(topic.content)} />

        {/* Related writing — auto-populated from /blog */}
        <section className="mt-12">
          <h2 className="text-base font-semibold text-burgundy mt-12 mb-5 pb-2 border-b border-gold/40 uppercase tracking-wider">
            Related writing
          </h2>
          {relatedPosts.length > 0 ? (
            <ul className="space-y-3">
              {relatedPosts.map((post) => (
                <li key={post.slug} className="text-lg">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-brass border-b border-brass/30 hover:text-burgundy hover:border-burgundy transition-colors"
                  >
                    {post.title}
                  </Link>
                  {post.excerpt && (
                    <span className="text-deep-brown/80 ml-2">— {post.excerpt}</span>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-text-secondary italic">
              No essays tagged with this topic yet.
            </p>
          )}
        </section>

        {/* Related regions — from frontmatter */}
        {relatedTopics.length > 0 && (
          <section className="mt-12">
            <h2 className="text-base font-semibold text-burgundy mt-12 mb-5 pb-2 border-b border-gold/40 uppercase tracking-wider">
              Related regions
            </h2>
            <div className="flex flex-wrap gap-3">
              {relatedTopics.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/atlas/${rel.slug}`}
                  className="text-sm px-3 py-1 border border-gold/40 text-burgundy hover:border-burgundy hover:bg-cream/40 transition-colors"
                >
                  {rel.title}
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </PageLayout>
  );
}
