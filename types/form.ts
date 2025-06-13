import { FieldError, UseFormRegister, UseFormReset } from "react-hook-form";
import { ProjectSchemaType } from "../schemas/projectSchema";

export const STATUS_OPTIONS = [
  { label: "Backlog", value: "Backlog" },
  { label: "In Progress", value: "In Progress" },
  { label: "Done", value: "Completed" },
];

export type FormProps = {
  onSubmit: (
    data: ProjectSchemaType,
    reset: UseFormReset<ProjectSchemaType>
  ) => void;
};

export type FormFieldProps = {
  label: string;
  name: keyof ProjectSchemaType;
  placeholder?: string;
  error?: FieldError;
  register: UseFormRegister<ProjectSchemaType>;
  type?: "input" | "textarea" | "select";
  options?: { label: string; value: string }[];
  rows?: number;
};
