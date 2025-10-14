'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Region {
  id: string;
  name: string;
  path: string;
  x: number;
  y: number;
  shape: 'circle' | 'rect';
}

const regions: Region[] = [
  { id: 'home', name: 'Central Plaza', path: '/', x: 100, y: 100, shape: 'circle' },
  { id: 'blog', name: 'Library Quarter', path: '/blog', x: 40, y: 110, shape: 'rect' },
  { id: 'atlas', name: 'Cartography District', path: '/atlas', x: 100, y: 40, shape: 'rect' },
  { id: 'code', name: 'The Workshop', path: '/code', x: 160, y: 100, shape: 'rect' },
  { id: 'about', name: 'The Study', path: '/about', x: 100, y: 160, shape: 'circle' },
];

export default function MiniMap() {
  const pathname = usePathname();
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const getCurrentRegion = () => {
    const basePath = pathname.split('/')[1] || '';
    if (basePath === '') return 'home';
    return basePath;
  };
  
  const currentRegion = getCurrentRegion();
  
  console.log('MiniMap rendered - Current region:', currentRegion, 'Is expanded:', isExpanded);
  
  // Debug expanded state
  if (isExpanded) {
    console.log('Full-screen map should be visible now!');
  }

  return (
    <>
      {/* Mini Map - Fixed in top-right corner */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mini-map-container pointer-events-auto"
      >
      {/* Container with subtle border */}
      <div className="relative bg-parchment/95 backdrop-blur-sm border-2 border-gold/30 rounded-lg p-4 shadow-lg pointer-events-auto">
        {/* Expand button - More visible */}
        <button
          onClick={() => {
            console.log('Expand button clicked!');
            setIsExpanded(true);
          }}
          className="absolute -top-3 -left-3 w-8 h-8 bg-burgundy text-parchment rounded-full flex items-center justify-center hover:bg-brass transition-colors shadow-lg z-20 border-2 border-parchment cursor-pointer"
          aria-label="Expand map"
          title="Expand map to full screen"
          type="button"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </button>
        {/* Title */}
        <div className="text-xs uppercase tracking-widest text-brass font-semibold mb-3 text-center">
          The Borderlands
        </div>
        
        {/* SVG Map */}
        <svg 
          width="200" 
          height="200" 
          viewBox="0 0 200 200"
          className="overflow-visible pointer-events-auto"
        >
          {/* Decorative border */}
          <rect 
            x="5" 
            y="5" 
            width="190" 
            height="190" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
            className="text-gold/20"
          />
          
          {/* Connection lines */}
          <g className="text-gold/20" strokeWidth="1.5">
            <line x1="100" y1="100" x2="40" y2="110" stroke="currentColor" strokeDasharray="3,3" />
            <line x1="100" y1="100" x2="100" y2="40" stroke="currentColor" strokeDasharray="3,3" />
            <line x1="100" y1="100" x2="160" y2="100" stroke="currentColor" strokeDasharray="3,3" />
            <line x1="100" y1="100" x2="100" y2="160" stroke="currentColor" strokeDasharray="3,3" />
          </g>

          {/* Regions */}
          {regions.map((region) => {
            const isActive = currentRegion === region.id;
            const isHovered = hoveredRegion === region.id;
            
            return (
              <Link key={region.id} href={region.path} className="pointer-events-auto">
                <g
                  onMouseEnter={() => setHoveredRegion(region.id)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  className="cursor-pointer transition-all duration-300 pointer-events-auto"
                >
                  {region.shape === 'circle' ? (
                    <>
                      {/* Pulse effect for active region */}
                      {isActive && (
                        <circle
                          cx={region.x}
                          cy={region.y}
                          r="20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-burgundy animate-ping"
                          opacity="0.4"
                        />
                      )}
                      <circle
                        cx={region.x}
                        cy={region.y}
                        r="15"
                        fill="currentColor"
                        className={`transition-all ${
                          isActive 
                            ? 'text-burgundy' 
                            : isHovered 
                            ? 'text-brass' 
                            : 'text-gold/40'
                        }`}
                        opacity={isActive ? 1 : isHovered ? 0.8 : 0.5}
                      />
                      {isActive && (
                        <circle
                          cx={region.x}
                          cy={region.y}
                          r="6"
                          fill="currentColor"
                          className="text-parchment"
                        />
                      )}
                    </>
                  ) : (
                    <>
                      {/* Pulse effect for active region */}
                      {isActive && (
                        <rect
                          x={region.x - 20}
                          y={region.y - 12}
                          width="40"
                          height="24"
                          rx="2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-burgundy animate-ping"
                          opacity="0.4"
                        />
                      )}
                      <rect
                        x={region.x - 15}
                        y={region.y - 8}
                        width="30"
                        height="16"
                        rx="2"
                        fill="currentColor"
                        className={`transition-all ${
                          isActive 
                            ? 'text-burgundy' 
                            : isHovered 
                            ? 'text-brass' 
                            : 'text-gold/40'
                        }`}
                        opacity={isActive ? 1 : isHovered ? 0.8 : 0.5}
                      />
                      {isActive && (
                        <rect
                          x={region.x - 6}
                          y={region.y - 3}
                          width="12"
                          height="6"
                          rx="1"
                          fill="currentColor"
                          className="text-parchment"
                        />
                      )}
                    </>
                  )}
                </g>
              </Link>
            );
          })}
        </svg>

        {/* Tooltip on hover */}
        {hoveredRegion && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
          >
            <div className="bg-burgundy text-parchment px-3 py-1 rounded text-sm font-medium">
              {regions.find(r => r.id === hoveredRegion)?.name}
            </div>
            <div className="w-2 h-2 bg-burgundy rotate-45 absolute -top-1 left-1/2 -translate-x-1/2"></div>
          </motion.div>
        )}

        {/* Current location label */}
        <div className="text-xs text-center mt-3 text-text-secondary italic">
          {regions.find(r => r.id === currentRegion)?.name || 'Central Plaza'}
        </div>
      </div>
    </motion.div>

      {/* Full-Screen Expanded Map */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-deep-brown/95 backdrop-blur-md z-50 flex items-center justify-center p-8"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative bg-parchment border-4 border-gold/40 rounded-xl p-8 max-w-5xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-burgundy text-parchment rounded-full flex items-center justify-center hover:bg-brass transition-colors shadow-lg z-10"
                aria-label="Close map"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Map Title */}
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-burgundy mb-2">The Borderlands Atlas</h2>
                <p className="text-brass italic">Navigate the territories of knowledge</p>
              </div>

              {/* Large SVG Map */}
              <svg 
                width="100%" 
                height="500" 
                viewBox="0 0 800 500"
                className="overflow-visible"
              >
                {/* Decorative border */}
                <rect 
                  x="20" 
                  y="20" 
                  width="760" 
                  height="460" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  className="text-gold/30"
                />
                
                {/* Connection lines */}
                <g className="text-gold/20" strokeWidth="3">
                  <line x1="400" y1="250" x2="160" y2="275" stroke="currentColor" strokeDasharray="8,8" />
                  <line x1="400" y1="250" x2="400" y2="120" stroke="currentColor" strokeDasharray="8,8" />
                  <line x1="400" y1="250" x2="640" y2="250" stroke="currentColor" strokeDasharray="8,8" />
                  <line x1="400" y1="250" x2="400" y2="400" stroke="currentColor" strokeDasharray="8,8" />
                </g>

                {/* Regions - Larger and more interactive */}
                {regions.map((region) => {
                  const isActive = currentRegion === region.id;
                  const isHovered = hoveredRegion === region.id;
                  
                  // Scale coordinates for larger map
                  const x = region.x * 4;
                  const y = region.y * 2.5;
                  
                  return (
                    <Link key={region.id} href={region.path}>
                      <g
                        onMouseEnter={() => setHoveredRegion(region.id)}
                        onMouseLeave={() => setHoveredRegion(null)}
                        className="cursor-pointer transition-all duration-300"
                        onClick={() => setIsExpanded(false)}
                      >
                        {region.shape === 'circle' ? (
                          <>
                            {/* Pulse effect for active region */}
                            {isActive && (
                              <circle
                                cx={x}
                                cy={y}
                                r="70"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="4"
                                className="text-burgundy animate-ping"
                                opacity="0.4"
                              />
                            )}
                            <circle
                              cx={x}
                              cy={y}
                              r="50"
                              fill="currentColor"
                              className={`transition-all ${
                                isActive 
                                  ? 'text-burgundy' 
                                  : isHovered 
                                  ? 'text-brass' 
                                  : 'text-gold/50'
                              }`}
                              opacity={isActive ? 1 : isHovered ? 0.9 : 0.6}
                            />
                            {isActive && (
                              <circle
                                cx={x}
                                cy={y}
                                r="20"
                                fill="currentColor"
                                className="text-parchment"
                              />
                            )}
                          </>
                        ) : (
                          <>
                            {/* Pulse effect for active region */}
                            {isActive && (
                              <rect
                                x={x - 70}
                                y={y - 40}
                                width="140"
                                height="80"
                                rx="8"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="4"
                                className="text-burgundy animate-ping"
                                opacity="0.4"
                              />
                            )}
                            <rect
                              x={x - 50}
                              y={y - 25}
                              width="100"
                              height="50"
                              rx="6"
                              fill="currentColor"
                              className={`transition-all ${
                                isActive 
                                  ? 'text-burgundy' 
                                  : isHovered 
                                  ? 'text-brass' 
                                  : 'text-gold/50'
                              }`}
                              opacity={isActive ? 1 : isHovered ? 0.9 : 0.6}
                            />
                            {isActive && (
                              <rect
                                x={x - 20}
                                y={y - 10}
                                width="40"
                                height="20"
                                rx="3"
                                fill="currentColor"
                                className="text-parchment"
                              />
                            )}
                          </>
                        )}
                        
                        {/* Region labels */}
                        <text
                          x={x}
                          y={y + 80}
                          textAnchor="middle"
                          className={`font-semibold transition-all ${
                            isActive || isHovered ? 'text-burgundy' : 'text-deep-brown'
                          }`}
                          fontSize="18"
                        >
                          {region.name}
                        </text>
                      </g>
                    </Link>
                  );
                })}
              </svg>

              {/* Legend */}
              <div className="mt-6 flex justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-burgundy rounded-full"></div>
                  <span className="text-deep-brown">Current Location</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-brass rounded-full opacity-60"></div>
                  <span className="text-deep-brown">Available Territory</span>
                </div>
              </div>

              {/* Current location info */}
              <div className="mt-6 text-center p-4 bg-burgundy/10 border border-gold/30 rounded-lg">
                <p className="text-burgundy font-semibold">You are currently in:</p>
                <p className="text-2xl font-bold text-deep-brown mt-1">
                  {regions.find(r => r.id === currentRegion)?.name || 'Central Plaza'}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

