import PageLayout from '@/app/components/PageLayout';
import RegionCard from '@/app/components/RegionCard';
import { getAllTopics, REGIONS } from '@/lib/atlas';

export default function AtlasPage() {
  const topics = getAllTopics();

  return (
    <PageLayout
      title="The Atlas"
      subtitle="A living map of beliefs, uncertainties, and what would update them"
    >
      <div className="max-w-3xl mx-auto mb-12 text-center text-deep-brown/90 leading-relaxed space-y-4">
        <p className="text-lg">
          Four regions: technical safety, technical governance, governance, and
          the wider strategy of building the field. Each opens onto living-page
          topics where I record current beliefs, open uncertainties, and the
          evidence that would shift my views.
        </p>
        <p className="text-sm text-text-secondary italic">
          Some pages are <span className="not-italic font-medium">Stubs</span> —
          territory I&rsquo;ve marked but haven&rsquo;t yet written my views on.
          They&rsquo;re shown in dashed borders and italic titles, sorted after
          filled pages. Pages I have actual views on are marked{' '}
          <span className="not-italic font-medium text-brass">Developing</span>.
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
