'use client';

import PageLayout from '@/app/components/PageLayout';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <PageLayout 
      title="About Me"
    >
      <div className="prose prose-lg max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="space-y-6 text-deep-brown"
        >
          <p className="text-xl leading-relaxed">
            This is a space for thinking through ideas at the edges of what I understand - where 
            technical work meets broader questions about how technology shapes our world.
          </p>

          <div className="pt-8 mt-12 border-t border-gold/30">
            <h2 className="text-2xl font-semibold text-burgundy mb-4">
              My Work
            </h2>
            <p className="leading-relaxed">
              My background is in computational linguistics and AI evaluation. I studied how language 
              models generalise across domains at Cambridge, built evaluation frameworks for AI systems 
              at LinkedIn, and trained in technical AI safety (mechinterp, RL, evals) at ARENA. The 
              technical work taught me how to measure what AI systems can do. But it also made me curious 
              about what happens to human capability when AI handles increasingly complex cognitive work.
            </p>
            <p className="leading-relaxed mt-4">
              I work on AI evaluation and safety research, but I try to think about AI deployment broadly as I think AI risk will likely be subtle and gradual rather than sudden and obvious.
            </p>
            <p className="leading-relaxed mt-4">
              That means looking at the full landscape: technical safety work like evaluation frameworks 
              and interpretability methods. Economic questions about business models and how advertising 
              might distort training objectives. Developmental questions about how AI assistance affects 
              skill acquisition and when tools help versus replace capability. Structural questions about 
              regulatory approaches and how deployment patterns create winners and losers.
            </p>
          </div>

          <div className="pt-8 mt-12 border-t border-gold/30">
            <h2 className="text-2xl font-semibold text-burgundy mb-4">
              What You&apos;ll Find Here
            </h2>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-brass mt-1">•</span>
                <span><strong>Essays</strong> — Writing on AI, technology, and related ideas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brass mt-1">•</span>
                <span><strong>Mind Maps</strong> — Visual connections between concepts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brass mt-1">•</span>
                <span><strong>Code & Projects</strong> — Technical experiments and tools</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
