'use client';

import { motion } from 'framer-motion';

export default function BotanicalDivider() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center gap-3 py-6"
    >
      {/* Left vine - more prominent */}
      <svg width="100" height="28" viewBox="0 0 100 28" fill="none" className="opacity-85">
        <path 
          d="M 0 14 Q 25 8 40 14 Q 55 20 70 14 Q 85 8 100 14" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          className="text-gold"
          fill="none"
        />
        <path d="M 25 8 Q 22 5 25 2" fill="currentColor" className="text-forest" opacity="0.85" />
        <path d="M 55 20 Q 58 17 61 20" fill="currentColor" className="text-forest" opacity="0.85" />
        <path d="M 85 8 Q 82 5 85 2" fill="currentColor" className="text-forest" opacity="0.85" />
        <path d="M 40 14 Q 38 12 40 10" fill="currentColor" className="text-forest" opacity="0.8" />
      </svg>
      
      {/* Center ornament - larger */}
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="3" fill="currentColor" className="text-brass" />
        <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="1" className="text-gold opacity-70" />
        <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="0.5" className="text-burgundy opacity-50" />
      </svg>
      
      {/* Right vine - more prominent */}
      <svg width="100" height="28" viewBox="0 0 100 28" fill="none" className="opacity-85">
        <path 
          d="M 0 14 Q 15 20 30 14 Q 45 8 60 14 Q 75 20 100 14" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          className="text-gold"
          fill="none"
        />
        <path d="M 15 20 Q 18 23 15 26" fill="currentColor" className="text-forest" opacity="0.85" />
        <path d="M 45 8 Q 42 5 39 8" fill="currentColor" className="text-forest" opacity="0.85" />
        <path d="M 75 20 Q 78 23 75 26" fill="currentColor" className="text-forest" opacity="0.85" />
        <path d="M 60 14 Q 58 12 60 10" fill="currentColor" className="text-forest" opacity="0.8" />
      </svg>
    </motion.div>
  );
}

