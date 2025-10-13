'use client';

import PageLayout from '@/app/components/PageLayout';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <PageLayout 
      title="The Cartographer" 
      subtitle="About this endeavor and its author"
    >
      <div className="prose prose-lg max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="space-y-6 text-deep-brown"
        >
          <p className="text-xl leading-relaxed">
            This space exists at the intersection—a cartographic journal for someone 
            perpetually stationed in the borderlands of knowledge.
          </p>

          <div className="border-l-2 border-gold/50 pl-6 my-8 italic text-text-secondary">
            <p>
              &ldquo;The edge of knowledge is where the most interesting work happens. 
              It&apos;s uncomfortable, uncertain, and utterly essential.&rdquo;
            </p>
          </div>

          <p className="leading-relaxed">
            I find myself drawn to the spaces between disciplines, between certainty and doubt, 
            between the ancient wisdom of classical literature and the cutting edge of modern technology. 
            My friends describe my fashion as &ldquo;desert lounge&rdquo;—and perhaps that aesthetic 
            extends to how I think as well.
          </p>

          <p className="leading-relaxed">
            Picture a study within a greenhouse: bookshelves spanning from Dostoevsky to deep learning, 
            ivy creeping over leather-bound volumes, an old map connecting disparate ideas, and a drinks 
            globe with carefully crafted cocktails nearby. This site captures that aesthetic—the scholar&apos;s 
            refuge where plants and books coexist, where a Negroni sits beside ancient philosophy.
          </p>

          <p className="leading-relaxed">
            Currently exploring: Russian literature, the art of cartography, sommelier craft, fashion design, 
            and building at the intersection of AI and human creativity.
          </p>

          <div className="pt-8 mt-12 border-t border-gold/30">
            <h2 className="text-2xl font-semibold text-burgundy mb-4">
              What You&apos;ll Find Here
            </h2>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-brass mt-1">•</span>
                <span><strong>Essays</strong> — Long-form explorations and fragments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brass mt-1">•</span>
                <span><strong>Mind Maps</strong> — Visual atlases of interconnected ideas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brass mt-1">•</span>
                <span><strong>Code & Projects</strong> — Technical experiments and creations</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}

