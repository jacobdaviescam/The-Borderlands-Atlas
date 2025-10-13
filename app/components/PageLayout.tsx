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
      
      {/* Left page edge - ornate botanical border */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.7, x: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="hidden lg:block fixed left-2 top-20 bottom-20 w-16"
      >
        <svg viewBox="0 0 64 800" fill="none" className="w-full h-full" preserveAspectRatio="none">
          {/* Decorative border lines */}
          <path
            d="M 48 0 Q 36 200 48 400 Q 60 600 48 800"
            stroke="currentColor"
            strokeWidth="2.5"
            className="text-gold"
            opacity="0.75"
          />
          <path
            d="M 42 0 Q 30 200 42 400 Q 54 600 42 800"
            stroke="currentColor"
            strokeWidth="1"
            className="text-brass"
            opacity="0.6"
          />
          
          {/* Repeating botanical motifs */}
          <g opacity="0.7">
            <path d="M 36 100 Q 26 98 22 105 Q 26 110 32 108 Q 35 104 36 100" fill="currentColor" className="text-forest" />
            <path d="M 36 300 Q 26 298 22 305 Q 26 310 32 308 Q 35 304 36 300" fill="currentColor" className="text-burgundy" />
            <path d="M 36 500 Q 26 498 22 505 Q 26 510 32 508 Q 35 504 36 500" fill="currentColor" className="text-forest" />
            <path d="M 36 700 Q 26 698 22 705 Q 26 710 32 708 Q 35 704 36 700" fill="currentColor" className="text-burgundy" />
          </g>
          
          {/* Decorative dots */}
          <circle cx="45" cy="150" r="1.5" fill="currentColor" className="text-brass" opacity="0.7" />
          <circle cx="45" cy="350" r="1.5" fill="currentColor" className="text-brass" opacity="0.7" />
          <circle cx="45" cy="550" r="1.5" fill="currentColor" className="text-brass" opacity="0.7" />
        </svg>
      </motion.div>

      {/* Right page edge - ornate botanical border */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.7, x: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="hidden lg:block fixed right-2 top-20 bottom-20 w-16"
      >
        <svg viewBox="0 0 64 800" fill="none" className="w-full h-full" preserveAspectRatio="none">
          {/* Decorative border lines */}
          <path
            d="M 16 0 Q 28 200 16 400 Q 4 600 16 800"
            stroke="currentColor"
            strokeWidth="2.5"
            className="text-gold"
            opacity="0.75"
          />
          <path
            d="M 22 0 Q 34 200 22 400 Q 10 600 22 800"
            stroke="currentColor"
            strokeWidth="1"
            className="text-brass"
            opacity="0.6"
          />
          
          {/* Repeating botanical motifs */}
          <g opacity="0.7">
            <path d="M 28 100 Q 38 98 42 105 Q 38 110 32 108 Q 29 104 28 100" fill="currentColor" className="text-forest" />
            <path d="M 28 300 Q 38 298 42 305 Q 38 310 32 308 Q 29 304 28 300" fill="currentColor" className="text-burgundy" />
            <path d="M 28 500 Q 38 498 42 505 Q 38 510 32 508 Q 29 504 28 500" fill="currentColor" className="text-forest" />
            <path d="M 28 700 Q 38 698 42 705 Q 38 710 32 708 Q 29 704 28 700" fill="currentColor" className="text-burgundy" />
          </g>
          
          {/* Decorative dots */}
          <circle cx="19" cy="150" r="1.5" fill="currentColor" className="text-brass" opacity="0.7" />
          <circle cx="19" cy="350" r="1.5" fill="currentColor" className="text-brass" opacity="0.7" />
          <circle cx="19" cy="550" r="1.5" fill="currentColor" className="text-brass" opacity="0.7" />
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

