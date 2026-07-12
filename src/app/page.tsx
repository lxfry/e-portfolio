import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { projects } from "@/data/projects";

const skills = [
  {
    category: "Hardware Design",
    items:
      "PCB design, schematics, layout review, signal conditioning, ESD/EMI protection, power electronics, HSD/LSD, H-bridge",
  },
  {
    category: "Embedded Interfaces",
    items:
      "STM32, SPI, I2C, UART, CAN, LIN, Ethernet RMII, USB-UART, PWM, ADC/DAC",
  },
  {
    category: "EDA Tools",
    items: "KiCad, Altium, LTspice, STM32CubeMX",
  },
  {
    category: "Programming",
    items: "C, C++, Python, MATLAB/Simulink, Scilab, LaTeX",
  },
  {
    category: "Mechanical & FEA",
    items: "SolidWorks, CATIA, 3DEXPERIENCE",
  },
  {
    category: "Languages",
    items: "French native, English fluent, Spanish elementary",
  },
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

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070a] text-slate-100">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#05070a]/90 backdrop-blur">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4"
          aria-label="Main navigation"
        >
          <a href="#top" className="font-semibold text-white">
            Lucas Fr&eacute;ry
          </a>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-300">
              About
            </a>
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
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cyan-950/20 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
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
              interfaces, embedded control and system-level debugging.
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

          <div className="relative overflow-hidden rounded-lg border border-cyan-300/20 bg-slate-950 shadow-2xl shadow-cyan-950/30">
            <Image
              src="/electronics-workbench-hero.png"
              alt="Electronics workbench with PCB debugging tools, oscilloscope, STM32 books and robotics notes"
              width={1222}
              height={1222}
              preload
              className="aspect-square w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070a]/70 via-transparent to-cyan-950/10" />
            <div className="pointer-events-none absolute inset-0 border border-white/5" />
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-white/10 px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-300">
              About
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Hardware engineering with a practical lab mindset.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>
              I am a hardware electronics engineer focused on PCB design,
              embedded control and validation for real-world systems.
            </p>
            <p>
              My work sits between circuit design, lab testing and system
              integration. I enjoy turning technical requirements into reliable
              electronics: selecting components, designing schematics, reviewing
              PCB constraints, bringing boards up on the bench and debugging
              issues with measurement tools.
            </p>
            <p>
              I am especially interested in automotive, robotics and embedded
              systems, where electronics must be robust, measurable and
              practical. My goal is to build hardware that is not only
              functional on paper, but validated, understandable and ready to
              integrate into a complete system.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "PCB design",
                "Embedded control",
                "Validation",
                "Debugging",
                "Automotive",
                "Robotics",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-sm font-semibold uppercase text-cyan-300">
            Latest projects
          </h2>
          <p
            className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-3xl font-bold text-white sm:text-4xl"
            aria-label="Problem to Analysis to Solution to Results"
          >
            <span>Problem</span>
            <span className="text-white" aria-hidden="true">
              &rarr;
            </span>
            <span>Analysis</span>
            <span className="text-white" aria-hidden="true">
              &rarr;
            </span>
            <span>Solution</span>
            <span className="text-white" aria-hidden="true">
              &rarr;
            </span>
            <span>Results.</span>
          </p>

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
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase text-cyan-300">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">
            Practical engineering across hardware, embedded systems and R&amp;D.
          </h2>
          <div className="relative mt-10 max-w-4xl">
            <div className="absolute bottom-3 left-[7px] top-3 w-px bg-gradient-to-b from-cyan-300 via-cyan-300/40 to-white/10" />
            {experience.map((item) => (
              <article
                key={item.company}
                className="relative pb-10 pl-10 last:pb-0"
              >
                <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border border-cyan-200 bg-slate-950 shadow-[0_0_18px_rgba(34,211,238,0.55)]" />
                <p className="text-sm font-semibold text-cyan-300">
                  {item.period}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-slate-300">
                  {item.company}
                </p>
                <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase text-cyan-300">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Skills proven through real engineering projects.
          </h2>
          <div className="mt-8">
            <dl className="space-y-3 text-sm leading-6 text-slate-200 sm:text-base">
              {skills.map((skill) => (
                <div key={skill.category} className="sm:flex sm:gap-2">
                  <dt className="font-semibold text-white sm:shrink-0">
                    {skill.category}:
                  </dt>
                  <dd className="text-slate-300">{skill.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-950 px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase text-cyan-300">
            Education
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">
            ESTACA - Graduate School of Engineering
          </h2>
          <p className="mt-4 max-w-5xl text-lg leading-8 text-slate-300">
            Master of Engineering, specialized in Automotive Embedded Systems
            and Electrical Engineering.
            <br />
            Expected graduation: Fall 2026.
          </p>
        </div>
      </section>

      <section id="contact" className="px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-lg border border-cyan-300/20 bg-cyan-300/5 p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
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
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
