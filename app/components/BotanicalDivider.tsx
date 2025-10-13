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
      {/* Left vine */}
      <svg width="80" height="20" viewBox="0 0 80 20" fill="none" className="opacity-50">
        <path 
          d="M 0 10 Q 20 6 30 10 Q 40 14 50 10 Q 65 6 80 10" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          className="text-gold"
          fill="none"
        />
        <path d="M 20 6 Q 18 4 20 2" fill="currentColor" className="text-forest" opacity="0.7" />
        <path d="M 40 14 Q 42 12 44 14" fill="currentColor" className="text-forest" opacity="0.7" />
        <path d="M 65 6 Q 63 4 65 2" fill="currentColor" className="text-forest" opacity="0.7" />
      </svg>
      
      {/* Center ornament */}
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="2" fill="currentColor" className="text-brass" />
        <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="0.5" className="text-gold opacity-40" />
      </svg>
      
      {/* Right vine */}
      <svg width="80" height="20" viewBox="0 0 80 20" fill="none" className="opacity-50">
        <path 
          d="M 0 10 Q 15 14 30 10 Q 40 6 50 10 Q 60 14 80 10" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          className="text-gold"
          fill="none"
        />
        <path d="M 15 14 Q 17 16 15 18" fill="currentColor" className="text-forest" opacity="0.7" />
        <path d="M 40 6 Q 38 4 36 6" fill="currentColor" className="text-forest" opacity="0.7" />
        <path d="M 60 14 Q 62 16 60 18" fill="currentColor" className="text-forest" opacity="0.7" />
      </svg>
    </motion.div>
  );
}

