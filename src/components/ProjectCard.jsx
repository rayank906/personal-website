import { Github } from "lucide-react";
import { TagChip } from "./TagChip";

export const ProjectCard = ({ project }) => {
  return (
    <div className="py-6 border-b border-border last:border-b-0">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold">{project.title}</h2>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="text-muted hover:text-accent transition-colors"
          >
            <Github size={18} />
          </a>
        )}
      </div>
      <p className="text-foreground/90 mt-1 mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <TagChip key={tag}>{tag}</TagChip>
        ))}
      </div>
    </div>
  );
};
