import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

const skills = [
  "PCB design",
  "Schematic design",
  "Signal conditioning",
  "ESD / EMI protection",
  "Power drivers",
  "STM32",
  "SPI / I2C / UART",
  "CAN / LIN",
  "Ethernet RMII",
  "PWM",
  "ADC / DAC",
  "MATLAB / Simulink",
  "C / C++",
  "Scilab",
  "Validation testing",
  "Root-cause analysis",
];

const experience = [
  {
    title: "Electronics Hardware Engineer",
    company: "Renco GmbH",
    period: "March 2026 - Present",
    text: "Designing a compact Simulation Control Unit for automotive ECU HiL validation, including architecture, schematic design, component selection, STM32 allocation and early validation.",
  },
  {
    title: "Hardware / Embedded Systems Engineer",
    company: "ESTACARS - Formula Student",
    period: "September 2023 - January 2026",
    text: "Designed and validated safety-critical PCBAs, diagnosed EMI issues, supported powertrain commissioning and performed system-level vehicle integration.",
  },
  {
    title: "R&D Engineer",
    company: "Involute Transmissions",
    period: "May 2025 - October 2025",
    text: "Developed a Scilab engineering tool for bearing performance calculations, validated against commercial software, literature and ISO standards.",
  },
];

const stats = [
  { value: "182", label: "SCU I/O channels planned" },
  { value: "42 Mbit/s", label: "Inter-MCU SPI target" },
  { value: "36", label: "PWM channels under validation" },
  { value: "4", label: "Detailed project pages" },
];

export default function Home() {
  const featuredProject = projects[0];

  return (
    <main className="min-h-screen overflow-hidden bg-[#05070a] text-slate-100">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#05070a]/90 backdrop-blur">
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4"
          aria-label="Main navigation"
        >
          <a href="#top" className="font-semibold text-white">
            Lucas Fr&eacute;ry
          </a>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#projects" className="transition hover:text-cyan-300">
              Projects
            </a>
            <a href="#experience" className="transition hover:text-cyan-300">
              Experience
            </a>
            <a href="#skills" className="transition hover:text-cyan-300">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-cyan-300">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section
        id="top"
        className="relative border-b border-white/10 px-5 py-16 sm:py-20"
      >
        <div className="absolute inset-0 opacity-25 circuit-grid" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-300">
              Hardware Electronics Engineer
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              PCB, embedded control and validation systems for automotive and
              robotics applications.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I design hardware from requirements to validation: mixed-signal
              I/O, power drivers, protection circuitry, communication
              interfaces, STM32-based control and system-level debugging.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                View projects
              </a>
              <a
                href="/CV_Lucas_Frery.pdf"
                className="rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Download CV
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-frery-466021255/"
                className="rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <Link
            href={`/projects/${featuredProject.slug}`}
            className="group overflow-hidden rounded-lg border border-cyan-300/20 bg-slate-950/80 shadow-2xl shadow-cyan-950/30 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60"
          >
            <div className="relative aspect-video">
              <Image
                src={featuredProject.image}
                alt={`${featuredProject.shortTitle} preview`}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <p className="text-sm font-semibold text-cyan-200">
                  Featured project
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  {featuredProject.shortTitle}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  {featuredProject.summary}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="border-b border-white/10 px-5 py-10">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-3xl font-bold text-cyan-300">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-cyan-300">
              Portfolio projects
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              One page per project, focused on proof and engineering decisions.
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              These pages are drafted from your CV, portfolio PDF and notes.
              They are written for recruiters first, while keeping enough
              technical depth for engineers.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
                className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/[0.04]"
              >
                <div className="relative aspect-video overflow-hidden border-b border-white/10">
                  <Image
                    src={project.image}
                    alt={`${project.shortTitle} thumbnail`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold text-cyan-300">
                    {project.company} - {project.period}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {project.shortTitle}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-300">
                    {project.summary}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-300">
                    {project.homepageProof.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm font-semibold text-cyan-200">
                    Open project page
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="border-y border-white/10 bg-slate-950 px-5 py-16"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase text-cyan-300">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">
            Practical engineering across hardware, embedded systems and R&amp;D.
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {experience.map((item) => (
              <article
                key={item.company}
                className="rounded-lg border border-white/10 bg-[#05070a] p-5"
              >
                <p className="text-sm text-cyan-300">{item.period}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-slate-300">
                  {item.company}
                </p>
                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-300">
              Skills
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Recruiter-readable keywords, backed by project evidence.
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              The homepage makes the skill set easy to scan. Each project page
              then proves those skills through context, implementation and
              validation results.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-950 px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-[#05070a] p-6">
            <p className="text-sm font-semibold uppercase text-cyan-300">
              Education
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              ESTACA - Graduate School of Engineering
            </h2>
            <p className="mt-2 text-slate-300">
              Master of Engineering, specialized in Automotive Embedded Systems
              and Electrical Engineering. Expected graduation: Fall 2026.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-[#05070a] p-6">
            <p className="text-sm font-semibold uppercase text-cyan-300">
              Positioning
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Job applications first, freelance engineering second.
            </h2>
            <p className="mt-2 text-slate-300">
              The current website is built to communicate credibility quickly:
              role, project scale, tools, technologies, proof and outcomes.
              Future electronics calculation tools can be added later to
              increase visibility.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-16 sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-lg border border-cyan-300/20 bg-cyan-300/5 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-300">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Available from October 2026.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              Open to international relocation and focused on PCB/PCBA design
              for robotic and embedded control systems.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:lucas.frery@gmail.com"
              className="rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-frery-466021255/"
              className="rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
