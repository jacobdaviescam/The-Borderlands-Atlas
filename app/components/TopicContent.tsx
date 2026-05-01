'use client';

import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';
import React from 'react';

const CONFIDENCE_RE = /~\s*(?:\d{1,3}|XX|\?\?)\s*%/g;

function decorateText(text: string, keyPrefix: string): React.ReactNode {
  CONFIDENCE_RE.lastIndex = 0;
  if (!CONFIDENCE_RE.test(text)) return text;

  CONFIDENCE_RE.lastIndex = 0;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = CONFIDENCE_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <span
        key={`${keyPrefix}-c${i++}`}
        className="inline-block px-2 py-0.5 mx-1 text-xs font-medium text-brass border border-brass/40 align-middle whitespace-nowrap"
      >
        {match[0].replace(/\s+/g, '')}
      </span>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return <>{parts}</>;
}

function decorateChildren(children: React.ReactNode, keyPrefix: string): React.ReactNode {
  return React.Children.map(children, (child, idx) => {
    if (typeof child === 'string') {
      return decorateText(child, `${keyPrefix}-${idx}`);
    }
    return child;
  });
}

interface TopicContentProps {
  content: string;
}

export default function TopicContent({ content }: TopicContentProps) {
  const components: Components = {
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-burgundy mt-12 mb-5 pb-2 border-b border-gold/40 uppercase tracking-wider text-base">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-burgundy mb-3 mt-6">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-lg text-deep-brown leading-relaxed mb-5">
        {decorateChildren(children, 'p')}
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
      <strong className="text-burgundy font-semibold">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="text-text-secondary italic">{children}</em>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gold pl-6 italic text-text-secondary my-6">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 my-4 space-y-3 marker:text-brass">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 my-4 space-y-3 marker:text-brass">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="text-lg text-deep-brown leading-relaxed pl-1">
        {decorateChildren(children, 'li')}
      </li>
    ),
    hr: () => <hr className="border-t border-gold/30 my-8" />,
    code: ({ children }) => (
      <code className="bg-parchment-dark px-2 py-0.5 rounded text-burgundy font-mono text-sm">
        {children}
      </code>
    ),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </motion.div>
  );
}
