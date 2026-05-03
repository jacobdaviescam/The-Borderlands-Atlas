import PageLayout from '@/app/components/PageLayout';
import TopicCard from '@/app/components/TopicCard';
import { getAllTopics, REGIONS } from '@/lib/atlas';

export default function AtlasPage() {
  const topics = getAllTopics();

  return (
    <PageLayout
      title="The Atlas"
      subtitle="A living map of beliefs, uncertainties, and what would update them"
    >
      <div className="max-w-4xl mx-auto mb-12 text-center text-deep-brown/90 leading-relaxed">
        <p className="text-lg">
          Each tile is a single living page — a topic in technical AI safety,
          AI governance, the technical-governance bridge between them, or the
          wider strategy of building the field and engaging the public. Pages
          carry current beliefs, open uncertainties, and concrete evidence
          types that would shift my views.
        </p>
      </div>

      {topics.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {REGIONS.map((region) => {
            const regionTopics = topics.filter((t) => t.region === region.id);
            return (
              <section key={region.id} className="space-y-4">
                <header className="text-center pb-3 border-b border-gold/30">
                  <h2 className="text-xl font-semibold text-burgundy uppercase tracking-widest">
                    {region.label}
                  </h2>
                  <p className="text-sm text-text-secondary italic mt-1">
                    {region.description}
                  </p>
                </header>
                <div className="space-y-4">
                  {regionTopics.length > 0 ? (
                    regionTopics.map((topic, idx) => (
                      <TopicCard key={topic.slug} topic={topic} index={idx} />
                    ))
                  ) : (
                    <p className="text-sm text-text-secondary italic text-center py-4">
                      No topics yet.
                    </p>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 text-text-secondary max-w-2xl mx-auto">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="mx-auto mb-6 text-brass"
          >
            <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <p className="text-xl">
            The Atlas is being charted.
          </p>
          <p className="mt-4 text-base">
            Add topic markdown files to{' '}
            <code className="bg-parchment-dark px-2 py-1 rounded">content/atlas/</code>
            .
          </p>
        </div>
      )}
    </PageLayout>
  );
}
