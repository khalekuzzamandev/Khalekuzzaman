"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#070707] py-24 text-white sm:py-28"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#DC2F02]/[0.04] blur-[150px]" />

        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#DC2F02]/[0.035] blur-[150px]" />

        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DC2F02]/[0.02] blur-[140px]" />
      </div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:50px_50px]" />

      {/* ================= CONTAINER ================= */}

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#DC2F02]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#DC2F02]">
              Get In Touch
            </span>

            <span className="h-px w-10 bg-[#DC2F02]" />
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Let's{" "}
            <span className="text-white/40">Work</span>{" "}
            <span className="bg-gradient-to-r from-white via-gray-300 to-[#DC2F02] bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Have a project idea, job opportunity or just want to say hello?
            Feel free to get in touch with me.
          </p>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

          {/* ==================================================
              LEFT — CONTACT INFORMATION
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="group relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#0b0d0c] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-[#DC2F02]/30 sm:p-9"
          >
            {/* Top Line */}
            <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#DC2F02] to-transparent opacity-70" />

            {/* Glow */}
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#DC2F02]/[0.05] blur-[100px] transition-all duration-700 group-hover:bg-[#DC2F02]/[0.10]" />

            <div className="relative">

              {/* Heading */}
              <div className="mb-4 flex items-center gap-2">
                <span className="h-[2px] w-6 bg-[#DC2F02]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#DC2F02]">
                  Contact Information
                </span>
              </div>

              <h3 className="text-2xl font-black text-gray-200 sm:text-3xl">
                Let's start a conversation.
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500">
                I'm always open to discussing new projects, development
                opportunities, creative ideas or potential collaborations.
              </p>

              {/* Contact Items */}
              <div className="mt-8 space-y-4">

                {/* EMAIL */}
                <a
                  href="mailto:muradvcv@gmail.com"
                  className="group/item flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#DC2F02]/30 hover:bg-[#DC2F02]/[0.06]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#DC2F02]/20 bg-[#DC2F02]/10">
                    <Mail
                      size={19}
                      className="text-[#DC2F02]"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-600">
                      Email
                    </p>

                    <p className="mt-1 truncate text-sm font-semibold text-gray-400 transition-colors group-hover/item:text-white sm:text-base">
                      muradvcv@gmail.com
                    </p>
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="ml-auto shrink-0 text-gray-700 transition-all duration-300 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-[#DC2F02]"
                  />
                </a>

                {/* PHONE */}
                <a
                  href="tel:+8801787256994"
                  className="group/item flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#DC2F02]/30 hover:bg-[#DC2F02]/[0.06]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#DC2F02]/20 bg-[#DC2F02]/10">
                    <Phone
                      size={19}
                      className="text-[#DC2F02]"
                    />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-600">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-semibold text-gray-400 transition-colors group-hover/item:text-white sm:text-base">
                      +880 1787-256994
                    </p>
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="ml-auto shrink-0 text-gray-700 transition-all duration-300 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-[#DC2F02]"
                  />
                </a>

                {/* LOCATION */}
                <div className="group/item flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#DC2F02]/30 hover:bg-[#DC2F02]/[0.06]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#DC2F02]/20 bg-[#DC2F02]/10">
                    <MapPin
                      size={19}
                      className="text-[#DC2F02]"
                    />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-600">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-semibold text-gray-400 sm:text-base">
                      Mymensingh, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              {/* SOCIAL */}
              <div className="mt-8 border-t border-white/[0.06] pt-7">
                <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.25em] text-gray-600">
                  Find Me Online
                </p>

                <div className="flex gap-3">

                  {/* GitHub */}
                  <a
                    href="https://github.com/khalekuzzamandev"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="group/social flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-[#DC2F02]/40 hover:bg-[#DC2F02]/10 hover:text-white"
                  >
                    <Github
                      size={20}
                      className="transition-transform duration-300 group-hover/social:scale-110"
                    />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/muradvcv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="group/social flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-[#DC2F02]/40 hover:bg-[#DC2F02]/10 hover:text-white"
                  >
                    <Linkedin
                      size={20}
                      className="transition-transform duration-300 group-hover/social:scale-110"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#DC2F02] via-[#DC2F02] to-transparent transition-all duration-700 group-hover:w-full" />
          </motion.div>

          {/* ==================================================
              RIGHT — CONTACT FORM
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="group relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#0b0d0c] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-[#DC2F02]/30 sm:p-9"
          >
            {/* Top Line */}
            <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#DC2F02] to-transparent opacity-70" />

            {/* Glow */}
            <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-[#DC2F02]/[0.04] blur-[100px]" />

            <div className="relative">

              {/* Form Heading */}
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#DC2F02]/20 bg-[#DC2F02]/10">
                  <MessageCircle
                    size={20}
                    className="text-[#DC2F02]"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-black text-gray-200 sm:text-2xl">
                    Send Me a Message
                  </h3>

                  <p className="mt-1 text-xs text-gray-600">
                    Tell me about your project.
                  </p>
                </div>
              </div>

              {/* FORM */}
              <form className="space-y-5">

                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-700 focus:border-[#DC2F02]/50 focus:bg-[#DC2F02]/[0.03] focus:ring-1 focus:ring-[#DC2F02]/20"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-700 focus:border-[#DC2F02]/50 focus:bg-[#DC2F02]/[0.03] focus:ring-1 focus:ring-[#DC2F02]/20"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project discussion"
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-700 focus:border-[#DC2F02]/50 focus:bg-[#DC2F02]/[0.03] focus:ring-1 focus:ring-[#DC2F02]/20"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-700 focus:border-[#DC2F02]/50 focus:bg-[#DC2F02]/[0.03] focus:ring-1 focus:ring-[#DC2F02]/20"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group/btn flex w-full items-center justify-center gap-3 rounded-xl bg-[#DC2F02] px-5 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e93808] hover:shadow-[0_12px_40px_rgba(220,47,2,0.25)]"
                >
                  <span>Send Message</span>

                  <Send
                    size={16}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5"
                  />
                </button>
              </form>
            </div>

            {/* Bottom Line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#DC2F02] via-[#DC2F02] to-transparent transition-all duration-700 group-hover:w-full" />
          </motion.div>
        </div>

        {/* ================= STATUS ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-14 flex items-center justify-center gap-3"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#DC2F02] shadow-[0_0_12px_rgba(220,47,2,0.8)]" />

          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-600">
            Available for Opportunities
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;