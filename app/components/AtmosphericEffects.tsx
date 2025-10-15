'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

export default function AtmosphericEffects() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate floating particles
    const newParticles: Particle[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.3 + 0.1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-forest"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          initial={{ 
            opacity: 0,
            scale: 0,
            y: 0,
          }}
          animate={{
            opacity: [0, particle.opacity, 0],
            scale: [0, 1, 0],
            y: [-20, -100, -180],
            x: [0, Math.random() * 40 - 20, Math.random() * 80 - 40],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle light rays */}
      <motion.div
        className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      />
      
      <motion.div
        className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-brass/15 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      />

      {/* Gentle floating botanical elements */}
      <motion.div
        className="absolute top-1/4 left-8 w-16 h-16 opacity-20"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 64 64" fill="none">
          <path
            d="M 32 8 Q 20 16 24 32 Q 28 48 40 40 Q 44 24 32 8"
            fill="#2C4A2C"
            opacity="0.6"
          />
          <path
            d="M 32 8 Q 44 16 40 32 Q 36 48 24 40 Q 20 24 32 8"
            fill="#2C4A2C"
            opacity="0.4"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-12 w-12 h-12 opacity-15"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ 
          opacity: [0.08, 0.15, 0.08],
          rotate: [360, 0],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 48 48" fill="none">
          <path
            d="M 24 6 Q 18 12 20 24 Q 22 36 28 30 Q 26 18 24 6"
            fill="#B8860B"
            opacity="0.5"
          />
        </svg>
      </motion.div>

      {/* Subtle page curl effect in corners */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 3, delay: 2 }}
      >
        <svg viewBox="0 0 128 128" fill="none">
          <path
            d="M 128 0 Q 100 20 80 40 Q 60 60 40 80 Q 20 100 0 128"
            stroke="#6B2C2C"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-32 h-32 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 3, delay: 2.5 }}
      >
        <svg viewBox="0 0 128 128" fill="none">
          <path
            d="M 0 128 Q 28 108 48 88 Q 68 68 88 48 Q 108 28 128 0"
            stroke="#6B2C2C"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </motion.div>
    </div>
  );
}

