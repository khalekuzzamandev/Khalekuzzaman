import React from "react";
import Link from "next/link";
import Image from "next/image";

import { getProjectDetails } from "@/lib/actions/project";

import {
  AlertCircle,
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  Code,
  Cpu,
  ExternalLink,
  Globe,
  Layers,
  Lightbulb,
  Sparkles,
} from "lucide-react";

import { GiThunderBlade } from "react-icons/gi";

const ProjectDetails = async ({ params }) => {
  const { id } = await params;
  const project = await getProjectDetails(id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#09090b] px-4 py-10 text-white flex items-center justify-center">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#121215] p-8 text-center shadow-2xl">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10 text-red-500">
            <AlertCircle size={32} />
          </div>

          <h1 className="mb-2 text-2xl font-bold">
            Project Not Found
          </h1>

          <p className="mb-6 text-sm leading-6 text-gray-400">
            The project you are looking for doesnt exist or has been removed.
          </p>

          <Link
            href="/#projects"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#DC2F02] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#DC2F02]/20 transition hover:bg-[#ff3d0a]"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const technologies = project.technology
    ? project.technology
      .split(",")
      .flatMap((tech) => tech.trim().split(/\s+/))
      .filter(Boolean)
    : [];

  return (
    <main className="min-h-screen bg-[#09090b] px-4 py-6 text-gray-200 md:px-8 lg:py-10">
      <div className="mx-auto max-w-7xl space-y-6">

        {/* ================= HEADER ================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#121215]/90 p-4 shadow-xl backdrop-blur-xl">
          <div className="flex min-w-0 items-center gap-4">
            <Link
              href="/#projects"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:border-[#DC2F02] hover:bg-[#DC2F02]/10 hover:text-white"
            >
              <ArrowLeft size={18} />
            </Link>

            <div className="min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DC2F02]">
                Portfolio Showcase
              </span>

              <h1 className="truncate text-xl font-extrabold tracking-tight text-white md:text-2xl">
                {project.title}
              </h1>
            </div>
          </div>

          <div
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold ${project.status === "Completed"
                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                : "border-amber-500/30 bg-amber-500/10 text-amber-400"
              }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${project.status === "Completed"
                  ? "animate-pulse bg-emerald-400"
                  : "bg-amber-400"
                }`}
            />

            {project.status}
          </div>
        </div>

        {/* ================= HERO ================= */}
        <section className="grid gap-6 lg:grid-cols-12">

          {/* IMAGE */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#121215] shadow-2xl lg:col-span-8">
            <div className="relative h-[260px] w-full sm:h-[380px] md:h-[460px] lg:h-[500px]">

              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover object-center transition duration-700 ease-out group-hover:scale-[1.03]"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />

              {/* Top Badge */}
              <div className="absolute left-5 top-5">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                  <Globe size={14} className="text-[#DC2F02]" />
                  {project.category}
                </div>
              </div>

              {/* Bottom Image Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                <div className="max-w-2xl">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#DC2F02]">
                    Featured Project
                  </p>

                  <h2 className="mb-2 text-2xl font-black tracking-tight text-white md:text-4xl">
                    {project.title}
                  </h2>

                  <p className="line-clamp-2 max-w-xl text-sm leading-6 text-gray-300">
                    {project.shortDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-4 lg:col-span-4">

            {/* Meta */}
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">

              <div className="rounded-2xl border border-white/10 bg-[#121215] p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#DC2F02]/20 bg-[#DC2F02]/10 text-[#DC2F02]">
                    <Calendar size={19} />
                  </div>

                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
                      Year Created
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      {project.year}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#121215] p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#DC2F02]/20 bg-[#DC2F02]/10 text-[#DC2F02]">
                    <Clock size={19} />
                  </div>

                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
                      Development Time
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      {project.duration}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#121215] p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#DC2F02]/20 bg-[#DC2F02]/10 text-[#DC2F02]">
                    <Layers size={19} />
                  </div>

                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
                      Category
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      {project.category}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Links */}
            <div className="flex flex-1 flex-col justify-between rounded-2xl border border-white/10 bg-[#121215] p-5">

              <div>
                <div className="mb-4 flex items-center gap-2">
                  <ExternalLink
                    size={17}
                    className="text-[#DC2F02]"
                  />

                  <h2 className="text-xs font-bold uppercase tracking-wider text-white">
                    Project Links
                  </h2>
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#DC2F02] px-4 py-3.5 text-xs font-bold text-white shadow-lg shadow-[#DC2F02]/20 transition hover:bg-[#ff3d0a] hover:shadow-[#DC2F02]/30"
                >
                  <ExternalLink size={16} />
                  Live Demo Preview
                </a>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href={project.clientRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-xs font-semibold text-gray-300 transition hover:border-[#DC2F02]/40 hover:bg-[#DC2F02]/10 hover:text-white"
                >
                  <GiThunderBlade size={15} />
                  Client Code
                </a>

                <a
                  href={project.serverRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-xs font-semibold text-gray-300 transition hover:border-[#DC2F02]/40 hover:bg-[#DC2F02]/10 hover:text-white"
                >
                  <Cpu size={15} />
                  Server Code
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ================= MAIN CONTENT ================= */}
        <section className="grid gap-6 lg:grid-cols-12">

          {/* LEFT */}
          <div className="space-y-6 lg:col-span-8">

            {/* Executive Summary */}
            <div className="rounded-3xl border border-white/10 bg-[#121215] p-6 shadow-xl md:p-7">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DC2F02]/20 bg-[#DC2F02]/10 text-[#DC2F02]">
                  <Sparkles size={18} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#DC2F02]">
                    Overview
                  </p>

                  <h2 className="text-lg font-bold text-white">
                    Executive Summary
                  </h2>
                </div>
              </div>

              <p className="text-sm leading-7 text-gray-300">
                {project.shortDescription}
              </p>
            </div>

            {/* Description + Features */}
            <div className="grid gap-6 md:grid-cols-2">

              <div className="rounded-3xl border border-white/10 bg-[#121215] p-6 shadow-xl">
                <div className="mb-5 border-b border-white/10 pb-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#DC2F02]">
                    About
                  </p>

                  <h2 className="mt-1 text-lg font-bold text-white">
                    Detailed Description
                  </h2>
                </div>

                <p className="text-sm leading-7 text-gray-400">
                  {project.description}
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#121215] p-6 shadow-xl">
                <div className="mb-5 border-b border-white/10 pb-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#DC2F02]">
                    Highlights
                  </p>

                  <h2 className="mt-1 text-lg font-bold text-white">
                    Key Features
                  </h2>
                </div>

                <p className="text-sm leading-7 text-gray-400">
                  {project.features}
                </p>
              </div>

            </div>

            {/* Challenges + Solution */}
            <div className="grid gap-6 md:grid-cols-2">

              <div className="rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-[#121215] p-6 shadow-xl">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-400">
                    <AlertCircle size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-red-400">
                      Development
                    </p>

                    <h2 className="text-lg font-bold text-white">
                      Challenges Faced
                    </h2>
                  </div>
                </div>

                <p className="text-sm leading-7 text-gray-400">
                  {project.challenges}
                </p>
              </div>

              <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-[#121215] p-6 shadow-xl">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                    <CheckCircle2 size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-400">
                      Implementation
                    </p>

                    <h2 className="text-lg font-bold text-white">
                      Implemented Solution
                    </h2>
                  </div>
                </div>

                <p className="text-sm leading-7 text-gray-400">
                  {project.solution}
                </p>
              </div>

            </div>

            {/* Learnings */}
            <div className="relative overflow-hidden rounded-3xl border border-[#DC2F02]/30 bg-gradient-to-br from-[#DC2F02]/15 via-[#121215] to-[#121215] p-6 shadow-xl md:p-7">

              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#DC2F02]/10 blur-3xl" />

              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DC2F02]/20 bg-[#DC2F02]/10 text-[#DC2F02]">
                    <Lightbulb size={19} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#DC2F02]">
                      Experience
                    </p>

                    <h2 className="text-lg font-bold text-white">
                      Key Takeaways & Learnings
                    </h2>
                  </div>
                </div>

                <p className="text-sm leading-7 text-gray-300">
                  {project.learnings}
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6 lg:col-span-4">

            {/* Technologies */}
            <div className="rounded-3xl border border-white/10 bg-[#121215] p-6 shadow-xl">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DC2F02]/20 bg-[#DC2F02]/10 text-[#DC2F02]">
                    <Code size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#DC2F02]">
                      Stack
                    </p>

                    <h2 className="text-lg font-bold text-white">
                      Technologies
                    </h2>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={`${tech}-${index}`}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-gray-300 transition hover:border-[#DC2F02]/40 hover:bg-[#DC2F02]/10 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <div className="rounded-3xl border border-white/10 bg-[#121215] p-6 shadow-xl">
              <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DC2F02]/20 bg-[#DC2F02]/10 text-[#DC2F02]">
                  <Cpu size={18} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#DC2F02]">
                    Technical
                  </p>

                  <h2 className="text-lg font-bold text-white">
                    Architecture
                  </h2>
                </div>
              </div>

              <p className="text-sm leading-7 text-gray-400">
                {project.technology}
              </p>
            </div>

            {/* Project Information */}
            <div className="rounded-3xl border border-white/10 bg-[#121215] p-6 shadow-xl">
              <h2 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
                Project Information
              </h2>

              <div className="space-y-4">

                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-xs text-gray-500">
                    Project
                  </span>

                  <span className="max-w-[180px] truncate text-right text-xs font-semibold text-white">
                    {project.title}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-xs text-gray-500">
                    Category
                  </span>

                  <span className="text-xs font-semibold text-white">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-xs text-gray-500">
                    Year
                  </span>

                  <span className="text-xs font-semibold text-white">
                    {project.year}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Status
                  </span>

                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${project.status === "Completed"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-amber-500/10 text-amber-400"
                      }`}
                  >
                    {project.status}
                  </span>
                </div>

              </div>
            </div>

          </aside>
        </section>
      </div>
    </main>
  );
};

export default ProjectDetails;