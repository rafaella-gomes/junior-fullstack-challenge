import { ProjectsGridProps } from "../types/project";
import { ProjectCard } from "./ProjectCard";

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
