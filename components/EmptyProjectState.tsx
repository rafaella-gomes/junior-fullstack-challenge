import { HiFolderAdd } from "react-icons/hi";

export function EmptyProjectState() {
  return (
    <div className="text-center py-12">
      <div className="w-24 h-24 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
        <HiFolderAdd className="w-12 h-12 text-orange-500" />
      </div>
      <h3 className="text-xl font-semibold text-stone-700 mb-2">
        No projects yet
      </h3>
      <p className="text-stone-500">Add your first project to get started!</p>
    </div>
  );
}
