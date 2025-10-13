'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="prose prose-lg max-w-none
        prose-headings:font-semibold prose-headings:text-burgundy
        prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8
        prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8
        prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6
        prose-p:text-deep-brown prose-p:leading-relaxed prose-p:mb-4
        prose-a:text-brass prose-a:no-underline hover:prose-a:text-burgundy prose-a:transition-colors
        prose-strong:text-burgundy prose-strong:font-semibold
        prose-em:text-text-secondary prose-em:italic
        prose-blockquote:border-l-2 prose-blockquote:border-gold prose-blockquote:pl-6 
        prose-blockquote:italic prose-blockquote:text-text-secondary prose-blockquote:my-6
        prose-code:bg-parchment-dark prose-code:px-2 prose-code:py-1 prose-code:rounded 
        prose-code:text-burgundy prose-code:font-mono prose-code:text-base
        prose-pre:bg-parchment-dark prose-pre:border prose-pre:border-gold/20
        prose-ul:list-disc prose-ul:pl-6 prose-ul:my-4
        prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-4
        prose-li:text-deep-brown prose-li:mb-2
        prose-hr:border-gold/30 prose-hr:my-8
        prose-img:rounded-lg prose-img:shadow-lg"
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </motion.div>
  );
}

