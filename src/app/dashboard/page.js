
"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  FolderKanban,
  GraduationCap,
  Award,
  Code2,
  FileText,
  MessageSquare,
  Settings,
  Sparkles,
  Activity,
  Plus,
  ExternalLink,
} from "lucide-react";

const DashboradHomePage = () => {
  const stats = [
    {
      title: "Projects",
      value: "12",
      description: "Portfolio projects",
      icon: FolderKanban,
      href: "/dashboard/admin/projects",
    },
    {
      title: "Experience",
      value: "05",
      description: "Work experiences",
      icon: BriefcaseBusiness,
      href: "/dashboard/admin/experience",
    },
    {
      title: "Skills",
      value: "24",
      description: "Technical skills",
      icon: Code2,
      href: "/dashboard/admin/skills",
    },
    {
      title: "Certificates",
      value: "08",
      description: "Professional certificates",
      icon: Award,
      href: "/dashboard/admin/certificates",
    },
  ];

  const quickActions = [
    {
      title: "Add Project",
      description: "Create a new portfolio project",
      icon: FolderKanban,
      href: "/dashboard/admin/projects",
    },
    {
      title: "Add Experience",
      description: "Add your latest experience",
      icon: BriefcaseBusiness,
      href: "/dashboard/admin/experience",
    },
    {
      title: "Add Certificate",
      description: "Upload a new certificate",
      icon: Award,
      href: "/dashboard/admin/certificates",
    },
    {
      title: "Update Resume",
      description: "Manage your resume",
      icon: FileText,
      href: "/dashboard/admin/resume",
    },
  ];

  const manageItems = [
    {
      title: "Education",
      description: "Manage academic information",
      icon: GraduationCap,
      href: "/dashboard/admin/education",
    },
    {
      title: "Messages",
      description: "View portfolio messages",
      icon: MessageSquare,
      href: "/dashboard/admin/messages",
    },
    {
      title: "Settings",
      description: "Manage dashboard settings",
      icon: Settings,
      href: "/dashboard/admin/settings",
    },
  ];

  return (
    <div className="min-h-screen bg-black px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8 lg:p-10">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-600/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-orange-600/5 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-orange-500/20 bg-orange-500/10">
                  <Sparkles className="h-4 w-4 text-orange-500" />
                </span>

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                  Portfolio Control Center
                </span>
              </div>

              <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Welcome to your{" "}
                <span className="text-orange-500">Dashboard.</span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
                Manage your portfolio content, projects, experiences, skills,
                certificates and professional information from one place.
              </p>
            </div>

            <Link
              href="/"
              target="_blank"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-400"
            >
              View Portfolio
              <ExternalLink className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section>
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
                Overview
              </p>

              <h2 className="mt-1 text-xl font-bold text-white">
                Portfolio Statistics
              </h2>
            </div>

            <div className="hidden items-center gap-2 text-xs text-zinc-600 sm:flex">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Control Center
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  href={item.href}
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-white/[0.04]"
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-500/5 blur-2xl transition group-hover:bg-orange-500/10" />

                  <div className="relative flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-500/15 bg-orange-500/10">
                      <Icon className="h-5 w-5 text-orange-500" />
                    </div>

                    <ArrowUpRight className="h-4 w-4 text-zinc-700 transition group-hover:text-orange-500" />
                  </div>

                  <div className="relative mt-5">
                    <p className="text-sm font-medium text-zinc-500">
                      {item.title}
                    </p>

                    <p className="mt-1 text-3xl font-black tracking-tight">
                      {item.value}
                    </p>

                    <p className="mt-1 text-xs text-zinc-700">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Quick Actions + Status */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">

          {/* Quick Actions */}
          <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
                  Quick Actions
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  Manage Portfolio
                </h2>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                <Plus className="h-4 w-4 text-zinc-500" />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {quickActions.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    href={item.href}
                    key={item.title}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-orange-500/30 hover:bg-orange-500/[0.04]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black transition group-hover:border-orange-500/20 group-hover:bg-orange-500/10">
                      <Icon className="h-5 w-5 text-zinc-500 transition group-hover:text-orange-500" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold text-zinc-200">
                        {item.title}
                      </h3>

                      <p className="mt-1 truncate text-xs text-zinc-600">
                        {item.description}
                      </p>
                    </div>

                    <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-700 transition group-hover:text-orange-500" />
                  </Link>
                );
              })}
            </div>
          </section>

          {/* System Status */}
          <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
                System
              </p>

              <h2 className="mt-1 text-xl font-bold">
                Dashboard Status
              </h2>
            </div>

            <div className="rounded-2xl border border-orange-500/10 bg-orange-500/[0.04] p-5">
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/10">
                  <span className="absolute h-2.5 w-2.5 animate-pulse rounded-full bg-orange-500" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-zinc-200">
                    Portfolio Online
                  </p>

                  <p className="mt-0.5 text-xs text-zinc-600">
                    All systems operational
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-xs text-zinc-600">
                  Frontend
                </span>

                <span className="text-xs font-semibold text-orange-500">
                  Online
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-xs text-zinc-600">
                  Backend API
                </span>

                <span className="text-xs font-semibold text-orange-500">
                  Connected
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-600">
                  Database
                </span>

                <span className="text-xs font-semibold text-orange-500">
                  Connected
                </span>
              </div>
            </div>
          </section>
        </div>

        {/* Management */}
        <section>
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
              Management
            </p>

            <h2 className="mt-1 text-xl font-bold">
              Other Sections
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {manageItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  href={item.href}
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-white/[0.035]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04]">
                      <Icon className="h-5 w-5 text-zinc-500 transition group-hover:text-orange-500" />
                    </div>

                    <ArrowUpRight className="h-4 w-4 text-zinc-700 transition group-hover:text-orange-500" />
                  </div>

                  <h3 className="mt-5 text-sm font-semibold text-zinc-200">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-zinc-600">
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Footer Tip */}
        <section className="rounded-2xl border border-orange-500/10 bg-orange-500/[0.025] p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <Activity className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />

              <div>
                <p className="text-sm font-semibold text-zinc-300">
                  Keep your portfolio updated
                </p>

                <p className="mt-1 text-xs leading-5 text-zinc-600">
                  Add recent projects, experiences and skills to keep your
                  professional profile up to date.
                </p>
              </div>
            </div>

            <Link
              href="/"
              target="_blank"
              className="shrink-0 text-xs font-semibold text-orange-500 transition hover:text-orange-400"
            >
              View live portfolio →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboradHomePage;

