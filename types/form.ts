import { UseFormReset } from "react-hook-form";
import { ProjectSchemaType } from "../schemas/projectSchema";

export const STATUS_OPTIONS = [
  { label: "Backlog", value: "Backlog" },
  { label: "In Progress", value: "In Progress" },
  { label: "Done", value: "Completed" },
] as const;

export type FormProps = {
  onSubmit: (
    data: ProjectSchemaType,
    reset: UseFormReset<ProjectSchemaType>
  ) => void;
};
