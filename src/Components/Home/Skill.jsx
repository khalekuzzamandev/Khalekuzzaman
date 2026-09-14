'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Wrench, Sparkles } from 'lucide-react';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaLinux,
  FaNpm,
  FaFire,
  FaFontAwesome,
} from 'react-icons/fa';

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiDaisyui,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiFigma,
  SiVite,
  SiJsonwebtokens,
  SiPostman,
  SiGooglechrome,
  SiVercel,
  SiNetlify,
  SiYarn,
  SiCloudinary,
  SiGooglefonts,
  SiReacthookform,
  SiReactquery,
} from 'react-icons/si';

import TechAnimation from './TechAnimation';

const topSkills = [
  {
    title: 'Frontend',
    subtitle: 'Modern UI Development',
    image: '/frontent.png',
    number: '01',
    skills: [
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'React.js', icon: FaReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
     
    ],
  },

  {
    title: 'Backend',
    subtitle: 'Server & API Development',
    image: '/backend.png',
    number: '02',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#68A063' },
      { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
      { name: 'REST API', icon: FaDatabase, color: '#FF6B35' },
      { name: 'JWT', icon: SiJsonwebtokens, color: '#FFFFFF' },
      { name: 'Better Auth', icon: FaDatabase, color: '#8B5CF6' },
      { name: 'Authentication', icon: FaDatabase, color: '#F59E0B' },
     
    ],
  },

  {
    title: 'Database',
    subtitle: 'Data Management',
    image: '/database.png',
    number: '03',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MongoDB Atlas', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Prisma', icon: SiPrisma, color: '#FFFFFF' },
      { name: 'Mongoose', icon: FaDatabase, color: '#880000' },
      { name: 'SQL', icon: FaDatabase, color: '#F29111' },
    
    ],
  },
];

const tools = [
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'GitHub', icon: FaGithub, color: '#FFFFFF' },
  { name: 'VS Code', icon: SiVercel, color: '#007ACC' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Chrome DevTools', icon: SiGooglechrome, color: '#4285F4' },
  { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
  { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
  { name: 'Surge', icon: FaDatabase, color: '#8B5CF6' },
  { name: 'NPM', icon: FaNpm, color: '#CB3837' },
  { name: 'Yarn', icon: SiYarn, color: '#2C8EBB' },
  { name: 'Linux', icon: FaLinux, color: '#FCC624' },
  { name: 'Firebase', icon: FaFire, color: '#FFCA28' },
  { name: 'Cloudinary', icon: SiCloudinary, color: '#3448C5' },
  { name: 'Google Fonts', icon: SiGooglefonts, color: '#4285F4' },
  { name: 'Font Awesome', icon: FaFontAwesome, color: '#528DD7' },
  { name: 'React Toastify', icon: FaReact, color: '#61DAFB' },
  { name: 'React Tabs', icon: FaReact, color: '#61DAFB' },
  { name: 'React Spinners', icon: FaReact, color: '#61DAFB' },
  { name: 'Date-Fns', icon: FaDatabase, color: '#F97316' },
];

const SkillCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 45,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: '-80px',
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: 'easeOut',
      }}
      className="group relative h-full"
    >
      <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-b from-[#DC2F02]/50 via-transparent to-[#DC2F02]/20 opacity-0 blur-sm transition-all duration-700 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0b0d0c] shadow-[0_20px_70px_rgba(0,0,0,0.35)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#DC2F02]/40 group-hover:shadow-[0_30px_90px_rgba(220,47,2,0.14)]">

        <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#DC2F02] to-transparent opacity-60 transition-all duration-500 group-hover:opacity-100" />

        <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-[#DC2F02]/[0.05] blur-[90px] transition-all duration-700 group-hover:bg-[#DC2F02]/[0.13]" />

        <div className="relative p-6 sm:p-7">
          <div className="mb-7 flex items-start justify-between">
            <motion.div
              whileHover={{
                rotate: 5,
                scale: 1.06,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_15px_40px_rgba(0,0,0,0.3)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-[#DC2F02]/[0.06] opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />

              <Image
                src={item.image}
                alt={`${item.title} icon`}
                width={58}
                height={58}
                className="relative h-14 w-14 object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>

            <span className="font-mono text-sm font-bold tracking-[0.25em] text-white/15 transition-colors duration-500 group-hover:text-[#DC2F02]/60">
              {item.number}
            </span>
          </div>

          <div className="mb-2 flex items-center gap-2">
            <span className="h-[2px] w-6 bg-[#DC2F02] transition-all duration-500 group-hover:w-10" />

            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#DC2F02]">
              {item.subtitle}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <h3 className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-2xl font-black tracking-tight text-transparent transition-all duration-500 group-hover:to-[#00adef] sm:text-3xl lg:text-4xl">
              {item.title}
            </h3>

            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-500 group-hover:border-[#DC2F02]/40 group-hover:bg-[#DC2F02]/10">
              <ArrowUpRight
                size={15}
                className="text-gray-500 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#DC2F02]"
              />
            </div>
          </div>

         
        </div>

        <div className="relative flex-1 border-t border-white/[0.06] px-6 py-6 sm:px-7">
          <div className="mb-5 flex items-center gap-2">
            <Sparkles
              size={13}
              className="text-[#DC2F02]"
            />

            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-500">
              Core Technologies
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {item.skills.map((skill, skillIndex) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05 + skillIndex * 0.025,
                  }}
                  className="group/skill flex cursor-default items-center gap-3 rounded-xl border border-white/[0.06] shadow-2xl bg-[#131620] px-3 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f94144]/50 hover:bg-[#DC2F02]/[0.08] hover:shadow-[0_5px_20px_rgba(220,47,2,0.10)]"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] transition-all duration-300 group-hover/skill:bg-[#DC2F02]/10">
                    <Icon
                      size={15}
                      style={{
                        color: skill.color,
                      }}
                      className="transition-all duration-300 group-hover/skill:scale-110"
                    />
                  </div>

                  <span className="truncate text-xs font-bold text-gray-400 transition-colors duration-300 group-hover/skill:text-white xl:text-sm">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="h-[2px] w-0 bg-gradient-to-r from-[#DC2F02] via-[#DC2F02] to-transparent transition-all duration-700 group-hover:w-full" />
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
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#DC2F02]/[0.035] blur-[150px]" />

        <div className="absolute -right-40 top-[40%] h-96 w-96 rounded-full bg-[#DC2F02]/[0.03] blur-[150px]" />

        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#DC2F02]/[0.025] blur-[140px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:50px_50px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

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
              My Expertise
            </span>

            <span className="h-px w-10 bg-[#DC2F02]" />
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Skills{' '}
            <span className="text-white/40">&</span>{' '}
            <span className="bg-gradient-to-r from-white via-gray-300 to-[#DC2F02] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Technologies and tools I use to build modern, responsive and
            scalable full-stack web applications.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {topSkills.map((item, index) => (
            <SkillCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="my-12 flex items-center gap-4"
        >
          <span className="h-px flex-1 bg-white/[0.08]" />

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#DC2F02]" />

            <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.3em] text-gray-600">
              Development Ecosystem
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#DC2F02]" />
          </div>

          <span className="h-px flex-1 bg-white/[0.08]" />
        </motion.div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_1.15fr]">

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
            className="group relative"
          >
            <div className="relative h-full overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0b0d0c] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-[#DC2F02]/40 hover:shadow-[0_30px_90px_rgba(220,47,2,0.12)] sm:p-8">

              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#DC2F02]/[0.04] blur-[100px] transition-all duration-700 group-hover:bg-[#DC2F02]/[0.11]" />

              <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#DC2F02] to-transparent opacity-60" />

              <div className="relative flex items-start justify-between">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-[2px] w-6 bg-[#DC2F02]" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#DC2F02]">
                      Development Tools
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-300 sm:text-3xl">
                    Tools & Technologies
                  </h3>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#DC2F02]/30 bg-[#DC2F02]/[0.07]">
                  <Wrench
                    size={21}
                    className="text-[#DC2F02]"
                  />
                </div>
              </div>

              <p className="relative mt-4 max-w-xl text-xs leading-6 text-gray-500 sm:text-sm">
                Tools and technologies I use for development, testing, design,
                deployment and maintaining modern web applications.
              </p>

              <div className="relative my-7 h-px bg-white/[0.07]">
                <div className="absolute left-0 top-0 h-px w-20 bg-[#DC2F02]/70" />
              </div>

              <div className="relative grid grid-cols-2 gap-2 sm:grid-cols-3">
                {tools.map((tool, index) => {
                  const Icon = tool.icon;

                  return (
                    <motion.div
                      key={tool.name}
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
                      className="group/tool flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#DC2F02]/40 hover:bg-[#DC2F02]/[0.07]"
                    >
                      <Icon
                        size={14}
                        style={{
                          color: tool.color,
                        }}
                        className="shrink-0 transition-all duration-300 group-hover/tool:scale-110"
                      />

                      <span className="truncate text-xs font-bold text-gray-400 transition-colors duration-300 group-hover/tool:text-white xl:text-sm">
                        {tool.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#DC2F02] via-[#DC2F02] to-transparent transition-all duration-700 group-hover:w-full" />
            </div>
          </motion.div>

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
              duration: 0.8,
            }}
            className="group relative"
          >
            <div className="relative flex min-h-[430px] h-full items-center justify-center overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0b0d0c] shadow-[0_20px_70px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-[#DC2F02]/40 hover:shadow-[0_30px_90px_rgba(220,47,2,0.12)]">

              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,47,2,0.08),transparent_62%)]" />

              <div className="absolute left-0 right-0 top-0 z-20 h-[2px] bg-gradient-to-r from-transparent via-[#DC2F02] to-transparent opacity-60" />

              <div className="absolute left-6 top-6 z-20 flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#DC2F02] shadow-[0_0_12px_rgba(220,47,2,0.8)]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-500">
                  My Tech Stack
                </span>
              </div>

              <div className="relative z-10 flex w-full items-center justify-center">
                <TechAnimation />
              </div>

              <div className="absolute bottom-6 left-0 right-0 z-20 text-center">
                <p className="text-xs font-medium tracking-[0.25em] text-gray-500">
                  BUILD
                  <span className="mx-2 text-[#DC2F02]">•</span>
                  LEARN
                  <span className="mx-2 text-[#DC2F02]">•</span>
                  IMPROVE
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#DC2F02] via-[#DC2F02] to-transparent transition-all duration-700 group-hover:w-full" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skill;