import { getMindMapBySlug, getAllMindMaps } from '@/lib/atlas';
import PageLayout from '@/app/components/PageLayout';
import MarkmapViewer from '@/app/components/Markmap';
import { notFound } from 'next/navigation';

interface AtlasPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const maps = getAllMindMaps();
  return maps.map((map) => ({
    slug: map.slug,
  }));
}

export default async function AtlasDetailPage({ params }: AtlasPageProps) {
  const { slug } = await params;
  const map = getMindMapBySlug(slug);

  if (!map) {
    notFound();
  }

  return (
    <PageLayout title={map.title} subtitle={map.description}>
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Description if available */}
        {map.description && (
          <p className="text-lg text-center text-text-secondary italic max-w-2xl mx-auto">
            {map.description}
          </p>
        )}

        {/* Interactive Markmap */}
        <MarkmapViewer content={map.content} />

        {/* Instructions */}
        <div className="text-center text-sm text-text-secondary pt-8 border-t border-gold/20">
          <p>Click nodes to expand/collapse • Drag to pan • Scroll to zoom</p>
        </div>
      </div>
    </PageLayout>
  );
}

