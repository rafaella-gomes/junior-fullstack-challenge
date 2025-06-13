import { z } from "zod";

export const projectSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  status: z.enum(["Backlog", "In Progress", "Completed"]),
  techStack: z.string().min(1, "Please provide at least one technology"),
});

export type ProjectSchemaType = z.infer<typeof projectSchema>;
