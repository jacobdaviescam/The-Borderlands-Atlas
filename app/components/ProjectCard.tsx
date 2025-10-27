'use client';

import { motion } from 'framer-motion';
import { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const statusColors = {
    active: 'bg-forest/20 text-forest border-forest/30',
    completed: 'bg-brass/20 text-brass border-brass/30',
    archived: 'bg-text-secondary/20 text-text-secondary border-text-secondary/30',
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group border-2 border-burgundy/20 hover:border-burgundy/40 transition-all duration-300 p-6 rounded-lg bg-cream/30"
    >
      <div className="space-y-4">
        {/* Header with title and status */}
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-2xl font-semibold text-burgundy group-hover:text-brass transition-colors flex-1">
            {project.title}
          </h2>
          <span className={`text-xs px-3 py-1 border rounded-full capitalize ${statusColors[project.status]}`}>
            {project.status}
          </span>
        </div>

        {/* Meta information: year and role */}
        {(project.year || project.role) && (
          <div className="flex gap-4 text-sm text-text-secondary">
            {project.year && (
              <span className="text-brass">{project.year}</span>
            )}
            {project.role && (
              <span>{project.role}</span>
            )}
          </div>
        )}

        {/* Description */}
        <p className="text-lg text-deep-brown leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="list-disc list-inside space-y-1 text-deep-brown ml-2">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="text-sm">{highlight}</li>
            ))}
          </ul>
        )}

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-parchment-dark text-text-secondary rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        {(project.github || project.link) && (
          <div className="flex gap-4 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-burgundy hover:text-brass transition-colors text-sm font-medium"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-burgundy hover:text-brass transition-colors text-sm font-medium"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
                <span>Visit</span>
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

