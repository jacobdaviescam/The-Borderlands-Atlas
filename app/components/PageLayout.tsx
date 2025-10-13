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
      {/* Subtle corner ornaments on inner pages */}
      <TopBorder />
      
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
    <div className="flex items-center justify-center gap-4 py-2">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold"></div>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" className="text-brass" />
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="0.5" className="text-gold opacity-50" />
      </svg>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold"></div>
    </div>
  );
}

