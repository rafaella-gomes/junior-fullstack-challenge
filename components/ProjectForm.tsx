import { FormProps, STATUS_OPTIONS } from "../types/form";
import { HiPlus } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { projectSchema, ProjectSchemaType } from "../schemas/projectSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "./FormField";

export function ProjectForm({ onSubmit }: FormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProjectSchemaType>({
    resolver: zodResolver(projectSchema),
  });

  const handleFormSubmit = (data: ProjectSchemaType) => {
    onSubmit(data, reset);
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-100 p-6 md:p-8">
      <h2 className="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
          <HiPlus className="w-5 h-5 text-white" />
        </div>
        Add New Project
      </h2>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="md:col-span-2">
            <FormField
              label="Project Title"
              name="title"
              placeholder="Enter project title..."
              register={register}
              error={errors.title}
            />
          </div>

          <div className="md:col-span-2">
            <FormField
              label="Description"
              name="description"
              placeholder="Describe your project..."
              type="textarea"
              rows={4}
              register={register}
              error={errors.description}
            />
          </div>

          <FormField
            label="Status"
            name="status"
            type="select"
            options={STATUS_OPTIONS}
            register={register}
            error={errors.status}
          />

          <FormField
            label="Tech Stack"
            name="techStack"
            placeholder="React, Node.js, MongoDB..."
            register={register}
            error={errors.techStack}
          />
        </div>

        <button
          type="submit"
          className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 focus:ring-4 focus:ring-orange-200 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer">
          Add Project
        </button>
      </form>
    </div>
  );
}
