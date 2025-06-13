export type Status = "Backlog" | "In Progress" | "Completed";

export type Project = {
  id: string;
  title: string;
  description: string;
  status: Status;
  techStack: string[];
  createdAt: string;
};

export const Methods = {
  GET: "GET",
  PUT: "PUT",
  DELETE: "DELETE",
  POST: "POST",
};

export type ProjectCardProps = {
  project: Project;
};

export type ProjectsGridProps = {
  projects: Project[];
};
