'use client';

import { motion } from 'framer-motion';

export default function OrnateCornerOrnaments() {
  return (
    <>
      {/* Top Left Corner - Elegant Art Deco */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="fixed top-0 left-0 w-40 h-40 pointer-events-none z-0"
      >
        <svg viewBox="0 0 160 160" className="w-full h-full">
          {/* Corner fan shape */}
          <path d="M 0,0 L 0,60 L 8,52 L 0,44 L 16,36 L 0,28 L 24,20 L 0,12 L 32,4 L 0,0 Z" 
                fill="#C9A961" opacity="0.4"/>
          <path d="M 0,0 L 60,0 L 52,8 L 44,0 L 36,16 L 28,0 L 20,24 L 12,0 L 4,32 L 0,0 Z" 
                fill="#B8860B" opacity="0.4"/>
          
          {/* Geometric lines */}
          <line x1="0" y1="40" x2="40" y2="0" stroke="#C9A961" strokeWidth="2" opacity="0.5"/>
          <line x1="0" y1="24" x2="24" y2="0" stroke="#B8860B" strokeWidth="1.5" opacity="0.6"/>
          <line x1="0" y1="56" x2="56" y2="0" stroke="#C9A961" strokeWidth="1.5" opacity="0.4"/>
          
          {/* Decorative squares */}
          <rect x="28" y="4" width="4" height="4" fill="#B8860B" opacity="0.6"/>
          <rect x="4" y="28" width="4" height="4" fill="#C9A961" opacity="0.6"/>
          <rect x="20" y="12" width="2" height="2" fill="#C9A961" opacity="0.7"/>
          <rect x="12" y="20" width="2" height="2" fill="#B8860B" opacity="0.7"/>
          
          {/* Book spine accent */}
          <rect x="8" y="8" width="12" height="80" fill="#6B2C2C" opacity="0.15"/>
          <line x1="14" y1="8" x2="14" y2="88" stroke="#C9A961" strokeWidth="1" opacity="0.4"/>
          <line x1="12" y1="20" x2="16" y2="20" stroke="#C9A961" strokeWidth="0.5" opacity="0.3"/>
          <line x1="12" y1="40" x2="16" y2="40" stroke="#C9A961" strokeWidth="0.5" opacity="0.3"/>
          <line x1="12" y1="60" x2="16" y2="60" stroke="#C9A961" strokeWidth="0.5" opacity="0.3"/>
        </svg>
      </motion.div>

      {/* Top Right Corner - Wine Glass & Art Deco */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="fixed top-0 right-0 w-40 h-40 pointer-events-none z-0"
      >
        <svg viewBox="0 0 160 160" className="w-full h-full">
          {/* Corner fan shape (mirrored) */}
          <path d="M 160,0 L 160,60 L 152,52 L 160,44 L 144,36 L 160,28 L 136,20 L 160,12 L 128,4 L 160,0 Z" 
                fill="#C9A961" opacity="0.4"/>
          <path d="M 160,0 L 100,0 L 108,8 L 116,0 L 124,16 L 132,0 L 140,24 L 148,0 L 156,32 L 160,0 Z" 
                fill="#B8860B" opacity="0.4"/>
          
          {/* Geometric lines */}
          <line x1="160" y1="40" x2="120" y2="0" stroke="#C9A961" strokeWidth="2" opacity="0.5"/>
          <line x1="160" y1="24" x2="136" y2="0" stroke="#B8860B" strokeWidth="1.5" opacity="0.6"/>
          <line x1="160" y1="56" x2="104" y2="0" stroke="#C9A961" strokeWidth="1.5" opacity="0.4"/>
          
          {/* Decorative squares */}
          <rect x="128" y="4" width="4" height="4" fill="#B8860B" opacity="0.6"/>
          <rect x="152" y="28" width="4" height="4" fill="#C9A961" opacity="0.6"/>
          <rect x="136" y="12" width="2" height="2" fill="#C9A961" opacity="0.7"/>
          <rect x="144" y="20" width="2" height="2" fill="#B8860B" opacity="0.7"/>
          
        </svg>
      </motion.div>

      {/* Bottom Left Corner - Mirror of top left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="fixed bottom-0 left-0 w-40 h-40 pointer-events-none z-0"
      >
        <svg viewBox="0 0 160 160" className="w-full h-full">
          {/* Corner fan shape (mirrored vertically) */}
          <path d="M 0,160 L 0,100 L 8,108 L 0,116 L 16,124 L 0,132 L 24,140 L 0,148 L 32,156 L 0,160 Z" 
                fill="#C9A961" opacity="0.4"/>
          <path d="M 0,160 L 60,160 L 52,152 L 44,160 L 36,144 L 28,160 L 20,136 L 12,160 L 4,128 L 0,160 Z" 
                fill="#B8860B" opacity="0.4"/>
          
          {/* Geometric lines */}
          <line x1="0" y1="120" x2="40" y2="160" stroke="#C9A961" strokeWidth="2" opacity="0.5"/>
          <line x1="0" y1="136" x2="24" y2="160" stroke="#B8860B" strokeWidth="1.5" opacity="0.6"/>
          <line x1="0" y1="104" x2="56" y2="160" stroke="#C9A961" strokeWidth="1.5" opacity="0.4"/>
          
          {/* Decorative squares */}
          <rect x="28" y="152" width="4" height="4" fill="#B8860B" opacity="0.6"/>
          <rect x="4" y="128" width="4" height="4" fill="#C9A961" opacity="0.6"/>
          <rect x="20" y="144" width="2" height="2" fill="#C9A961" opacity="0.7"/>
          <rect x="12" y="136" width="2" height="2" fill="#B8860B" opacity="0.7"/>
        </svg>
      </motion.div>

      {/* Bottom Right Corner - Mirror of top right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="fixed bottom-0 right-0 w-40 h-40 pointer-events-none z-0"
      >
        <svg viewBox="0 0 160 160" className="w-full h-full">
          {/* Corner fan shape (mirrored both ways) */}
          <path d="M 160,160 L 160,100 L 152,108 L 160,116 L 144,124 L 160,132 L 136,140 L 160,148 L 128,156 L 160,160 Z" 
                fill="#C9A961" opacity="0.4"/>
          <path d="M 160,160 L 100,160 L 108,152 L 116,160 L 124,144 L 132,160 L 140,136 L 148,160 L 156,128 L 160,160 Z" 
                fill="#B8860B" opacity="0.4"/>
          
          {/* Geometric lines */}
          <line x1="160" y1="120" x2="120" y2="160" stroke="#C9A961" strokeWidth="2" opacity="0.5"/>
          <line x1="160" y1="136" x2="136" y2="160" stroke="#B8860B" strokeWidth="1.5" opacity="0.6"/>
          <line x1="160" y1="104" x2="104" y2="160" stroke="#C9A961" strokeWidth="1.5" opacity="0.4"/>
          
          {/* Decorative squares */}
          <rect x="128" y="152" width="4" height="4" fill="#B8860B" opacity="0.6"/>
          <rect x="152" y="128" width="4" height="4" fill="#C9A961" opacity="0.6"/>
          <rect x="136" y="144" width="2" height="2" fill="#C9A961" opacity="0.7"/>
          <rect x="144" y="136" width="2" height="2" fill="#B8860B" opacity="0.7"/>
        </svg>
      </motion.div>
    </>
  );
}
