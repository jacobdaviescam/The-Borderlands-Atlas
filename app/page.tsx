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
          {/* Left edge - Lush cascading botanical garden */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="hidden md:block absolute -left-32 top-0 bottom-0 w-32 pointer-events-none"
          >
            {/* Cascading vines from top */}
            <div className="absolute top-0 left-0 right-0 h-64">
              <svg viewBox="0 0 120 300" className="w-full h-full" preserveAspectRatio="xMinYMin slice">
                {/* Main cascading vine */}
                <path d="M80,0 Q70,30 75,60 Q80,90 70,120 Q65,150 72,180 Q75,210 68,240 Q65,270 70,300" 
                      stroke="#2C4A2C" strokeWidth="3" fill="none" opacity="0.6"/>
                
                {/* Hanging ivy leaves - layered */}
                <g opacity="0.7">
                  <ellipse cx="65" cy="40" rx="12" ry="18" fill="#2C4A2C" opacity="0.5"/>
                  <ellipse cx="70" cy="38" rx="10" ry="16" fill="#3D5A3D" opacity="0.6"/>
                  <ellipse cx="75" cy="42" rx="11" ry="17" fill="#2C4A2C" opacity="0.55"/>
                </g>
                
                <g opacity="0.65">
                  <ellipse cx="75" cy="90" rx="14" ry="20" fill="#2C4A2C" opacity="0.5"/>
                  <ellipse cx="82" cy="88" rx="12" ry="18" fill="#3D5A3D" opacity="0.6"/>
                  <ellipse cx="70" cy="95" rx="10" ry="16" fill="#2C4A2C" opacity="0.55"/>
                </g>
                
                {/* Fern fronds */}
                <g opacity="0.6">
                  <path d="M55,80 Q45,85 40,95 L42,96 Q47,88 55,82" fill="#2C4A2C"/>
                  <path d="M55,85 Q43,90 38,100 L40,101 Q45,93 55,87" fill="#3D5A3D"/>
                  <path d="M55,90 Q41,95 36,105 L38,106 Q43,98 55,92" fill="#2C4A2C"/>
                </g>
                
                {/* Small flowers */}
                <g opacity="0.5">
                  <circle cx="60" cy="140" r="3" fill="#C9A961"/>
                  <circle cx="58" cy="137" r="2" fill="#B8860B"/>
                  <circle cx="62" cy="137" r="2" fill="#B8860B"/>
                </g>
              </svg>
            </div>
            
            {/* Book spines in middle */}
            <div className="absolute top-1/4 left-4 w-20 h-64 flex flex-col gap-1">
              <div className="h-24 w-16 bg-burgundy opacity-60 border-l-2 border-gold shadow-lg">
                <div className="h-0.5 w-full bg-gold mt-4 opacity-70"></div>
                <div className="h-0.5 w-full bg-gold mt-6 opacity-70"></div>
              </div>
              <div className="h-32 w-14 bg-navy opacity-55 border-l-2 border-brass shadow-lg ml-1">
                <div className="h-0.5 w-full bg-brass mt-6 opacity-70"></div>
              </div>
              <div className="h-20 w-16 bg-deep-brown opacity-50 border-l-2 border-gold shadow-lg">
                <div className="h-0.5 w-full bg-gold mt-3 opacity-70"></div>
              </div>
            </div>
            
            {/* Plants growing from bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-48">
              <svg viewBox="0 0 120 200" className="w-full h-full" preserveAspectRatio="xMinYMax slice">
                {/* Ground plants reaching up */}
                <g opacity="0.65">
                  <ellipse cx="70" cy="160" rx="15" ry="22" fill="#2C4A2C" opacity="0.6"/>
                  <ellipse cx="75" cy="155" rx="13" ry="20" fill="#3D5A3D" opacity="0.7"/>
                  <ellipse cx="80" cy="162" rx="14" ry="21" fill="#2C4A2C" opacity="0.65"/>
                </g>
                
                {/* Tall ferns */}
                <g opacity="0.7">
                  <line x1="65" y1="200" x2="62" y2="130" stroke="#2C4A2C" strokeWidth="2.5"/>
                  <ellipse cx="60" cy="140" rx="8" ry="15" fill="#3D5A3D" opacity="0.6" transform="rotate(-30 60 140)"/>
                  <ellipse cx="64" cy="150" rx="7" ry="13" fill="#2C4A2C" opacity="0.65" transform="rotate(-35 64 150)"/>
                  <ellipse cx="60" cy="160" rx="9" ry="16" fill="#3D5A3D" opacity="0.6" transform="rotate(-25 60 160)"/>
                </g>
              </svg>
            </div>
          </motion.div>

          {/* Right edge - Flowers and drinks corner */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="hidden md:block absolute -right-32 top-0 bottom-0 w-32 pointer-events-none"
          >
            {/* Hanging plants from top */}
            <div className="absolute top-0 left-0 right-0 h-64">
              <svg viewBox="0 0 120 300" className="w-full h-full" preserveAspectRatio="xMaxYMin slice">
                {/* Trailing vine */}
                <path d="M40,0 Q50,30 45,60 Q40,90 50,120 Q55,150 48,180 Q45,210 52,240 Q55,270 50,300" 
                      stroke="#2C4A2C" strokeWidth="3" fill="none" opacity="0.6"/>
                
                {/* Rose-like flowers */}
                <g opacity="0.7">
                  <circle cx="50" cy="50" r="10" fill="#6B2C2C" opacity="0.6"/>
                  <circle cx="47" cy="47" r="6" fill="#8B3C3C" opacity="0.7"/>
                  <circle cx="53" cy="47" r="6" fill="#8B3C3C" opacity="0.7"/>
                  <circle cx="50" cy="52" r="5" fill="#6B2C2C" opacity="0.8"/>
                </g>
                
                {/* Rose leaves */}
                <g opacity="0.65">
                  <ellipse cx="38" cy="60" rx="10" ry="15" fill="#2C4A2C" opacity="0.6"/>
                  <ellipse cx="45" cy="58" rx="9" ry="14" fill="#3D5A3D" opacity="0.65"/>
                  <ellipse cx="52" cy="62" rx="10" ry="15" fill="#2C4A2C" opacity="0.6"/>
                </g>
                
                {/* Lavender sprigs */}
                <g opacity="0.6">
                  <line x1="60" y1="120" x2="65" y2="140" stroke="#2C4A2C" strokeWidth="2"/>
                  <circle cx="64" cy="125" r="2.5" fill="#6B2C2C" opacity="0.7"/>
                  <circle cx="63" cy="128" r="2" fill="#8B3C3C" opacity="0.6"/>
                  <circle cx="65" cy="128" r="2" fill="#8B3C3C" opacity="0.6"/>
                  <circle cx="64" cy="131" r="2" fill="#6B2C2C" opacity="0.7"/>
                </g>
              </svg>
            </div>
            
            {/* Drinks globe with glasses */}
            <div className="absolute top-1/3 right-4 w-24 h-32">
              <svg viewBox="0 0 100 120" className="w-full h-full">
                {/* Old fashioned glass with amber liquid */}
                <g opacity="0.75">
                  {/* Glass */}
                  <rect x="30" y="50" width="40" height="50" rx="3" 
                        stroke="#B8860B" strokeWidth="2.5" fill="none"/>
                  {/* Liquid */}
                  <rect x="32" y="65" width="36" height="33" 
                        fill="#C9A961" opacity="0.6"/>
                  {/* Ice cube suggestion */}
                  <rect x="45" y="70" width="10" height="10" 
                        fill="#FAF5E4" opacity="0.4"/>
                  {/* Glass base */}
                  <rect x="35" y="98" width="30" height="4" 
                        fill="#B8860B" opacity="0.8"/>
                </g>
                
                {/* Wine glass behind */}
                <g opacity="0.6" transform="translate(-10, -5)">
                  <ellipse cx="45" cy="35" rx="15" ry="6" 
                           stroke="#6B2C2C" strokeWidth="2" fill="none"/>
                  <path d="M30,35 L36,50 L54,50 L60,35" 
                        stroke="#6B2C2C" strokeWidth="2" fill="none"/>
                  <line x1="33" y1="50" x2="57" y2="50" 
                        stroke="#6B2C2C" strokeWidth="3"/>
                  <ellipse cx="45" cy="35" rx="13" ry="5" 
                           fill="#6B2C2C" opacity="0.5"/>
                </g>
              </svg>
            </div>
            
            {/* Bottom plants */}
            <div className="absolute bottom-0 left-0 right-0 h-56">
              <svg viewBox="0 0 120 230" className="w-full h-full" preserveAspectRatio="xMaxYMax slice">
                {/* Large leafy plant */}
                <g opacity="0.7">
                  <ellipse cx="45" cy="180" rx="18" ry="25" fill="#2C4A2C" opacity="0.6"/>
                  <ellipse cx="50" cy="175" rx="16" ry="23" fill="#3D5A3D" opacity="0.7"/>
                  <ellipse cx="55" cy="182" rx="17" ry="24" fill="#2C4A2C" opacity="0.65"/>
                  <ellipse cx="40" cy="185" rx="15" ry="22" fill="#3D5A3D" opacity="0.6"/>
                </g>
                
                {/* Smaller flowering plant */}
                <g opacity="0.65">
                  <line x1="60" y1="230" x2="58" y2="170" stroke="#2C4A2C" strokeWidth="2.5"/>
                  <circle cx="58" cy="175" r="5" fill="#C9A961" opacity="0.7"/>
                  <circle cx="55" cy="172" r="3" fill="#B8860B" opacity="0.6"/>
                  <circle cx="61" cy="172" r="3" fill="#B8860B" opacity="0.6"/>
                </g>
                
                {/* Grape vine leaves */}
                <g opacity="0.6">
                  <path d="M30,200 Q20,195 15,205 Q20,215 30,210 Q35,205 30,200" fill="#2C4A2C"/>
                  <path d="M35,210 Q25,205 20,215 Q25,225 35,220 Q40,215 35,210" fill="#3D5A3D"/>
                </g>
              </svg>
            </div>
          </motion.div>
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
      {/* Top Left Corner - with ivy tendrils */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: -20 }}
        animate={{ opacity: 0.6, x: 0, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="corner-ornament top-0 left-0 w-56 h-56 md:w-80 md:h-80"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Base ornamental border */}
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
          
          {/* Ivy tendril creeping in - more prominent */}
          <path
            d="M 5 50 Q 15 45 25 50 Q 35 55 45 50 Q 55 45 65 50"
            stroke="currentColor"
            strokeWidth="2.5"
            className="text-forest"
            fill="none"
            opacity="0.85"
          />
          {/* Larger leaves */}
          <path d="M 15 45 Q 10 42 15 38" fill="currentColor" className="text-forest" opacity="0.75" />
          <path d="M 35 55 Q 30 58 35 62" fill="currentColor" className="text-forest" opacity="0.75" />
          <path d="M 55 45 Q 50 42 55 38" fill="currentColor" className="text-forest" opacity="0.75" />
          <path d="M 25 50 Q 22 48 25 46" fill="currentColor" className="text-forest" opacity="0.7" />
          
          {/* Book spine accent in corner - more visible */}
          <rect x="3" y="3" width="12" height="50" fill="currentColor" className="text-burgundy" opacity="0.4" />
          <line x1="3" y1="18" x2="15" y2="18" stroke="currentColor" className="text-gold" strokeWidth="1" opacity="0.7" />
          <line x1="3" y1="38" x2="15" y2="38" stroke="currentColor" className="text-gold" strokeWidth="1" opacity="0.7" />
          
          {/* Decorative details */}
          <circle cx="20" cy="20" r="3" fill="currentColor" className="text-brass" />
          <circle cx="40" cy="15" r="2" fill="currentColor" className="text-gold" />
        </svg>
      </motion.div>

      {/* Top Right Corner - with wine glass silhouette */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: -20 }}
        animate={{ opacity: 0.6, x: 0, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="corner-ornament top-0 right-0 w-56 h-56 md:w-80 md:h-80 transform scale-x-[-1]"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Base ornamental border */}
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
          
          {/* More prominent wine glass */}
          <g transform="translate(15, 25)" opacity="0.7">
            <ellipse cx="10" cy="6" rx="9" ry="4" stroke="currentColor" className="text-burgundy" strokeWidth="1.5" fill="none" />
            <path d="M 1 6 L 6 18 L 14 18 L 19 6" stroke="currentColor" className="text-burgundy" strokeWidth="1.5" fill="none" />
            <line x1="3" y1="18" x2="17" y2="18" stroke="currentColor" className="text-burgundy" strokeWidth="2" />
            {/* Add wine in glass */}
            <ellipse cx="10" cy="6" rx="7" ry="3" fill="currentColor" className="text-burgundy" opacity="0.3" />
          </g>
          
          {/* Ivy growing down - more prominent */}
          <path
            d="M 55 5 Q 48 18 55 25 Q 62 32 55 40 Q 48 48 52 55"
            stroke="currentColor"
            strokeWidth="2.5"
            className="text-forest"
            fill="none"
            opacity="0.85"
          />
          <path d="M 48 18 Q 45 15 42 18" fill="currentColor" className="text-forest" opacity="0.75" />
          <path d="M 62 32 Q 65 29 68 32" fill="currentColor" className="text-forest" opacity="0.75" />
          <path d="M 48 48 Q 45 45 42 48" fill="currentColor" className="text-forest" opacity="0.75" />
          
          <circle cx="20" cy="20" r="3" fill="currentColor" className="text-brass" />
          <circle cx="40" cy="15" r="2" fill="currentColor" className="text-gold" />
        </svg>
      </motion.div>

      {/* Bottom Left Corner */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 0.6, x: 0, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="corner-ornament bottom-0 left-0 w-56 h-56 md:w-80 md:h-80 transform scale-y-[-1]"
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
        animate={{ opacity: 0.6, x: 0, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="corner-ornament bottom-0 right-0 w-56 h-56 md:w-80 md:h-80 transform scale-[-1]"
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
