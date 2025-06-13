import { useEffect, useState } from "react";
import { ProjectSchemaType } from "../schemas/projectSchema";
import { Project } from "../types/project";
import { UseFormReset } from "react-hook-form";

export function useProject() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then(setProjects);
  }, []);

  const handleSubmit = async (
    data: ProjectSchemaType,
    reset: UseFormReset<ProjectSchemaType>
  ) => {
    const res = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        techStack: data.techStack.split(",").map((s) => s.trim()),
      }),
    });

    if (res.ok) {
      const newProject = await res.json();
      setProjects((prev) => [...prev, newProject]);
      reset({
        title: "",
        description: "",
        techStack: "",
        status: "Backlog",
      });
    }
  };

  return {
    projects,
    handleSubmit,
  };
}
