'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
  
  const getCurrentRegion = () => {
    const basePath = pathname.split('/')[1] || '';
    if (basePath === '') return 'home';
    return basePath;
  };
  
  const currentRegion = getCurrentRegion();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="fixed top-6 right-6 z-50 group"
    >
      {/* Container with subtle border */}
      <div className="relative bg-parchment/95 backdrop-blur-sm border-2 border-gold/30 rounded-lg p-4 shadow-lg">
        {/* Title */}
        <div className="text-xs uppercase tracking-widest text-brass font-semibold mb-3 text-center">
          The Borderlands
        </div>
        
        {/* SVG Map */}
        <svg 
          width="200" 
          height="200" 
          viewBox="0 0 200 200"
          className="overflow-visible"
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
              <Link key={region.id} href={region.path}>
                <g
                  onMouseEnter={() => setHoveredRegion(region.id)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  className="cursor-pointer transition-all duration-300"
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
  );
}

