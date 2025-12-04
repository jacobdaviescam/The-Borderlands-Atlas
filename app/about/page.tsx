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
              My background is in NLP and ML. I studied how language 
              models generalise across domains at the Univeristy of Cambridge(BA) and the University of Edinburgh (MSc), built evaluation frameworks for AI systems 
              at LinkedIn, and trained in technical AI safety (mechinterp, RL, evals) at ARENA. I have followed the trajectory of AI capabilities in research and industry and know that safety infrastructure isn't keeping pace.  
            </p>
            <p className="leading-relaxed mt-4">
              I work on AI evaluation and safety research, but I try to think about AI deployment broadly as I think AI risk is just as likely to be subtle and gradual as sudden and obvious.
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

          <div className="pt-8 mt-12 border-t border-gold/30">
            <h2 className="text-2xl font-semibold text-burgundy mb-4">
              Connect
            </h2>
            <p className="leading-relaxed mb-4">
              Feel free to reach out or connect with me:
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/jacob-davies-5199b419b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-burgundy hover:text-brass transition-colors text-lg font-medium group"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  className="group-hover:scale-110 transition-transform"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
