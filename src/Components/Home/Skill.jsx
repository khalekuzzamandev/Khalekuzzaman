'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Wrench, Sparkles } from 'lucide-react';
import TechAnimation from './TechAnimation';

const topSkills = [
  {
    title: 'Frontend',
    subtitle: 'Modern UI Development',
    image: '/frontent.png',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'DaisyUI',
      'HeroUI',
      'Framer Motion',
      'Redux',
      'React Hook Form',
      'Vite',
      'Responsive Design',
      'REST API',
    ],
  },
  {
    title: 'Backend',
    subtitle: 'Server & API Development',
    image: '/backend.png',
    skills: [
      'Node.js',
      'Express.js',
      'REST API',
      'JWT',
      'Better Auth',
      'Authentication',
      'Authorization',
      'CRUD',
      'Middleware',
      'API Development',
      'MVC',
      'Validation',
      'Security',
      'CORS',
      'API Integration',
    ],
  },
  {
    title: 'Database',
    subtitle: 'Data Management',
    image: '/database.png',
    skills: [
      'MongoDB',
      'MongoDB Atlas',
      'PostgreSQL',
      'Prisma',
      'Mongoose',
      'SQL',
      'NoSQL',
      'Database Design',
      'Schema Design',
      'Data Modeling',
      'CRUD Operations',
      'Aggregation',
      'Indexing',
      'Relationships',
      'Query Optimization',
    ],
  },
];

const tools = [
  'Git',
  'GitHub',
  'VS Code',
  'Postman',
  'Figma',
  'Chrome DevTools',
  'Vercel',
  'Netlify',
  'Surge',
  'NPM',
  'Yarn',
  'Linux',
  'Firebase',
  'Cloudinary',
  'Google Fonts',
  'Font Awesome',
  'React Toastify',
  'React Tabs',
  'React Spinners',
  'Date-Fns',
];

const SkillCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: 'easeOut',
      }}
      className="group relative"
    >
      {/* Outer Glow */}
      <div className="pointer-events-none absolute -inset-[1px] rounded-[25px] bg-gradient-to-br from-orange-500/30 via-transparent to-orange-700/20 opacity-0 blur-sm transition duration-700 group-hover:opacity-100" />

      {/* Card */}
      <div className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0b0d0c] shadow-[0_15px_50px_rgba(0,0,0,0.35)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-orange-500/30 group-hover:shadow-[0_25px_70px_rgba(234,88,12,0.15)]">

        {/* Top Accent */}
        <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/70 to-transparent" />

        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-orange-600/10 blur-[80px] transition duration-700 group-hover:bg-orange-600/20" />

        <div className="relative grid items-center gap-8 p-5 sm:p-6 lg:grid-cols-[280px_1fr]">

          {/* ================= LEFT SIDE ================= */}
          <div className="relative flex items-center gap-5 lg:min-h-[150px]">

            {/* Icon Glow */}
            <div className="absolute left-2 h-24 w-24 rounded-full bg-orange-500/10 blur-2xl" />

            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 4, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            >
              <div className="absolute inset-[1px] rounded-2xl border border-orange-500/0 transition duration-500 group-hover:border-orange-500/30" />

              <Image
                src={item.image}
                alt={`${item.title} icon`}
                width={56}
                height={56}
                className="relative h-12 w-12 object-contain transition duration-500 group-hover:scale-110"
              />
            </motion.div>

            {/* Title */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-[1px] w-5 bg-orange-500" />

                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-orange-500">
                  {item.subtitle}
                </p>
              </div>

              <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                {item.title}
              </h3>

              <div className="mt-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

                <span className="text-[10px] font-medium text-gray-600">
                  {item.skills.length} Skills
                </span>
              </div>
            </div>

            {/* Number */}
            <span className="absolute right-0 top-0 text-[10px] font-bold tracking-[0.25em] text-white/20">
              0{index + 1}
            </span>
          </div>

          {/* Vertical Divider */}
          <div className="hidden h-full w-px bg-white/[0.07] lg:absolute lg:left-[300px] lg:block" />

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative lg:pl-6">

            {/* Skills Header */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles
                  size={13}
                  className="text-orange-500"
                />

                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-gray-500">
                  Technologies & Skills
                </span>
              </div>

              <span className="text-[9px] text-gray-700">
                {item.skills.length} Skills
              </span>
            </div>

            {/* Skills */}
            <div className="flex max-h-[150px] flex-wrap content-start gap-2 overflow-y-auto pr-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-orange-500/20">
              {item.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.25,
                    delay: index * 0.05 + skillIndex * 0.015,
                  }}
                  whileHover={{
                    y: -2,
                    scale: 1.03,
                  }}
                  className="cursor-default rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[10px] font-medium text-gray-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-white hover:shadow-[0_5px_18px_rgba(234,88,12,0.1)]"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-700 via-orange-500 to-transparent transition-all duration-700 group-hover:w-full" />
      </div>
    </motion.div>
  );
};

const Skill = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#070707] py-24 text-white sm:py-28"
    >

      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-600/10 blur-[140px]" />

        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/[0.03] blur-[120px]" />
      </div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:50px_50px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-orange-600" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
              My Expertise
            </span>

            <span className="h-px w-10 bg-orange-600" />
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Skills{' '}
            <span className="text-white">&</span>{' '}
            <span className="bg-gradient-to-r from-white via-gray-300 to-orange-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Technologies and tools I use to build modern, responsive and
            scalable full-stack web applications.
          </p>
        </motion.div>

        {/* ================= TOP CARDS ================= */}
        <div className="grid gap-6 lg:grid-cols-1">
          {topSkills.map((item, index) => (
            <SkillCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>

        {/* ================= DIVIDER ================= */}
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0.85,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="my-10 flex items-center gap-4"
        >
          <span className="h-px flex-1 bg-white/10" />

          <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.3em] text-gray-600">
            Development Ecosystem
          </span>

          <span className="h-px flex-1 bg-white/10" />
        </motion.div>

        {/* ================= ROW 2 ================= */}
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]">

          {/* ================= TOOLS ================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: -35,
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
            className="group relative h-full"
          >
            <div className="relative h-full min-h-[430px] overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0b0d0c] p-6 shadow-[0_15px_50px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-orange-500/30 hover:shadow-[0_25px_70px_rgba(234,88,12,0.15)] sm:p-8">

              {/* Glow */}
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-600/10 blur-[90px] transition duration-700 group-hover:bg-orange-600/20" />

              {/* Top Line */}
              <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/70 to-transparent" />

              {/* Header */}
              <div className="relative flex items-start justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-[1px] w-5 bg-orange-500" />

                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-orange-500">
                      Development Ecosystem
                    </p>
                  </div>

                  <h3 className="text-2xl font-black text-white sm:text-3xl">
                    Tools & Technologies
                  </h3>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 shadow-[0_0_25px_rgba(234,88,12,0.08)]">
                  <Wrench
                    size={20}
                    className="text-orange-500"
                  />
                </div>
              </div>

              {/* Description */}
              <p className="relative mt-4 text-xs leading-6 text-gray-500 sm:text-sm">
                Tools and technologies I use for development, testing, design,
                deployment and maintaining modern web applications.
              </p>

              {/* Divider */}
              <div className="relative my-6 h-px bg-white/[0.07]">
                <div className="absolute left-0 top-0 h-px w-16 bg-orange-500/50" />
              </div>

              {/* Tools */}
              <div className="relative flex max-h-[260px] flex-wrap content-start gap-2 overflow-y-auto pr-1">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.025,
                    }}
                    whileHover={{
                      y: -3,
                      scale: 1.03,
                    }}
                    className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[10px] font-medium text-gray-400 transition-all duration-300 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-white hover:shadow-[0_5px_20px_rgba(234,88,12,0.08)]"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-700 via-orange-500 to-transparent transition-all duration-700 group-hover:w-full" />
            </div>
          </motion.div>

          {/* ================= TECH ANIMATION ================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="group relative h-full"
          >
            <div className="relative flex min-h-[430px] h-full items-center justify-center overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0b0d0c] shadow-[0_15px_50px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-orange-500/30 hover:shadow-[0_25px_70px_rgba(234,88,12,0.15)]">

              {/* Glow */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.12),transparent_60%)]" />

              {/* Top Line */}
              <div className="absolute left-0 right-0 top-0 z-20 h-[1px] bg-gradient-to-r from-transparent via-orange-500/70 to-transparent" />

              {/* Label */}
              <div className="absolute left-6 top-6 z-20 flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500 shadow-[0_0_10px_rgba(234,88,12,0.8)]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-500">
                  My Tech Stack
                </span>
              </div>

              {/* Animation */}
              <div className="relative z-10 flex w-full items-center justify-center">
                <TechAnimation />
              </div>

              {/* Bottom Text */}
              <div className="absolute bottom-6 left-0 right-0 z-20 text-center">
                <p className="text-xs font-medium tracking-wider text-gray-500">
                  Build <span className="mx-1 text-orange-500">•</span> Learn{' '}
                  <span className="mx-1 text-orange-500">•</span> Improve
                </p>
              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-700 via-orange-500 to-transparent transition-all duration-700 group-hover:w-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skill;