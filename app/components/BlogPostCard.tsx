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
      className="group border-l-2 border-gold/30 hover:border-gold transition-colors duration-300 pl-6 py-4"
    >
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

