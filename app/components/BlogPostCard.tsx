'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogPostCard({ post, index }: BlogPostCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative border-l-4 border-gold/50 hover:border-gold transition-colors duration-300 pl-8 py-6 pr-8"
    >
      {/* Botanical accent on left */}
      <div className="absolute -left-2 top-4 text-forest opacity-70">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M 8 2 Q 4 6 8 10 Q 12 6 8 2" />
        </svg>
      </div>
      
      {/* Right edge vine */}
      <div className="absolute -right-4 top-0 bottom-0 w-4 opacity-50 group-hover:opacity-70 transition-opacity">
        <svg viewBox="0 0 16 100" fill="none" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M 8 0 Q 4 50 8 100"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-forest"
          />
        </svg>
      </div>

      <Link href={`/blog/${post.slug}`}>
        <div className="space-y-3">
          {/* Date */}
          <time className="text-sm text-brass uppercase tracking-wider">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>

          {/* Title */}
          <h2 className="text-3xl font-semibold text-burgundy group-hover:text-brass transition-colors">
            {post.title}
          </h2>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-lg text-deep-brown leading-relaxed">
              {post.excerpt}
            </p>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-parchment-dark text-text-secondary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Read more indicator */}
          <div className="flex items-center gap-2 text-burgundy group-hover:text-brass transition-colors pt-2">
            <span className="text-sm font-medium">Read more</span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="transform group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

