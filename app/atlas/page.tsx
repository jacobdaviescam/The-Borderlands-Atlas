import PageLayout from '@/app/components/PageLayout';
import RegionCard from '@/app/components/RegionCard';
import { getAllTopics, REGIONS } from '@/lib/atlas';

export default function AtlasPage() {
  const topics = getAllTopics();

  return (
    <PageLayout
      title="The Atlas"
      subtitle="A living map of my beliefs, uncertainties, and what would update them"
    >
      <div className="max-w-3xl mx-auto mb-12 text-center text-deep-brown/90 leading-relaxed space-y-4">
        <p className="text-lg">
          Here there are four regions of my thoughts: technical safety, technical governance, governance, and
          the wider strategy of building the field. Each opens onto living-page
          topics where I record current beliefs, open uncertainties, and the
          evidence that would shift my views.
        </p>
        <p className="text-sm text-text-secondary italic">
          Pages with <span className="not-italic font-medium">dashed borders</span>{' '}
          are stubs — territory marked, views not yet written. The status pill
          on each tile (
          <span className="not-italic">Exploring</span> ·{' '}
          <span className="not-italic text-brass">Developing</span> ·{' '}
          <span className="not-italic text-forest">Settled</span>
          ) reflects where each topic is in my thinking, independent of whether
          the page itself is filled in.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {REGIONS.map((region, idx) => {
          const regionTopics = topics.filter((t) => t.region === region.id);
          return (
            <RegionCard
              key={region.id}
              region={region}
              topics={regionTopics}
              index={idx}
            />
          );
        })}
      </div>
    </PageLayout>
  );
}
