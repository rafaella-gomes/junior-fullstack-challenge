import { STATUS_OPTIONS } from "../types/form";
import { ProjectCardProps } from "../types/project";

const statusColors = {
  Backlog: "bg-yellow-100 text-yellow-800 border-yellow-200",
  "In Progress": "bg-orange-100 text-orange-800 border-orange-200",
  Completed: "bg-green-100 text-green-800 border-green-200",
};

const getStatusLabel = (value: string) =>
  STATUS_OPTIONS.find((opt) => opt.value === value)?.label || value;

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-stone-800 group-hover:text-orange-600 transition-colors">
          {project.title}
        </h3>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold border ${
            statusColors[project.status as keyof typeof statusColors] ||
            statusColors.Backlog
          }`}>
          {getStatusLabel(project.status)}
        </span>
      </div>

      <p className="text-stone-600 mb-4 leading-relaxed">
        {project.description}
      </p>

      {project.techStack && project.techStack.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 text-sm font-medium rounded-lg border border-amber-200">
              {tech.trim()}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
