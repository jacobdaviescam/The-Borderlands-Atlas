'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Region, Topic } from '@/lib/atlas';

interface RegionCardProps {
  region: { id: Region; label: string; description: string };
  topics: Topic[];
  index: number;
}

export default function RegionCard({ region, topics, index }: RegionCardProps) {
  // Show filled topics first in the preview, then stubs — preserves order within each group.
  const filled = topics.filter((t) => !t.stub);
  const stubs = topics.filter((t) => t.stub);
  const previewTopics = [...filled, ...stubs].slice(0, 4);
  const remaining = Math.max(0, topics.length - previewTopics.length);
  const filledCount = filled.length;

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="h-full"
    >
      <Link
        href={`/atlas/region/${region.id}`}
        className="group flex flex-col h-full p-8 border-2 border-gold/30 hover:border-gold transition-colors duration-300 bg-cream/30 hover:bg-cream/60"
      >
        <header className="space-y-2 mb-6 pb-4 border-b border-gold/30">
          <h2 className="text-3xl font-semibold text-burgundy group-hover:text-brass transition-colors leading-tight">
            {region.label}
          </h2>
          <p className="text-base text-text-secondary italic">
            {region.description}
          </p>
        </header>

        <div className="flex-1 space-y-3 mb-6">
          <p className="text-xs uppercase tracking-widest text-brass">
            {filledCount} of {topics.length} written ·{' '}
            {topics.length === 1 ? 'topic' : 'topics'}
          </p>
          {previewTopics.length > 0 ? (
            <ul className="text-base space-y-1">
              {previewTopics.map((t) => {
                const isStub = t.stub;
                return (
                  <li
                    key={t.slug}
                    className={`leading-snug ${
                      isStub
                        ? 'text-deep-brown/55 italic'
                        : 'text-deep-brown'
                    }`}
                  >
                    · {t.title}
                  </li>
                );
              })}
              {remaining > 0 && (
                <li className="text-text-secondary italic">+ {remaining} more</li>
              )}
            </ul>
          ) : (
            <p className="text-text-secondary italic text-sm">No topics yet.</p>
          )}
        </div>

        <div className="flex items-center gap-2 text-burgundy group-hover:text-brass transition-colors mt-auto">
          <span className="text-sm font-medium uppercase tracking-wider">
            Explore region
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="transform group-hover:translate-x-1 transition-transform"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </motion.article>
  );
}
