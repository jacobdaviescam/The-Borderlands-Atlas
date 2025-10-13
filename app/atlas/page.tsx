'use client';

import PageLayout from '@/app/components/PageLayout';
import { motion } from 'framer-motion';

export default function AtlasPage() {
  return (
    <PageLayout 
      title="Mind Maps" 
      subtitle="Cartographic explorations of interconnected ideas"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16 text-text-secondary"
        >
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
            Mind maps are being charted. Soon this will be filled with interactive visualizations.
          </p>
          <p className="mt-4 text-base">
            (Add markdown mindmap files to <code className="bg-parchment-dark px-2 py-1 rounded">content/atlas/</code>)
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
}

