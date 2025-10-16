'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';
import { Components } from 'react-markdown';
import MermaidDiagram from './MermaidDiagram';

interface CodeProps {
  inline?: boolean;
  children?: React.ReactNode;
  className?: string;
}

interface MarkdownWithMermaidProps {
  content: string;
}

export default function MarkdownWithMermaid({ content }: MarkdownWithMermaidProps) {
  const components: Components = {
    h1: ({ children }) => (
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-burgundy mb-6 text-center"
      >
        {children}
      </motion.h1>
    ),
    h2: ({ children }) => (
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-2xl font-semibold text-forest mb-4 mt-8"
      >
        {children}
      </motion.h2>
    ),
    h3: ({ children }) => (
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl font-medium text-deep-brown mb-3 mt-6"
      >
        {children}
      </motion.h3>
    ),
    p: ({ children }) => (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-lg text-deep-brown leading-relaxed mb-4"
      >
        {children}
      </motion.p>
    ),
    ul: ({ children }) => (
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="list-disc list-inside space-y-2 mb-6 text-lg text-deep-brown"
      >
        {children}
      </motion.ul>
    ),
    ol: ({ children }) => (
      <motion.ol
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="list-decimal list-inside space-y-2 mb-6 text-lg text-deep-brown"
      >
        {children}
      </motion.ol>
    ),
    li: ({ children }) => (
      <li className="text-lg text-deep-brown">
        {children}
      </li>
    ),
    code: ({ inline, children, className }: CodeProps) => {
      const isMermaid = className?.includes('language-mermaid');
      
      if (isMermaid && !inline) {
        return <MermaidDiagram content={children as string} />;
      }
      
      return inline ? (
        <code className="bg-parchment-dark px-2 py-1 rounded text-burgundy font-mono text-base">
          {children}
        </code>
      ) : (
        <code className="block bg-parchment-dark p-4 rounded border border-gold/20 text-burgundy font-mono text-sm overflow-x-auto my-4">
          {children}
        </code>
      );
    },
    hr: () => (
      <hr className="border-t border-gold/30 my-8" />
    ),
  };

  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        components={components}
        remarkPlugins={[remarkGfm]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
