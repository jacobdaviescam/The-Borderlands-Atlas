'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Topic } from '@/lib/atlas';

interface TopicCardProps {
  topic: Topic;
  index: number;
}

const STATUS_LABEL: Record<Topic['status'], string> = {
  exploring: 'Exploring',
  developing: 'Developing',
  settled: 'Settled',
};

const STATUS_PILL_CLASS: Record<Topic['status'], string> = {
  exploring: 'text-text-secondary border border-text-secondary/40',
  developing: 'text-brass border border-brass/40',
  settled: 'text-forest border border-forest/40',
};

function isStale(date?: string): boolean {
  if (!date) return false;
  const parsed = Date.parse(date);
  if (Number.isNaN(parsed)) return false;
  const sixMonthsMs = 1000 * 60 * 60 * 24 * 183;
  return Date.now() - parsed > sixMonthsMs;
}

function formatDate(date?: string): string | null {
  if (!date) return null;
  const parsed = Date.parse(date);
  if (Number.isNaN(parsed)) return date;
  return new Date(parsed).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function TopicCard({ topic, index }: TopicCardProps) {
  const stale = isStale(topic.lastSubstantiveUpdate);
  const updateLabel = formatDate(topic.lastSubstantiveUpdate);
  const isStub = topic.stub;

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="group h-full"
    >
      <Link
        href={`/atlas/${topic.slug}`}
        className={`block h-full p-5 transition-colors duration-300 bg-cream/30 hover:bg-cream/60 ${
          isStub
            ? 'border border-dashed border-gold/30 hover:border-gold/70'
            : 'border border-gold/30 hover:border-gold'
        }`}
      >
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3
            className={`text-xl font-semibold leading-tight transition-colors ${
              isStub
                ? 'text-burgundy/70 group-hover:text-burgundy italic'
                : 'text-burgundy group-hover:text-brass'
            }`}
          >
            {topic.title}
          </h3>
          <span
            className={`shrink-0 text-[10px] uppercase tracking-widest px-2 py-0.5 ${STATUS_PILL_CLASS[topic.status]}`}
          >
            {STATUS_LABEL[topic.status]}
          </span>
        </div>
        {topic.tagline && (
          <p
            className={`text-sm leading-snug mb-3 ${
              isStub ? 'text-deep-brown/60' : 'text-deep-brown/90'
            }`}
          >
            {topic.tagline}
          </p>
        )}
        {isStub && (
          <p className="text-[11px] uppercase tracking-wider text-text-secondary/60 italic">
            Territory marked · views not yet written
          </p>
        )}
        {!isStub && updateLabel && (
          <p
            className={`text-[11px] uppercase tracking-wider ${
              stale ? 'text-text-secondary/50' : 'text-text-secondary'
            }`}
          >
            Last update · {updateLabel}
          </p>
        )}
      </Link>
    </motion.article>
  );
}
