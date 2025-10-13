'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MindMap } from '@/lib/atlas';

interface MindMapCardProps {
  map: MindMap;
  index: number;
}

export default function MindMapCard({ map, index }: MindMapCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group border-2 border-gold/20 hover:border-gold/50 transition-all duration-300 p-6 rounded-lg bg-cream/30"
    >
      <Link href={`/atlas/${map.slug}`}>
        <div className="space-y-3">
          {/* Map Icon */}
          <div className="w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center mb-4">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="text-burgundy"
            >
              <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-burgundy group-hover:text-brass transition-colors">
            {map.title}
          </h2>

          {/* Description */}
          {map.description && (
            <p className="text-lg text-deep-brown leading-relaxed">
              {map.description}
            </p>
          )}

          {/* View indicator */}
          <div className="flex items-center gap-2 text-burgundy group-hover:text-brass transition-colors pt-2">
            <span className="text-sm font-medium">Explore map</span>
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
        </div>
      </Link>
    </motion.article>
  );
}

