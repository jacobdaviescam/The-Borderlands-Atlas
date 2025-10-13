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
      
      {/* Left page edge decoration */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="hidden lg:block fixed left-4 top-24 bottom-24 w-12"
      >
        <svg viewBox="0 0 48 800" fill="none" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M 36 0 Q 24 200 36 400 Q 48 600 36 800"
            stroke="currentColor"
            strokeWidth="2"
            className="text-forest"
            opacity="0.8"
            fill="none"
          />
          <path d="M 24 200 Q 18 195 22 188" fill="currentColor" className="text-forest" opacity="0.7" />
          <path d="M 48 600 Q 54 595 50 588" fill="currentColor" className="text-forest" opacity="0.7" />
        </svg>
      </motion.div>

      {/* Right page edge decoration */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="hidden lg:block fixed right-4 top-24 bottom-24 w-12"
      >
        <svg viewBox="0 0 48 800" fill="none" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M 12 0 Q 24 200 12 400 Q 0 600 12 800"
            stroke="currentColor"
            strokeWidth="2"
            className="text-forest"
            opacity="0.8"
            fill="none"
          />
          <path d="M 24 200 Q 30 195 26 188" fill="currentColor" className="text-forest" opacity="0.7" />
          <path d="M 0 600 Q -6 595 -2 588" fill="currentColor" className="text-forest" opacity="0.7" />
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
    <div className="flex items-center justify-center gap-3 py-2">
      {/* Vine left - more visible */}
      <svg width="60" height="20" viewBox="0 0 60 20" fill="none" className="opacity-80">
        <path 
          d="M 0 10 Q 15 7 30 10 Q 45 13 60 10" 
          stroke="currentColor" 
          strokeWidth="2" 
          className="text-gold"
        />
        <path d="M 15 7 Q 13 5 15 3" fill="currentColor" className="text-forest" opacity="0.8" />
        <path d="M 30 10 Q 28 8 30 6" fill="currentColor" className="text-forest" opacity="0.75" />
      </svg>
      
      {/* Center - larger */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" className="text-brass" />
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1" className="text-gold opacity-70" />
      </svg>
      
      {/* Vine right - more visible */}
      <svg width="60" height="20" viewBox="0 0 60 20" fill="none" className="opacity-80">
        <path 
          d="M 0 10 Q 15 13 30 10 Q 45 7 60 10" 
          stroke="currentColor" 
          strokeWidth="2" 
          className="text-gold"
        />
        <path d="M 45 7 Q 47 5 45 3" fill="currentColor" className="text-forest" opacity="0.8" />
        <path d="M 30 10 Q 32 8 30 6" fill="currentColor" className="text-forest" opacity="0.75" />
      </svg>
    </div>
  );
}

