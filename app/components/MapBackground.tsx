'use client';

import { usePathname } from 'next/navigation';

interface MapPosition {
  x: string;
  y: string;
  scale: number;
}

const MAP_POSITIONS: Record<string, MapPosition> = {
  // Homepage - Full map view, centered on Central Plaza
  '/': {
    x: '50%',
    y: '50%',
    scale: 1
  },
  // Blog - Library Quarter (West)
  '/blog': {
    x: '15%',
    y: '55%',
    scale: 1.8
  },
  // Atlas - Cartography District (North)
  '/atlas': {
    x: '50%',
    y: '20%',
    scale: 2
  },
  // Code - The Workshop (East)
  '/code': {
    x: '80%',
    y: '50%',
    scale: 1.8
  },
  // About - The Study (South)
  '/about': {
    x: '50%',
    y: '80%',
    scale: 2
  }
};

export default function MapBackground() {
  const pathname = usePathname();
  
  // Get the base path (e.g., /blog/slug -> /blog)
  const basePath = pathname.split('/').slice(0, 2).join('/') || '/';
  
  // Get position for current page, default to homepage
  const position = MAP_POSITIONS[basePath] || MAP_POSITIONS['/'];
  
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen pointer-events-none"
      style={{
        backgroundImage: 'url(/borderlands-map.svg)',
        backgroundSize: `${position.scale * 100}%`,
        backgroundPosition: `${position.x} ${position.y}`,
        backgroundRepeat: 'no-repeat',
        opacity: 0.8,
        transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 0
      }}
    />
  );
}

