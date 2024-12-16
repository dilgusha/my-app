import { FeatureHighlights } from "../components/feature-highlights";
import { ProjectFilters } from "../components/project-filters";
import { ProjectGrid } from "../components/project-grid";
import { ProjectHero } from "../components/project-hero";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <ProjectHero />
      <div className="container mx-auto px-4 py-8">
        <ProjectFilters />
        <ProjectGrid />
        <FeatureHighlights />
      </div>
    </div>
  )
}

