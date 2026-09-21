import React from "react";

import Link from "next/link";

import { getProjectDetails } from "@/lib/actions/project";
import { ArrowLeft, BookOpen, CalendarDays, CheckCircle2, Clock3, Code2, ExternalLink, Layers3, Lightbulb, Target, Trophy } from "lucide-react";
import { GiThumbDown, GiThunderBlade } from "react-icons/gi";

const ProjectDetails = async ({ params }) => {
  const { id } = await params;

  const project = await getProjectDetails(id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#080808] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500">
            Project Not Found
          </h1>
          <Link
            href="/projects"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#DC2F02] px-4 py-2 text-sm"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const technologies = project.technology
    ? project.technology.split(" ")
    : [];

  return (
    <main className="min-h-screen bg-[#050505] px-3 py-3 text-white sm:px-5">
      <div className="mx-auto max-w-7xl">

        {/* Top Bar */}
        <div className="mb-3 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <Link
              href="/projects"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:border-[#DC2F02] hover:bg-[#DC2F02]/10"
            >
              <ArrowLeft size={16} />
            </Link>

            <div>
              <p className="text-[9px] uppercase tracking-[3px] text-gray-500">
                Project Details
              </p>

              <h1 className="text-lg font-bold leading-none text-white">
                {project.title}
              </h1>
            </div>
          </div>

          <div
            className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-semibold ${project.status === "Completed"
                ? "border-green-500/30 bg-green-500/10 text-green-400"
                : "border-yellow-500/30 bg-yellow-500/10 text-yellow-400"
              }`}
          >
            <CheckCircle2 size={12} />
            {project.status}
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT */}
          <section className="space-y-3">

            {/* Image */}
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
              <img
                src={project.image}
                alt={project.title}
                className="h-[230px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="mb-1 text-[9px] uppercase tracking-[2px] text-[#DC2F02]">
                      Category
                    </p>
                    <p className="text-sm font-semibold">
                      {project.category}
                    </p>
                  </div>

                  <span className="rounded-md border border-white/10 bg-black/60 px-2 py-1 text-[10px]">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>

            {/* Project Meta */}
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <CalendarDays
                  size={15}
                  className="mb-2 text-[#DC2F02]"
                />
                <p className="text-[9px] uppercase text-gray-500">Year</p>
                <p className="mt-1 text-xs font-semibold">
                  {project.year}
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <Clock3
                  size={15}
                  className="mb-2 text-[#DC2F02]"
                />
                <p className="text-[9px] uppercase text-gray-500">
                  Duration
                </p>
                <p className="mt-1 text-xs font-semibold">
                  {project.duration}
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <Layers3
                  size={15}
                  className="mb-2 text-[#DC2F02]"
                />
                <p className="text-[9px] uppercase text-gray-500">
                  Category
                </p>
                <p className="mt-1 text-xs font-semibold">
                  {project.category}
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="mb-3 flex items-center gap-2">
                <Code2 size={16} className="text-[#DC2F02]" />
                <h2 className="text-xs font-bold uppercase tracking-wider">
                  Technologies
                </h2>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {technologies.map((tech, index) => (
                  <span
                    key={`${tech}-${index}`}
                    className="rounded-md border border-[#DC2F02]/20 bg-[#DC2F02]/10 px-2 py-1 text-[10px] text-orange-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-3 gap-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-lg bg-[#DC2F02] px-2 py-2 text-[10px] font-semibold transition hover:bg-[#ff3d0a]"
              >
                <ExternalLink size={13} />
                Live
              </a>

              <a
                href={project.clientRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2 py-2 text-[10px] font-semibold transition hover:border-[#DC2F02]"
              >
                <GiThumbDown size={13} />
                Client
              </a>

              <a
                href={project.serverRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2 py-2 text-[10px] font-semibold transition hover:border-[#DC2F02]"
              >
                <GiThunderBlade size={13} />
                Server
              </a>
            </div>
          </section>

          {/* RIGHT */}
          <section className="space-y-3">

            {/* Short Description */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="mb-2 flex items-center gap-2">
                <Target size={16} className="text-[#DC2F02]" />
                <h2 className="text-xs font-bold uppercase tracking-wider">
                  Overview
                </h2>
              </div>

              <p className="text-[11px] leading-5 text-gray-300">
                {project.shortDescription}
              </p>
            </div>

            {/* Description + Features */}
            <div className="grid gap-3 md:grid-cols-2">

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="mb-2 flex items-center gap-2">
                  <BookOpen size={15} className="text-[#DC2F02]" />
                  <h2 className="text-xs font-bold uppercase tracking-wider">
                    Description
                  </h2>
                </div>

                <p className="text-[10px] leading-[1.55] text-gray-400">
                  {project.description}
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="mb-2 flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#DC2F02]" />
                  <h2 className="text-xs font-bold uppercase tracking-wider">
                    Features
                  </h2>
                </div>

                <p className="text-[10px] leading-[1.55] text-gray-400">
                  {project.features}
                </p>
              </div>

            </div>

            {/* Challenges / Solution */}
            <div className="grid gap-3 md:grid-cols-2">

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Trophy size={15} className="text-[#DC2F02]" />
                  <h2 className="text-xs font-bold uppercase tracking-wider">
                    Challenges
                  </h2>
                </div>

                <p className="text-[10px] leading-[1.55] text-gray-400">
                  {project.challenges}
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Lightbulb size={15} className="text-[#DC2F02]" />
                  <h2 className="text-xs font-bold uppercase tracking-wider">
                    Solution
                  </h2>
                </div>

                <p className="text-[10px] leading-[1.55] text-gray-400">
                  {project.solution}
                </p>
              </div>

            </div>

            {/* Learnings */}
            <div className="rounded-xl border border-[#DC2F02]/20 bg-[#DC2F02]/5 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Lightbulb size={16} className="text-[#DC2F02]" />
                <h2 className="text-xs font-bold uppercase tracking-wider">
                  Key Learnings
                </h2>
              </div>

              <p className="text-[10px] leading-[1.55] text-gray-300">
                {project.learnings}
              </p>
            </div>

            {/* Technical Stack */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-xs font-bold uppercase tracking-wider">
                  Technical Stack
                </h2>

                <span className="text-[9px] text-gray-600">
                  FULL STACK PROJECT
                </span>
              </div>

              <p className="text-[10px] leading-5 text-gray-400">
                {project.technology}
              </p>
            </div>

          </section>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;