'use client';

import PageLayout from '@/app/components/PageLayout';
import { motion } from 'framer-motion';

export default function CodePage() {
  return (
    <PageLayout 
      title="Code & Projects" 
      subtitle="Technical explorations and experiments"
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
            <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <p className="text-xl">
            Projects are being catalogued. This will soon showcase code and technical work.
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
}

