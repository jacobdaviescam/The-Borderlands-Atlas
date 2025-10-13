'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';
import { Components } from 'react-markdown';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  const components: Components = {
    h1: ({ children }) => (
      <h1 className="text-4xl font-semibold text-burgundy mb-6 mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold text-burgundy mb-4 mt-8">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-burgundy mb-3 mt-6">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold text-burgundy mb-2 mt-4">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-lg text-deep-brown leading-relaxed mb-6">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-brass no-underline hover:text-burgundy transition-colors border-b border-brass/30 hover:border-burgundy"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="text-burgundy font-semibold">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="text-text-secondary italic">
        {children}
      </em>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gold pl-6 italic text-text-secondary my-6">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 my-4 space-y-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 my-4 space-y-2">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-lg text-deep-brown">
        {children}
      </li>
    ),
    code: ({ inline, children }) => (
      inline ? (
        <code className="bg-parchment-dark px-2 py-1 rounded text-burgundy font-mono text-base">
          {children}
        </code>
      ) : (
        <code className="block bg-parchment-dark p-4 rounded border border-gold/20 text-burgundy font-mono text-sm overflow-x-auto my-4">
          {children}
        </code>
      )
    ),
    hr: () => (
      <hr className="border-t border-gold/30 my-8" />
    ),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="markdown-content"
    >
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </motion.div>
  );
}

