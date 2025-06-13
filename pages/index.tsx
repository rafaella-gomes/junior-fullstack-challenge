import { EmptyProjectState } from "../components/EmptyProjectState";
import { HomeHeader } from "../components/HomeHeader";
import { ProjectForm } from "../components/ProjectForm";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { useProject } from "../hooks/useProject";

export default function Home() {
  const { projects, handleSubmit } = useProject();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="max-w-4xl mx-auto">
          <HomeHeader />

          <div className="mb-8 lg:mb-12">
            <ProjectForm onSubmit={handleSubmit} />
          </div>

          <div className="grid gap-6 md:gap-8">
            {projects.length === 0 ? (
              <EmptyProjectState />
            ) : (
              <ProjectsGrid projects={projects} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
