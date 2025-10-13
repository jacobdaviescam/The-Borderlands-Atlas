import PageLayout from '@/app/components/PageLayout';
import ProjectCard from '@/app/components/ProjectCard';
import { getAllProjects } from '@/lib/projects';

export default function CodePage() {
  const projects = getAllProjects();

  return (
    <PageLayout 
      title="Code & Projects" 
      subtitle="Technical explorations and experiments"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))
        ) : (
          <div className="text-center py-16 text-text-secondary">
            <svg 
              width="64" 
              height="64" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
              className="mx-auto mb-6 text-brass"
            >
              <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <p className="text-xl">
              Projects are being catalogued. This will soon showcase code and technical work.
            </p>
          </div>
        )}
        
        {/* Instructions for adding projects */}
        <div className="mt-12 pt-8 border-t border-gold/20 text-center text-sm text-text-secondary">
          <p>Add projects by editing <code className="bg-parchment-dark px-2 py-1 rounded">lib/projects.ts</code></p>
        </div>
      </div>
    </PageLayout>
  );
}

