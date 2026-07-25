import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const Projects = () => {
  return (
    <section className="container py-20">
      <h1 className="text-3xl font-bold mb-10">Projects</h1>

      <div className="flex flex-col">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
};
