"use client";

import { useMemo, useState } from "react";
import { projects, type ProjectCategory } from "@/lib/content";
import ProjectCard from "./ProjectCard";
import { SearchIcon } from "./Icons";

const categories: Array<"All" | ProjectCategory> = ["All", "Research & policy", "Civic life", "Media", "Partnerships"];

export default function WorkExplorer() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");
  const visibleProjects = useMemo(() => {
    const term = query.trim().toLowerCase();
    return projects.filter((project) => {
      const inCategory = category === "All" || project.category === category;
      const inSearch = !term || `${project.title} ${project.summary} ${project.category}`.toLowerCase().includes(term);
      return inCategory && inSearch;
    });
  }, [category, query]);

  return (
    <div className="work-explorer">
      <div className="work-controls">
        <div className="filter-group" aria-label="Filter projects by category">
          {categories.map((item) => (
            <button key={item} type="button" className={category === item ? "selected" : ""} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>
          ))}
        </div>
        <label className="work-search"><SearchIcon width={17} height={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter by keyword" aria-label="Filter projects by keyword" /></label>
      </div>
      <div className="results-count" aria-live="polite">Showing {visibleProjects.length} of {projects.length} projects</div>
      {visibleProjects.length ? (
        <div className="project-list">
          {visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} index={projects.indexOf(project)} layout="list" />)}
        </div>
      ) : (
        <div className="empty-projects"><h2>No projects match those filters.</h2><p>Try a broader topic or clear your keyword.</p><button className="text-link" type="button" onClick={() => { setCategory("All"); setQuery(""); }}>Clear all filters</button></div>
      )}
    </div>
  );
}
