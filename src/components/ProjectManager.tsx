
"use client";

import { useEffect, useRef, useState } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  created_at: string;
};

type ProjectResponse = {
  success: boolean;
  message?: string;
  projects?: Project[];
  project?: Project;
};

const emptyForm = {
  title: "",
  description: "",
};

export default function ProjectManager() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<number | null>(
    null
  );

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(
    null
  );

  const [formOpen, setFormOpen] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const titleInputRef = useRef<HTMLInputElement>(null);

  // Load projects from the database on page load
  useEffect(() => {
    const controller = new AbortController();

    async function loadProjects() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/projects", {
          method: "GET",
          cache: "no-store",
          signal: controller.signal,
        });

        const data: ProjectResponse = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(
            data.message || "Unable to load projects."
          );
        }

        if (!controller.signal.aborted) {
          setProjects(data.projects || []);
        }
      } catch (error) {
        if (controller.signal.aborted) return;

        setError(
          error instanceof Error
            ? error.message
            : "Failed to load projects."
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadProjects();

    return () => controller.abort();
  }, []);

  // Focus title field when the form opens
  useEffect(() => {
    if (formOpen) {
      titleInputRef.current?.focus();
    }
  }, [formOpen, editingId]);

  function openAddForm() {
    setForm(emptyForm);
    setEditingId(null);
    setMessage("");
    setError("");
    setFormOpen(true);
  }

  function openEditForm(project: Project) {
    setEditingId(project.id);
    setForm({
      title: project.title,
      description: project.description,
    });

    setMessage("");
    setError("");
    setFormOpen(true);

    document
      .getElementById("project-form")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  }

  function closeForm() {
    if (saving) return;

    setForm(emptyForm);
    setEditingId(null);
    setFormOpen(false);
    setError("");
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const title = form.title.trim();
    const description = form.description.trim();

    if (!title || !description) {
      setError("Please enter a title and description.");
      return;
    }

    const isEditing = editingId !== null;

    const endpoint = isEditing
      ? `/api/projects/${editingId}`
      : "/api/projects";

    try {
      setSaving(true);
      setError("");
      setMessage("");

      const response = await fetch(endpoint, {
        method: isEditing ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      const data: ProjectResponse = await response.json();

      if (!response.ok || !data.success || !data.project) {
        throw new Error(
          data.message || "Unable to save project."
        );
      }

      const savedProject = data.project;

      if (isEditing) {
        setProjects((current) =>
          current.map((project) =>
            project.id === savedProject.id
              ? savedProject
              : project
          )
        );
      } else {
        setProjects((current) => [
          savedProject,
          ...current,
        ]);
      }

      setMessage(
        isEditing
          ? "Project updated successfully."
          : "New project added successfully."
      );

      setForm(emptyForm);
      setEditingId(null);
      setFormOpen(false);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(project: Project) {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${project.title}"?\n\nThis action cannot be undone.`
    );

    if (!confirmed) return;

    try {
      setDeletingId(project.id);
      setError("");
      setMessage("");

      const response = await fetch(
        `/api/projects/${project.id}`,
        {
          method: "DELETE",
        }
      );

      const data: ProjectResponse = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Unable to delete project."
        );
      }

      setProjects((current) =>
        current.filter(
          (item) => item.id !== project.id
        )
      );

      if (editingId === project.id) {
        setEditingId(null);
        setFormOpen(false);
        setForm(emptyForm);
      }

      setMessage("Project deleted successfully.");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to delete project."
      );
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="space-y-8">
      {/* Heading and Add Button */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7155ee]">
            DATABASE-POWERED PORTFOLIO
          </p>

          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#152039]">
            Project Collection
          </h3>

          <p className="mt-2 text-sm text-[#657087]">
            Add, update and manage your work.
          </p>
        </div>

        <button
          type="button"
          onClick={formOpen ? closeForm : openAddForm}
          disabled={saving}
          aria-expanded={formOpen}
          aria-controls="project-form"
          className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#7155ee] px-7 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#5940d1] hover:shadow-lg hover:shadow-violet-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span aria-hidden="true">
            {formOpen ? "✕" : "+"}
          </span>
          {formOpen ? "Close Form" : "Add New Project"}
        </button>
      </div>

      {/* Status Messages */}
      <div aria-live="polite" aria-atomic="true">
        {message && (
          <div
            role="status"
            className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-semibold text-emerald-800"
          >
            ✓ {message}
          </div>
        )}
      </div>

      {error && (
        <div
          role="alert"
          className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-semibold text-red-700"
        >
          {error}
        </div>
      )}

      {/* Add / Edit Project Form */}
      {formOpen && (
        <div
          id="project-form"
          className="rounded-[28px] border border-[#ddd5ff] bg-[#f3f0ff] p-6 shadow-sm sm:p-9"
        >
          <div className="mb-7">
            <span className="text-xs font-bold tracking-wider text-[#7155ee]">
              {editingId === null
                ? "CREATE PROJECT"
                : "UPDATE PROJECT"}
            </span>

            <h4 className="mt-3 text-2xl font-semibold tracking-tight text-[#1b2541]">
              {editingId === null
                ? "Add something new."
                : "Edit project details."}
            </h4>

            <p className="mt-2 text-sm text-[#68748a]">
              Changes are saved directly to NeonDB.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="project-title"
                className="mb-2 block text-sm font-bold text-[#26314c]"
              >
                Project Title *
              </label>

              <input
                ref={titleInputRef}
                id="project-title"
                name="title"
                type="text"
                required
                maxLength={200}
                value={form.title}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    title: event.target.value,
                  }))
                }
                placeholder="e.g. AI-Powered Resume Builder"
                className="min-h-14 w-full rounded-xl border border-[#e3dff1] bg-white px-4 text-sm text-[#1b2541] outline-none transition focus:border-[#7155ee] focus:ring-4 focus:ring-violet-100"
              />
            </div>

            <div>
              <label
                htmlFor="project-description"
                className="mb-2 block text-sm font-bold text-[#26314c]"
              >
                Project Description *
              </label>

              <textarea
                id="project-description"
                name="description"
                required
                rows={5}
                maxLength={3000}
                value={form.description}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    description: event.target.value,
                  }))
                }
                placeholder="Describe the project, technologies used and what it does..."
                className="w-full resize-y rounded-xl border border-[#e3dff1] bg-white px-4 py-4 text-sm leading-7 text-[#1b2541] outline-none transition focus:border-[#7155ee] focus:ring-4 focus:ring-violet-100"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={saving}
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#7155ee] px-7 text-sm font-bold text-white transition hover:bg-[#5940d1] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving
                  ? "Saving..."
                  : editingId === null
                  ? "Save Project"
                  : "Update Project"}
              </button>

              <button
                type="button"
                onClick={closeForm}
                disabled={saving}
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#d8d0ef] bg-white px-7 text-sm font-bold text-[#5c4b9e] transition hover:bg-[#e8e1ff] disabled:opacity-60"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div
          role="status"
          className="rounded-[28px] border border-[#eae7f1] bg-white px-6 py-16 text-center"
        >
          <div
            aria-hidden="true"
            className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#e7e0ff] border-t-[#7155ee]"
          />

          <p className="mt-5 text-sm font-semibold text-[#66718a]">
            Loading projects from NeonDB...
          </p>
        </div>
      )}

      {/* Empty State */}
      {!loading && projects.length === 0 && (
        <div className="rounded-[28px] border border-dashed border-[#d8d0ef] bg-white px-6 py-16 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eee9ff] text-3xl text-[#7155ee]">
            ◈
          </div>

          <h4 className="mt-5 text-xl font-semibold text-[#1b2541]">
            No projects to display.
          </h4>

          <p className="mt-3 text-sm text-[#68748a]">
            Add your first project using the button above.
          </p>
        </div>
      )}

      {/* Dynamic Project Cards */}
      {!loading && projects.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const isViolet = index % 2 === 0;

            return (
              <article
                key={project.id}
                className="premium-hover group flex flex-col overflow-hidden rounded-[28px] border border-[#eceaf1] bg-white shadow-sm"
              >
                {/* Decorative Project Visual */}
                <div
                  className={`relative flex h-48 items-center justify-center overflow-hidden ${
                    isViolet
                      ? "bg-[#eeebff]"
                      : "bg-[#e6f8ef]"
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className={`absolute h-44 w-44 rounded-full border ${
                      isViolet
                        ? "border-violet-300"
                        : "border-emerald-300"
                    }`}
                  />

                  <div
                    aria-hidden="true"
                    className={`absolute h-32 w-32 rounded-full border border-dashed ${
                      isViolet
                        ? "border-violet-300"
                        : "border-emerald-300"
                    }`}
                  />

                  <div
                    aria-hidden="true"
                    className={`relative flex h-24 w-24 items-center justify-center rounded-[28px] bg-white text-5xl shadow-xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-6 ${
                      isViolet
                        ? "text-[#7155ee]"
                        : "text-[#149b76]"
                    }`}
                  >
                    {isViolet ? "✳" : "◈"}
                  </div>

                  <span className="absolute left-5 top-5 rounded-lg bg-white/90 px-3 py-2 font-mono text-[10px] font-bold text-[#68748a]">
                    PROJECT #{project.id}
                  </span>
                </div>

                {/* Project Content */}
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-[10px] font-bold tracking-[0.12em] text-[#7155ee]">
                    PORTFOLIO PROJECT
                  </p>

                  <h4 className="mt-4 break-words text-xl font-semibold leading-snug tracking-tight text-[#1b2541]">
                    {project.title}
                  </h4>

                  <p className="mt-4 flex-1 whitespace-pre-wrap break-words text-sm leading-7 text-[#68748a]">
                    {project.description}
                  </p>

                  <div className="mt-7 border-t border-[#efedf3] pt-5">
                    <div className="flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => openEditForm(project)}
                        disabled={
                          saving || deletingId !== null
                        }
                        className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-[#f0ebff] px-4 text-xs font-bold text-[#6144cd] transition hover:bg-[#e2d9ff] disabled:opacity-50"
                      >
                        <span aria-hidden="true">✎</span>
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(project)}
                        disabled={
                          saving || deletingId !== null
                        }
                        className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-red-100 bg-red-50 px-4 text-xs font-bold text-red-700 transition hover:bg-red-100 disabled:opacity-50"
                      >
                        <span aria-hidden="true">×</span>
                        {deletingId === project.id
                          ? "Deleting..."
                          : "Delete"}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {!loading && (
        <p className="text-center font-mono text-xs text-[#8a90a3]">
          {projects.length}{" "}
          {projects.length === 1 ? "project" : "projects"}{" "}
          stored in NeonDB
        </p>
      )}
    </div>
  );
}
