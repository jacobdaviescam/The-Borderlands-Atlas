'use client';

import { motion } from 'framer-motion';

export default function BotanicalDivider() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center gap-4 py-6"
    >
      {/* Left decorative element */}
      <div className="flex items-center gap-1">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold opacity-60"></div>
        <div className="w-2 h-2 rotate-45 border border-gold opacity-70"></div>
        <div className="w-12 h-px bg-gold opacity-60"></div>
      </div>
      
      {/* Center ornament - elegant geometric */}
      <motion.div
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          {/* Central circle */}
          <motion.circle
            cx="16"
            cy="16"
            r="3"
            fill="#C9A961"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          />
          
          {/* Decorative rings */}
          <motion.circle
            cx="16"
            cy="16"
            r="8"
            stroke="#C9A961"
            strokeWidth="1"
            opacity="0.7"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          />
          <motion.circle
            cx="16"
            cy="16"
            r="12"
            stroke="#B8860B"
            strokeWidth="0.5"
            opacity="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.0 }}
          />
          
          {/* Corner accents */}
          <motion.circle
            cx="16"
            cy="4"
            r="1"
            fill="#B8860B"
            opacity="0.6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 1.2 }}
          />
          <motion.circle
            cx="28"
            cy="16"
            r="1"
            fill="#B8860B"
            opacity="0.6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 1.3 }}
          />
          <motion.circle
            cx="16"
            cy="28"
            r="1"
            fill="#B8860B"
            opacity="0.6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 1.4 }}
          />
          <motion.circle
            cx="4"
            cy="16"
            r="1"
            fill="#B8860B"
            opacity="0.6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 1.5 }}
          />
        </svg>
      </motion.div>
      
      {/* Right decorative element */}
      <div className="flex items-center gap-1">
        <div className="w-12 h-px bg-gold opacity-60"></div>
        <div className="w-2 h-2 rotate-45 border border-gold opacity-70"></div>
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold opacity-60"></div>
      </div>
    </motion.div>
  );
}

