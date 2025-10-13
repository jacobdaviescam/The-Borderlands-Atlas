'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ContentFrameProps {
  children: ReactNode;
  showFrame?: boolean;
}

export default function ContentFrame({ children, showFrame = true }: ContentFrameProps) {
  if (!showFrame) return <>{children}</>;

  return (
    <div className="relative">
      {/* Top border with botanical elements */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        className="absolute -top-8 left-0 right-0 flex items-center justify-center"
      >
        <svg width="100%" height="24" viewBox="0 0 400 24" preserveAspectRatio="xMidYMid meet" className="opacity-80">
          <path 
            d="M 0 12 Q 100 6 200 12 Q 300 18 400 12" 
            stroke="currentColor" 
            strokeWidth="2"
            className="text-gold"
            fill="none"
          />
          <path d="M 100 6 Q 97 3 100 0" fill="currentColor" className="text-forest" opacity="0.8" />
          <path d="M 200 12 Q 198 10 200 8" fill="currentColor" className="text-forest" opacity="0.8" />
          <path d="M 300 18 Q 303 21 300 24" fill="currentColor" className="text-forest" opacity="0.8" />
        </svg>
      </motion.div>

      {/* Left border vine */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -left-8 top-0 bottom-0 w-6 hidden md:block"
      >
        <svg width="100%" height="100%" viewBox="0 0 24 400" preserveAspectRatio="none" className="opacity-75">
          <path
            d="M 18 0 Q 12 100 18 200 Q 24 300 18 400"
            stroke="currentColor"
            strokeWidth="2"
            className="text-forest"
            fill="none"
          />
          <path d="M 12 100 Q 9 97 12 94" fill="currentColor" className="text-forest" opacity="0.8" />
          <path d="M 24 300 Q 27 297 24 294" fill="currentColor" className="text-forest" opacity="0.8" />
        </svg>
      </motion.div>

      {/* Right border vine */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -right-8 top-0 bottom-0 w-6 hidden md:block"
      >
        <svg width="100%" height="100%" viewBox="0 0 24 400" preserveAspectRatio="none" className="opacity-75">
          <path
            d="M 6 0 Q 12 100 6 200 Q 0 300 6 400"
            stroke="currentColor"
            strokeWidth="2"
            className="text-forest"
            fill="none"
          />
          <path d="M 12 100 Q 15 97 12 94" fill="currentColor" className="text-forest" opacity="0.8" />
          <path d="M 0 300 Q -3 297 0 294" fill="currentColor" className="text-forest" opacity="0.8" />
        </svg>
      </motion.div>

      {/* Bottom border */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute -bottom-8 left-0 right-0 flex items-center justify-center"
      >
        <svg width="100%" height="24" viewBox="0 0 400 24" preserveAspectRatio="xMidYMid meet" className="opacity-80">
          <path 
            d="M 0 12 Q 100 18 200 12 Q 300 6 400 12" 
            stroke="currentColor" 
            strokeWidth="2"
            className="text-gold"
            fill="none"
          />
          <path d="M 100 18 Q 97 21 100 24" fill="currentColor" className="text-forest" opacity="0.8" />
          <path d="M 200 12 Q 198 14 200 16" fill="currentColor" className="text-forest" opacity="0.8" />
          <path d="M 300 6 Q 303 3 300 0" fill="currentColor" className="text-forest" opacity="0.8" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="py-8">
        {children}
      </div>
    </div>
  );
}

