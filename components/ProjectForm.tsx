import { FormProps, STATUS_OPTIONS } from "../types/form";
import { HiPlus } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { projectSchema, ProjectSchemaType } from "../schemas/projectSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export function ProjectForm({ onSubmit }: FormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProjectSchemaType>({
    resolver: zodResolver(projectSchema),
  });

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-100 p-6 md:p-8">
      <h2 className="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
          <HiPlus className="w-5 h-5 text-white" />
        </div>
        Add New Project
      </h2>

      <form
        onSubmit={handleSubmit((data) => onSubmit(data, reset))}
        className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Project Title
            </label>
            <input
              {...register("title")}
              placeholder="Enter project title..."
              className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-200 bg-white/50 placeholder-stone-400"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-2">
                {errors.title.message}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Description
            </label>
            <textarea
              {...register("description")}
              placeholder="Describe your project..."
              rows={4}
              className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-200 bg-white/50 placeholder-stone-400 resize-none"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Status
            </label>
            <select
              {...register("status")}
              className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-200 bg-white/50">
              {STATUS_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.status && (
              <p className="text-red-500 text-sm">{errors.status.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Tech Stack
            </label>
            <input
              {...register("techStack")}
              placeholder="React, Node.js, MongoDB..."
              className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-200 bg-white/50 placeholder-stone-400"
            />
            {errors.techStack && (
              <p className="text-red-500 text-sm mt-2">
                {errors.techStack.message}
              </p>
            )}
          </div>
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
