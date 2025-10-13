'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Ornamental Corner Decorations */}
      <CornerOrnaments />
      
      {/* Main Content - Clean Center */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center space-y-8"
        >
          {/* Title with decorative divider */}
          <div className="space-y-4">
            <motion.h1 
              className="text-6xl md:text-7xl font-semibold text-burgundy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              The Borderlands Atlas
            </motion.h1>
            
            <DecorativeDivider />
            
            <motion.p 
              className="text-xl md:text-2xl text-text-secondary italic max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Charting the territory between knowing and unknowing
            </motion.p>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-2xl mx-auto space-y-6 text-lg text-deep-brown"
          >
            <p>
              Welcome to the borderlands—that liminal space where certainty fades and curiosity begins. 
              This is a cartographer&apos;s journal of sorts, mapping the edges of what I know and planning 
              expeditions into what I don&apos;t.
            </p>
            <p>
              Here you&apos;ll find essays, mindmaps, explorations, and fragments of thought from someone 
              perpetually stationed at the boundary between disciplines, between questions and answers, 
              between the classical and the contemporary.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 pt-8"
          >
            <NavLink href="/blog" label="Essays & Thoughts" />
            <NavLink href="/atlas" label="Mind Maps" />
            <NavLink href="/code" label="Code & Projects" />
            <NavLink href="/about" label="About" />
          </motion.nav>
        </motion.div>
      </div>
    </main>
  );
}

function CornerOrnaments() {
  return (
    <>
      {/* Top Left Corner */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: -20 }}
        animate={{ opacity: 0.3, x: 0, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="corner-ornament top-0 left-0 w-48 h-48 md:w-64 md:h-64"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 0 0 L 0 100 Q 0 0 100 0 L 0 0 Z"
            fill="currentColor"
            className="text-gold"
            opacity="0.4"
          />
          <path
            d="M 10 10 L 10 90 Q 10 10 90 10"
            stroke="currentColor"
            strokeWidth="2"
            className="text-burgundy"
            fill="none"
          />
          {/* Decorative flourishes */}
          <circle cx="20" cy="20" r="3" fill="currentColor" className="text-brass" />
          <circle cx="40" cy="15" r="2" fill="currentColor" className="text-gold" />
          <circle cx="15" cy="40" r="2" fill="currentColor" className="text-gold" />
        </svg>
      </motion.div>

      {/* Top Right Corner */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: -20 }}
        animate={{ opacity: 0.3, x: 0, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="corner-ornament top-0 right-0 w-48 h-48 md:w-64 md:h-64 transform scale-x-[-1]"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 0 0 L 0 100 Q 0 0 100 0 L 0 0 Z"
            fill="currentColor"
            className="text-gold"
            opacity="0.4"
          />
          <path
            d="M 10 10 L 10 90 Q 10 10 90 10"
            stroke="currentColor"
            strokeWidth="2"
            className="text-burgundy"
            fill="none"
          />
          <circle cx="20" cy="20" r="3" fill="currentColor" className="text-brass" />
          <circle cx="40" cy="15" r="2" fill="currentColor" className="text-gold" />
          <circle cx="15" cy="40" r="2" fill="currentColor" className="text-gold" />
        </svg>
      </motion.div>

      {/* Bottom Left Corner */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 0.3, x: 0, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="corner-ornament bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 transform scale-y-[-1]"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 0 0 L 0 100 Q 0 0 100 0 L 0 0 Z"
            fill="currentColor"
            className="text-gold"
            opacity="0.4"
          />
          <path
            d="M 10 10 L 10 90 Q 10 10 90 10"
            stroke="currentColor"
            strokeWidth="2"
            className="text-burgundy"
            fill="none"
          />
          <circle cx="20" cy="20" r="3" fill="currentColor" className="text-brass" />
          <circle cx="40" cy="15" r="2" fill="currentColor" className="text-gold" />
          <circle cx="15" cy="40" r="2" fill="currentColor" className="text-gold" />
        </svg>
      </motion.div>

      {/* Bottom Right Corner */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 20 }}
        animate={{ opacity: 0.3, x: 0, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="corner-ornament bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 transform scale-[-1]"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 0 0 L 0 100 Q 0 0 100 0 L 0 0 Z"
            fill="currentColor"
            className="text-gold"
            opacity="0.4"
          />
          <path
            d="M 10 10 L 10 90 Q 10 10 90 10"
            stroke="currentColor"
            strokeWidth="2"
            className="text-burgundy"
            fill="none"
          />
          <circle cx="20" cy="20" r="3" fill="currentColor" className="text-brass" />
          <circle cx="40" cy="15" r="2" fill="currentColor" className="text-gold" />
          <circle cx="15" cy="40" r="2" fill="currentColor" className="text-gold" />
        </svg>
      </motion.div>
    </>
  );
}

function DecorativeDivider() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="flex items-center justify-center gap-4 py-4"
    >
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold"></div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" className="text-brass" />
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="0.5" className="text-gold opacity-50" />
      </svg>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold"></div>
    </motion.div>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group relative px-6 py-3 text-lg font-medium text-burgundy border border-burgundy/30 
                 hover:border-burgundy transition-all duration-300 overflow-hidden"
    >
      <span className="relative z-10 group-hover:text-cream transition-colors duration-300">
        {label}
      </span>
      <motion.div
        className="absolute inset-0 bg-burgundy origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  );
}
