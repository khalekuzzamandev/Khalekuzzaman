
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Loader2,
} from "lucide-react";
import { GiThumbUp } from "react-icons/gi";
import Image from "next/image";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/project/get`);

        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await res.json();

        console.log("Projects:", data);

        setProjects(data);
      } catch (error) {
        console.error("Project fetch error:", error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [baseUrl]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050505] px-5 py-12 text-white md:px-10 md:py-16"
    >

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mx-auto mb-8 max-w-5xl py-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#DC2F02]" />

            <span className="flex items-center gap-1.5 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.3em] text-[#DC2F02]">
              <Sparkles size={12} />
              Selected Work
            </span>

            <span className="h-px w-8 bg-[#DC2F02]" />
          </div>

          <h2 className="text-4xl font-bold leading-none tracking-tight md:text-5xl lg:text-6xl">
            Things I&apos;ve{" "}
            <span className="text-[#DC2F02]">built.</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-gray-500 md:text-sm">
            A selection of projects that showcase my approach to
            building modern, scalable and user-focused digital
            experiences.
          </p>
        </div>

        {/* PROJECT GRID */}
        {loading ? (
          <div className="flex min-h-[250px] items-center justify-center">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Loader2
                size={18}
                className="animate-spin text-[#DC2F02]"
              />
              Loading projects...
            </div>
          </div>
        ) : projects.length === 0 ? (
          <div className="flex min-h-[200px] items-center justify-center">
            <p className="text-sm text-gray-600">
              No projects found.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project._id}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#DC2F02]/40 hover:bg-white/[0.045]"
              >

                {/* ========================= */}
                {/* PROJECT IMAGE / PREVIEW */}
                {/* ========================= */}
                <div className="relative h-60 overflow-hidden border-b border-white/[0.08] bg-[#080808]">
                  <div className="absolute inset-3 overflow-hidden rounded-lg border border-white/10 bg-black shadow-2xl">
                    {/* Browser Bar */}

                    {/* Project Image */}
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title || "Project image"}
                        fill
                        priority={index < 3}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      /* Fallback when image is not available */
                      <div className="flex h-full items-center justify-center pt-6">
                        <div className="text-center">
                          <span className="text-5xl font-black tracking-tighter text-white">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <p className="text-xs font-semibold text-white/40">
                            {project.title}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

            
                </div>
                
                {/* CONTENT */}
             
                <div className="p-5">
                  
                  {/* Project Number */}
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.22em] text-[#DC2F02]">
                      PROJECT {String(index + 1).padStart(2, "0")}
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="text-gray-600 transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#DC2F02]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold tracking-tight transition duration-300 group-hover:text-[#DC2F02]">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-3 min-h-[48px] text-xs leading-5 text-gray-500 md:text-sm">
                    {project.shortDescription?.split(" ").slice(0,23).join(" ")}
                    {project.shortDescription?.trim().split(/\s+/).length > 20 ? "..." : ""}
                  </p>

                  {/* Technologies */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technology
                      ?.split(",")
                      .map((technology, techIndex) => (
                        <span
                          key={`${technology} -${techIndex} `}
                          className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-gray-400 transition group-hover:border-[#DC2F02]/20"
                        >
                          {technology.trim()}
                        </span>
                      ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-5 flex gap-2.5 border-t border-white/[0.08] pt-4">
                    {/* Live Preview */}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/button flex items-center gap-1.5 rounded-lg bg-[#DC2F02] px-3.5 py-2 text-[11px] font-bold text-white transition hover:bg-[#ef3b0a]"
                      >
                        Live Preview

                        <ExternalLink
                          size={13}
                          className="transition group-hover/button:translate-x-0.5"
                        />
                      </Link>
                    )}

                    {/* Source */}
                    {project.clientRepo && (
                      <Link
                        href={project.clientRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-[11px] font-bold text-gray-400 transition hover:border-white/20 hover:text-white"
                      >
                        <GiThumbUp size={13} />
                        Details page
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* FOOTER */}
        <div className="mt-6 flex items-center justify-center">
          <p className="text-[10px] text-gray-600">
            More projects coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
