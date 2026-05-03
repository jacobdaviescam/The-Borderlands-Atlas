import { notFound } from 'next/navigation';
import PageLayout from '@/app/components/PageLayout';
import TopicCard from '@/app/components/TopicCard';
import { getTopicsByRegion, REGIONS } from '@/lib/atlas';

interface RegionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return REGIONS.map((r) => ({ slug: r.id }));
}

export default async function RegionPage({ params }: RegionPageProps) {
  const { slug } = await params;
  const region = REGIONS.find((r) => r.id === slug);
  if (!region) {
    notFound();
  }

  // Filled topics first, stubs after — preserves intra-group order.
  // Reviewers should hit real content before placeholders.
  const topics = getTopicsByRegion(region.id);
  const filled = topics.filter((t) => !t.stub);
  const stubs = topics.filter((t) => t.stub);

  return (
    <PageLayout
      title={region.label}
      subtitle={region.description}
      backHref="/atlas"
      backLabel="The Atlas"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {filled.length > 0 && (
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filled.map((topic, idx) => (
                <TopicCard key={topic.slug} topic={topic} index={idx} />
              ))}
            </div>
          </section>
        )}

        {stubs.length > 0 && (
          <section>
            {filled.length > 0 && (
              <header className="mb-6 pb-3 border-b border-gold/30 text-center">
                <h2 className="text-sm uppercase tracking-widest text-text-secondary">
                  Stubs
                </h2>
                <p className="text-sm text-text-secondary/80 italic mt-1">
                  Territory marked, views not yet written
                </p>
              </header>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stubs.map((topic, idx) => (
                <TopicCard key={topic.slug} topic={topic} index={idx} />
              ))}
            </div>
          </section>
        )}

        {topics.length === 0 && (
          <p className="text-center text-text-secondary italic py-16">
            No topics in this region yet.
          </p>
        )}
      </div>
    </PageLayout>
  );
}
