'use client';

import PageLayout from '@/app/components/PageLayout';
import { motion } from 'framer-motion';
import { getPortfolioData } from '@/lib/portfolio';
import { Education, Experience, Skill } from '@/lib/portfolio';

export default function AboutPage() {
  const portfolioData = getPortfolioData();
  
  return (
    <PageLayout 
      title="The Cartographer" 
      subtitle="About this endeavor and its author"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Personal Introduction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6 text-deep-brown"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-semibold text-burgundy">
              {portfolioData.personal.name}
            </h1>
            <p className="text-xl text-text-secondary italic">
              {portfolioData.personal.title}
            </p>
          </div>

          <p className="text-lg leading-relaxed">
            {portfolioData.personal.bio}
          </p>

          <div className="border-l-2 border-gold/50 pl-6 my-8 italic text-text-secondary">
            <p>
              &ldquo;The edge of knowledge is where the most interesting work happens. 
              It&apos;s uncomfortable, uncertain, and utterly essential.&rdquo;
            </p>
          </div>

          <p className="leading-relaxed">
            Picture a study within a greenhouse: bookshelves spanning from Dostoevsky to deep learning, 
            ivy creeping over leather-bound volumes, an old map connecting disparate ideas, and a drinks 
            globe with carefully crafted cocktails nearby. This site aims to capture that aesthetic. It is the scholar&apos;s 
            refuge where plants and books coexist, where a Negroni sits beside ancient philosophy.
          </p>
        </motion.div>

        {/* Education Section */}
        {portfolioData.education.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="border-t border-gold/30 pt-8"
          >
            <h2 className="text-2xl font-semibold text-burgundy mb-6">
              Education
            </h2>
            <div className="space-y-6">
              {portfolioData.education.map((edu, index) => (
                <EducationEntry key={index} education={edu} />
              ))}
            </div>
          </motion.section>
        )}

        {/* Experience Section */}
        {portfolioData.experience.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="border-t border-gold/30 pt-8"
          >
            <h2 className="text-2xl font-semibold text-burgundy mb-6">
              Experience
            </h2>
            <div className="space-y-8">
              {portfolioData.experience.map((exp, index) => (
                <ExperienceEntry key={index} experience={exp} />
              ))}
            </div>
          </motion.section>
        )}

        {/* Skills Section */}
        {portfolioData.skills.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="border-t border-gold/30 pt-8"
          >
            <h2 className="text-2xl font-semibold text-burgundy mb-6">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioData.skills.map((skill, index) => (
                <SkillSection key={index} skill={skill} />
              ))}
            </div>
          </motion.section>
        )}

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="border-t border-gold/30 pt-8"
        >
          <h2 className="text-2xl font-semibold text-burgundy mb-6">
            Connect
          </h2>
          <div className="flex flex-wrap gap-4">
            {portfolioData.contact.email && (
              <ContactLink href={`mailto:${portfolioData.contact.email}`} label="Email" />
            )}
            {portfolioData.contact.github && (
              <ContactLink href={portfolioData.contact.github} label="GitHub" />
            )}
            {portfolioData.contact.linkedin && (
              <ContactLink href={portfolioData.contact.linkedin} label="LinkedIn" />
            )}
            {portfolioData.contact.website && (
              <ContactLink href={portfolioData.contact.website} label="Website" />
            )}
            {portfolioData.contact.location && (
              <span className="text-text-secondary">{portfolioData.contact.location}</span>
            )}
          </div>
        </motion.section>

        {/* What You'll Find Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="border-t border-gold/30 pt-8"
        >
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
        </motion.div>
      </div>
    </PageLayout>
  );
}

function EducationEntry({ education }: { education: Education }) {
  return (
    <div className="border-l-2 border-burgundy/20 pl-6 space-y-2">
      <h3 className="text-xl font-medium text-burgundy">
        {education.degree} in {education.field}
      </h3>
      <p className="text-text-secondary">
        {education.institution}, {education.location}
      </p>
      <p className="text-brass">{education.year}</p>
      {education.description && (
        <p className="text-deep-brown leading-relaxed">{education.description}</p>
      )}
      {education.achievements && education.achievements.length > 0 && (
        <ul className="list-disc list-inside text-deep-brown space-y-1 ml-4">
          {education.achievements.map((achievement, idx) => (
            <li key={idx}>{achievement}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <div className="space-y-4">
      <div className="border-l-2 border-burgundy/20 pl-6 space-y-2">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-medium text-burgundy">{experience.title}</h3>
            <p className="text-lg text-text-secondary">{experience.company}</p>
          </div>
          <div className="text-right">
            <p className="text-brass">{experience.period}</p>
            <p className="text-sm text-text-secondary">{experience.location}</p>
          </div>
        </div>
      </div>
      
      <p className="text-deep-brown leading-relaxed ml-8">{experience.description}</p>
      
      {experience.achievements && experience.achievements.length > 0 && (
        <ul className="list-disc list-inside text-deep-brown space-y-2 ml-8">
          {experience.achievements.map((achievement, idx) => (
            <li key={idx}>{achievement}</li>
          ))}
        </ul>
      )}
      
      {experience.technologies && experience.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 ml-8">
          {experience.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 bg-parchment-dark text-text-secondary rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function SkillSection({ skill }: { skill: Skill }) {
  return (
    <div className="border border-burgundy/20 rounded-lg p-6 bg-cream/30">
      <h3 className="text-lg font-semibold text-burgundy mb-3">{skill.category}</h3>
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item, idx) => (
          <span
            key={idx}
            className="text-sm px-3 py-1 bg-parchment-dark text-text-secondary rounded"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ContactLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 border border-burgundy/30 hover:border-burgundy text-burgundy hover:text-brass transition-all duration-300"
    >
      {label}
    </a>
  );
}

