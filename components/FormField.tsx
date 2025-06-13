import { FormFieldProps } from "../types/form";

export function FormField({
  label,
  name,
  placeholder,
  error,
  register,
  type = "input",
  options,
  rows = 4,
}: FormFieldProps) {
  const baseInputStyles =
    "w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-200 bg-white/50 placeholder-stone-400";

  return (
    <div>
      <label className="block text-sm font-semibold text-stone-700 mb-2">
        {label}
      </label>

      {type === "input" && (
        <input
          {...register(name)}
          placeholder={placeholder}
          className={baseInputStyles}
        />
      )}

      {type === "textarea" && (
        <textarea
          {...register(name)}
          placeholder={placeholder}
          rows={rows}
          className={`${baseInputStyles} resize-none`}
        />
      )}

      {type === "select" && options && (
        <select {...register(name)} className={baseInputStyles}>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}

      {error && <p className="text-red-500 text-sm mt-2">{error.message}</p>}
    </div>
  );
}
