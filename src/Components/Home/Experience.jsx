"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const experiences = [
  {
    year: "2025 – Present",
    title: "MERN Stack Developer",
    company: "Self Learning & Personal Projects",
    location: "Remote",
    type: "Learning & Development",
    description:
      "Building modern full-stack web applications using React, Next.js, Node.js, Express.js and MongoDB. Focused on creating scalable APIs, authentication systems, responsive interfaces and real-world projects.",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    current: true,
  },
  {
    year: "2025",
    title: "AI Driven Web Development",
    company: "Programming Hero",
    location: "Online",
    type: "Professional Training",
    description:
      "Completed AI Driven Web Development training with hands-on experience in frontend and backend development, authentication, database integration, REST APIs and modern web application development.",
    technologies: [
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git",
    ],
    current: false,
  },
  {
    year: "2024 – 2025",
    title: "Frontend & Backend Development",
    company: "Personal Projects",
    location: "Remote",
    type: "Project Experience",
    description:
      "Started building practical web applications and developed a strong foundation in frontend and backend technologies. Worked on responsive UI, REST APIs, database management and authentication systems.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
    ],
    current: false,
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#070707] py-24 text-white sm:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#DC2F02]/[0.035] blur-[150px]" />

        <div className="absolute -right-40 top-[45%] h-96 w-96 rounded-full bg-[#DC2F02]/[0.03] blur-[150px]" />

        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#DC2F02]/[0.025] blur-[140px]" />
      </div>

      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:50px_50px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#DC2F02]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#DC2F02]">
              My Journey
            </span>

            <span className="h-px w-10 bg-[#DC2F02]" />
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Experience{" "}
            <span className="text-white/40">&</span>{" "}
            <span className="bg-gradient-to-r from-white via-gray-300 to-[#DC2F02] bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            My development journey, learning experience and the technologies
            I have worked with along the way.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-[#DC2F02] via-white/10 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const isRight = index % 2 !== 0;

              return (
                <motion.div
                  key={experience.title}
                  initial={{
                    opacity: 0,
                    x: isRight ? 50 : -50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  className={`relative flex items-start md:w-1/2 ${isRight
                      ? "md:ml-auto md:pl-12"
                      : "md:pr-12"
                    }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-5 top-7 z-20 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#070707] bg-[#DC2F02] shadow-[0_0_15px_rgba(220,47,2,0.8)] md:left-auto ${isRight
                        ? "md:-left-[6px]"
                        : "md:-right-[6px]"
                      }`}
                  >
                    {experience.current && (
                      <span className="absolute h-3 w-3 animate-ping rounded-full bg-[#DC2F02] opacity-60" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="ml-10 w-full rounded-[26px] border border-white/[0.08] bg-[#0b0d0c] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1 hover:border-[#DC2F02]/40 hover:shadow-[0_25px_70px_rgba(220,47,2,0.12)] md:ml-0 sm:p-7">
                    {/* Top */}
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <CalendarDays
                          size={14}
                          className="text-[#DC2F02]"
                        />

                        <span className="font-mono text-xs font-bold tracking-wider text-gray-500">
                          {experience.year}
                        </span>
                      </div>

                      {experience.current && (
                        <span className="rounded-full border border-[#DC2F02]/30 bg-[#DC2F02]/10 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#DC2F02]">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <div className="mb-4">
                      <h3 className="text-xl font-black text-gray-200 sm:text-2xl">
                        {experience.title}
                      </h3>

                      <p className="mt-1 text-sm font-semibold text-[#DC2F02]">
                        {experience.company}
                      </p>
                    </div>

                    {/* Meta */}
                    <div className="mb-5 flex flex-wrap gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={13} />
                        {experience.location}
                      </div>

                      <div className="flex items-center gap-1.5">
                        <BriefcaseBusiness size={13} />
                        {experience.type}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-7 text-gray-500">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-6 border-t border-white/[0.06] pt-5">
                      <div className="mb-3 flex items-center gap-2">
                        <Sparkles
                          size={13}
                          className="text-[#DC2F02]"
                        />

                        <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-600">
                          Technologies
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-2.5 py-1.5 text-[10px] font-semibold text-gray-500 transition-all duration-300 hover:border-[#DC2F02]/30 hover:bg-[#DC2F02]/10 hover:text-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover Arrow */}
                    <div className="mt-5 flex justify-end">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-[#DC2F02]/40 hover:bg-[#DC2F02]/10">
                        <ArrowUpRight
                          size={14}
                          className="text-gray-600 hover:text-[#DC2F02]"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex items-center justify-center gap-3"
        >
          <span className="h-px w-12 bg-white/[0.08]" />

          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-600">
            Always Learning · Always Building
          </span>

          <span className="h-px w-12 bg-white/[0.08]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;