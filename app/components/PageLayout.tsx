'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export default function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  return (
    <main className="min-h-screen relative">
      {/* Clean Art Deco top border */}
      <TopBorder />
      
      {/* Left page edge - clean geometric border */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="hidden lg:block fixed left-4 top-32 bottom-32 w-12"
      >
        <svg viewBox="0 0 48 800" fill="none" className="w-full h-full" preserveAspectRatio="none">
          {/* Decorative border lines */}
          <path
            d="M 36 0 Q 28 200 36 400 Q 44 600 36 800"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gold"
            opacity="0.5"
          />
          <path
            d="M 32 0 Q 24 200 32 400 Q 40 600 32 800"
            stroke="currentColor"
            strokeWidth="1"
            className="text-brass"
            opacity="0.4"
          />
          
          {/* Decorative dots */}
          <circle cx="34" cy="150" r="2" fill="currentColor" className="text-brass" opacity="0.5" />
          <circle cx="34" cy="350" r="2" fill="currentColor" className="text-brass" opacity="0.5" />
          <circle cx="34" cy="550" r="2" fill="currentColor" className="text-brass" opacity="0.5" />
          <circle cx="34" cy="650" r="2" fill="currentColor" className="text-gold" opacity="0.4" />
        </svg>
      </motion.div>

      {/* Right page edge - clean geometric border */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="hidden lg:block fixed right-4 top-32 bottom-32 w-12"
      >
        <svg viewBox="0 0 48 800" fill="none" className="w-full h-full" preserveAspectRatio="none">
          {/* Decorative border lines */}
          <path
            d="M 12 0 Q 20 200 12 400 Q 4 600 12 800"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gold"
            opacity="0.5"
          />
          <path
            d="M 16 0 Q 24 200 16 400 Q 8 600 16 800"
            stroke="currentColor"
            strokeWidth="1"
            className="text-brass"
            opacity="0.4"
          />
          
          {/* Decorative dots */}
          <circle cx="14" cy="150" r="2" fill="currentColor" className="text-brass" opacity="0.5" />
          <circle cx="14" cy="350" r="2" fill="currentColor" className="text-brass" opacity="0.5" />
          <circle cx="14" cy="550" r="2" fill="currentColor" className="text-brass" opacity="0.5" />
          <circle cx="14" cy="650" r="2" fill="currentColor" className="text-gold" opacity="0.4" />
        </svg>
      </motion.div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        {/* Back to home link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-burgundy hover:text-brass transition-colors group"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="transform group-hover:-translate-x-1 transition-transform"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Return to Atlas</span>
          </Link>
        </motion.div>

        {/* Page Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h1 className="text-5xl md:text-6xl font-semibold text-burgundy">
            {title}
          </h1>
          {subtitle && (
            <>
              <DecorativeDivider />
              <p className="text-xl text-text-secondary italic">
                {subtitle}
              </p>
            </>
          )}
        </motion.header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {children}
        </motion.div>
      </div>
    </main>
  );
}

function TopBorder() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30 z-50"
    />
  );
}

function DecorativeDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-6">
      <div className="flex items-center gap-1">
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold opacity-50"></div>
        <div className="w-2 h-2 rotate-45 border border-gold opacity-60"></div>
        <div className="w-8 h-px bg-gold opacity-50"></div>
      </div>
      <div className="w-3 h-3 rounded-full border-2 border-brass opacity-60"></div>
      <div className="flex items-center gap-1">
        <div className="w-8 h-px bg-gold opacity-50"></div>
        <div className="w-2 h-2 rotate-45 border border-gold opacity-60"></div>
        <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold opacity-50"></div>
      </div>
    </div>
  );
}

