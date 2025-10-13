'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Ornamental Corner Decorations */}
      <CornerOrnaments />
      
      {/* Main Content - With Edge Decorations */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center space-y-8 relative"
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
            <NavLink href="/blog" label="Essays & Thoughts" icon="book" />
            <NavLink href="/atlas" label="Mind Maps" icon="map" />
            <NavLink href="/code" label="Code & Projects" icon="code" />
            <NavLink href="/about" label="About" icon="glass" />
          </motion.nav>
        </motion.div>
      </div>
    </main>
  );
}

function CornerOrnaments() {
  return (
    <>
      {/* Top Left Corner - Clean Art Deco */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="fixed top-0 left-0 w-32 h-32 pointer-events-none z-0"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Corner fan shape */}
          <path d="M 0,0 L 0,40 L 5,35 L 0,30 L 10,25 L 0,20 L 15,15 L 0,10 L 20,5 L 0,0 Z" 
                fill="#C9A961" opacity="0.3"/>
          <path d="M 0,0 L 40,0 L 35,5 L 30,0 L 25,10 L 20,0 L 15,15 L 10,0 L 5,20 L 0,0 Z" 
                fill="#B8860B" opacity="0.3"/>
          
          {/* Geometric lines */}
          <line x1="0" y1="25" x2="25" y2="0" stroke="#C9A961" strokeWidth="1.5" opacity="0.4"/>
          <line x1="0" y1="15" x2="15" y2="0" stroke="#B8860B" strokeWidth="1" opacity="0.5"/>
          <line x1="0" y1="35" x2="35" y2="0" stroke="#C9A961" strokeWidth="1" opacity="0.3"/>
          
          {/* Small decorative squares */}
          <rect x="18" y="2" width="3" height="3" fill="#B8860B" opacity="0.5"/>
          <rect x="2" y="18" width="3" height="3" fill="#C9A961" opacity="0.5"/>
        </svg>
      </motion.div>

      {/* Top Right Corner - Clean Art Deco */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="fixed top-0 right-0 w-32 h-32 pointer-events-none z-0"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Corner fan shape (mirrored) */}
          <path d="M 100,0 L 100,40 L 95,35 L 100,30 L 90,25 L 100,20 L 85,15 L 100,10 L 80,5 L 100,0 Z" 
                fill="#C9A961" opacity="0.3"/>
          <path d="M 100,0 L 60,0 L 65,5 L 70,0 L 75,10 L 80,0 L 85,15 L 90,0 L 95,20 L 100,0 Z" 
                fill="#B8860B" opacity="0.3"/>
          
          {/* Geometric lines */}
          <line x1="100" y1="25" x2="75" y2="0" stroke="#C9A961" strokeWidth="1.5" opacity="0.4"/>
          <line x1="100" y1="15" x2="85" y2="0" stroke="#B8860B" strokeWidth="1" opacity="0.5"/>
          <line x1="100" y1="35" x2="65" y2="0" stroke="#C9A961" strokeWidth="1" opacity="0.3"/>
          
          {/* Small decorative squares */}
          <rect x="79" y="2" width="3" height="3" fill="#B8860B" opacity="0.5"/>
          <rect x="95" y="18" width="3" height="3" fill="#C9A961" opacity="0.5"/>
        </svg>
      </motion.div>

      {/* Bottom Left Corner - Clean Art Deco */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="fixed bottom-0 left-0 w-32 h-32 pointer-events-none z-0"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Corner fan shape (mirrored vertically) */}
          <path d="M 0,100 L 0,60 L 5,65 L 0,70 L 10,75 L 0,80 L 15,85 L 0,90 L 20,95 L 0,100 Z" 
                fill="#C9A961" opacity="0.3"/>
          <path d="M 0,100 L 40,100 L 35,95 L 30,100 L 25,90 L 20,100 L 15,85 L 10,100 L 5,80 L 0,100 Z" 
                fill="#B8860B" opacity="0.3"/>
          
          {/* Geometric lines */}
          <line x1="0" y1="75" x2="25" y2="100" stroke="#C9A961" strokeWidth="1.5" opacity="0.4"/>
          <line x1="0" y1="85" x2="15" y2="100" stroke="#B8860B" strokeWidth="1" opacity="0.5"/>
          <line x1="0" y1="65" x2="35" y2="100" stroke="#C9A961" strokeWidth="1" opacity="0.3"/>
          
          {/* Small decorative squares */}
          <rect x="18" y="95" width="3" height="3" fill="#B8860B" opacity="0.5"/>
          <rect x="2" y="79" width="3" height="3" fill="#C9A961" opacity="0.5"/>
        </svg>
      </motion.div>

      {/* Bottom Right Corner - Clean Art Deco */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="fixed bottom-0 right-0 w-32 h-32 pointer-events-none z-0"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Corner fan shape (mirrored both ways) */}
          <path d="M 100,100 L 100,60 L 95,65 L 100,70 L 90,75 L 100,80 L 85,85 L 100,90 L 80,95 L 100,100 Z" 
                fill="#C9A961" opacity="0.3"/>
          <path d="M 100,100 L 60,100 L 65,95 L 70,100 L 75,90 L 80,100 L 85,85 L 90,100 L 95,80 L 100,100 Z" 
                fill="#B8860B" opacity="0.3"/>
          
          {/* Geometric lines */}
          <line x1="100" y1="75" x2="75" y2="100" stroke="#C9A961" strokeWidth="1.5" opacity="0.4"/>
          <line x1="100" y1="85" x2="85" y2="100" stroke="#B8860B" strokeWidth="1" opacity="0.5"/>
          <line x1="100" y1="65" x2="65" y2="100" stroke="#C9A961" strokeWidth="1" opacity="0.3"/>
          
          {/* Small decorative squares */}
          <rect x="79" y="95" width="3" height="3" fill="#B8860B" opacity="0.5"/>
          <rect x="95" y="79" width="3" height="3" fill="#C9A961" opacity="0.5"/>
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
      {/* Vine on left - more prominent */}
      <svg width="80" height="32" viewBox="0 0 80 32" fill="none" className="opacity-90">
        <path 
          d="M 0 16 Q 20 10 30 16 Q 40 22 50 16 Q 65 10 80 16" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          className="text-gold"
          fill="none"
        />
        <path d="M 20 10 Q 17 7 20 4" fill="currentColor" className="text-forest" opacity="0.8" />
        <path d="M 40 22 Q 43 19 46 22" fill="currentColor" className="text-forest" opacity="0.8" />
        <path d="M 30 16 Q 28 14 30 12" fill="currentColor" className="text-forest" opacity="0.75" />
      </svg>
      
      {/* Center compass/map motif - larger */}
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="4" stroke="currentColor" strokeWidth="2" className="text-brass" />
        <circle cx="18" cy="18" r="8" stroke="currentColor" strokeWidth="1" className="text-gold opacity-70" />
        {/* Compass points - more visible */}
        <line x1="18" y1="4" x2="18" y2="10" stroke="currentColor" strokeWidth="1.5" className="text-burgundy opacity-70" />
        <line x1="18" y1="26" x2="18" y2="32" stroke="currentColor" strokeWidth="1.5" className="text-burgundy opacity-70" />
        <line x1="4" y1="18" x2="10" y2="18" stroke="currentColor" strokeWidth="1.5" className="text-burgundy opacity-70" />
        <line x1="26" y1="18" x2="32" y2="18" stroke="currentColor" strokeWidth="1.5" className="text-burgundy opacity-70" />
        {/* Add diagonal points */}
        <circle cx="18" cy="6" r="1.5" fill="currentColor" className="text-burgundy opacity-60" />
        <circle cx="18" cy="30" r="1.5" fill="currentColor" className="text-burgundy opacity-60" />
      </svg>
      
      {/* Vine on right - more prominent */}
      <svg width="80" height="32" viewBox="0 0 80 32" fill="none" className="opacity-90">
        <path 
          d="M 0 16 Q 15 22 30 16 Q 40 10 50 16 Q 60 22 80 16" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          className="text-gold"
          fill="none"
        />
        <path d="M 30 16 Q 27 13 24 16" fill="currentColor" className="text-forest" opacity="0.8" />
        <path d="M 60 22 Q 63 19 60 16" fill="currentColor" className="text-forest" opacity="0.8" />
        <path d="M 50 16 Q 48 14 50 12" fill="currentColor" className="text-forest" opacity="0.75" />
      </svg>
    </motion.div>
  );
}

function NavLink({ href, label, icon }: { href: string; label: string; icon: string }) {
  const getIcon = () => {
    switch (icon) {
      case 'book':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'map':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        );
      case 'code':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'glass':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 2h8M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 1-.672-2.219l-.656-.984A4 4 0 0 0 15 4.788V2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <Link
      href={href}
      className="group relative px-6 py-3 text-lg font-medium text-burgundy border border-burgundy/30 
                 hover:border-burgundy transition-all duration-300 overflow-hidden"
    >
      <span className="relative z-10 group-hover:text-cream transition-colors duration-300 flex items-center gap-2">
        {getIcon()}
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
