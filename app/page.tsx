'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import OrnateCornerOrnaments from './components/OrganicCornerOrnaments';
import AtmosphericEffects from './components/AtmosphericEffects';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Atmospheric Effects */}
      <AtmosphericEffects />
      
      {/* Ornate Corner Decorations */}
      <OrnateCornerOrnaments />
      
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
              Charting the territory between impact and safety
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
              I&apos;m Jacob Davies. I work on AI safety, building monitoring infrastructure 
              that defends against jailbreaks and accidental misalignment and ensures deployed AI systems remain safe 
              and controllable.
            
            </p>
            <p>
              This site maps what I&apos;m learning, building, and thinking about at the intersection of 
              AI capabilities and safety - the borderlands where systems become powerful enough to matter 
              but not yet safe enough to trust.
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

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="flex justify-center items-center gap-6 pt-8"
          >
            <a
              href="https://www.linkedin.com/in/jacob-davies-5199b419b/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-burgundy/70 hover:text-burgundy transition-colors"
            >
              <motion.svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </motion.svg>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </main>
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

function NavLink({ href, label, icon }: { href: string; label: string; icon: string }) {
  const getIcon = () => {
    switch (icon) {
      case 'book':
        return (
          <motion.svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </motion.svg>
        );
      case 'map':
        return (
          <motion.svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ duration: 0.2 }}
          >
            <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </motion.svg>
        );
      case 'code':
        return (
          <motion.svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </motion.svg>
        );
      case 'glass':
        return (
          <motion.svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ duration: 0.2 }}
          >
            <path d="M8 2h8M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 1-.672-2.219l-.656-.984A4 4 0 0 0 15 4.788V2" />
          </motion.svg>
        );
      default:
        return null;
    }
  };

  return (
    <Link href={href}>
      <motion.div
        className="group relative px-8 py-4 text-lg font-medium text-burgundy border border-burgundy/30 
                   hover:border-burgundy transition-all duration-500 overflow-hidden cursor-pointer"
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {/* Background animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-burgundy/10 to-brass/10 origin-left"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Subtle glow effect */}
        <motion.div
          className="absolute inset-0 bg-burgundy/5 rounded-sm"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        
        <span className="relative z-10 group-hover:text-burgundy-dark transition-colors duration-300 flex items-center gap-3">
          {getIcon()}
          <motion.span
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.span>
        </span>
        
        {/* Decorative vine accent on hover */}
        <motion.div
          className="absolute top-2 right-2 w-6 h-6 opacity-0 group-hover:opacity-60"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M 2 12 Q 6 8 10 12 Q 14 16 18 12 Q 20 10 22 12" stroke="#2C4A2C" />
            <circle cx="6" cy="10" r="1" fill="#2C4A2C" />
            <circle cx="14" cy="14" r="1" fill="#2C4A2C" />
          </svg>
        </motion.div>
      </motion.div>
    </Link>
  );
}
