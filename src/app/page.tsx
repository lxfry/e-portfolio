import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { projects } from "@/data/projects";

const skills = [
  {
    category: "Electronics",
    items:
      "Electrical system architecture, schematic capture, PCB design & layout, power distribution, protection circuitry, wiring harness design, EMI/EMC, signal integrity, hardware bring-up, debugging & validation",
  },
  {
    category: "Embedded Systems & Interfaces",
    items:
      "STM32, microcontrollers, RS-485, SPI, I\u00B2C, UART/USART, CAN, LIN, Ethernet, USB, PWM, ADC/DAC",
  },
  {
    category: "EDA Tools",
    items: "Altium Designer, KiCad, LTspice",
  },
  {
    category: "Programming",
    items: "C, C++, Python, MATLAB/Simulink, LaTeX",
  },
  {
    category: "Mechanical & FEA",
    items: "SolidWorks, CATIA, 3DEXPERIENCE",
  },
  {
    category: "Languages",
    items: "French native, English fluent, German elementary, Spanish elementary",
  },
];

const experience = [
  {
    title: "Electronics Hardware Engineer",
    company: "Renco GmbH - Germany",
    period: "March 2026 - September 2026",
    text: "Leading the end-to-end development of a flexible and compact hardware-in-the-loop (HiL) system from requirements definition and electrical architecture through component selection, schematic and PCB design, prototyping, bring-up, and debugging.",
  },
  {
    title: "Hardware / Embedded Systems Engineer",
    company: "ESTACARS Formula Student - France",
    period: "September 2023 - January 2026",
    text: "Designed, prototyped, integrated and validated PCBs for safety-critical electronics, solved inverter-induced RS-485 communication failures, and supported high-voltage powertrain integration for a Formula Student EV.",
  },
  {
    title: "R&D Engineer",
    company: "Involute Transmissions - France",
    period: "May 2025 - October 2025",
    text: "Designed and programmed a Scilab-based engineering tool with GUI to automate bearing performance calculations and support engineering decision-making.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070a] text-slate-100">
      <Image
        src="/hero-pcb-background.jpeg"
        alt=""
        width={1920}
        height={1080}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 h-screen w-screen object-cover opacity-80"
        sizes="100vw"
      />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[#05070a]/35" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-r from-[#05070a]/90 via-[#05070a]/55 to-[#05070a]/20" />
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[linear-gradient(180deg,#071225_0%,#050b18_100%)] shadow-[inset_0_-18px_35px_rgba(0,0,0,0.18)] backdrop-blur">
        <nav
          className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-5 py-4"
          aria-label="Main navigation"
        >
          <a href="#top" className="font-semibold text-white">
            Lucas Frery
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
          <div
            className="mt-3 flex w-full gap-4 overflow-x-auto pb-1 text-sm text-slate-300 md:hidden"
            aria-label="Mobile navigation"
          >
            <a href="#about" className="shrink-0 transition hover:text-cyan-300">
              About
            </a>
            <a href="#projects" className="shrink-0 transition hover:text-cyan-300">
              Projects
            </a>
            <a href="#experience" className="shrink-0 transition hover:text-cyan-300">
              Experience
            </a>
            <a href="#skills" className="shrink-0 transition hover:text-cyan-300">
              Skills
            </a>
            <a href="#contact" className="shrink-0 transition hover:text-cyan-300">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section
        id="top"
        className="relative z-10 overflow-hidden border-b border-white/10 px-5 py-16 sm:py-20"
      >
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cyan-950/20 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div>
            <h1 className="text-5xl font-bold leading-none text-white sm:text-7xl lg:text-8xl">
              LUCAS FRERY
            </h1>
            <p className="mt-5 text-2xl font-bold uppercase text-white sm:text-3xl">
              ELECTRONICS HARDWARE ENGINEER
            </p>
            <p className="mt-3 text-lg font-semibold uppercase text-cyan-300 sm:text-xl">
              PCB | EMBEDDED SYSTEMS | SYSTEM INTEGRATION
            </p>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 sm:text-justify">
              I develop electronic systems from initial requirements through
              electrical architecture, component selection, schematic and PCB
              design, prototype bring-up, system integration, and validation.
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
              <a
                href="https://github.com/lxfry"
                className="rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-cyan-300/20 bg-slate-950 shadow-2xl shadow-cyan-950/30">
            <Image
              src="/lucas-frery-portrait.png"
              alt="Portrait of Lucas Frery"
              width={1222}
              height={1222}
              preload
              className="aspect-square w-full object-cover object-[center_28%]"
              sizes="(max-width: 1024px) 100vw, 36vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070a]/70 via-transparent to-cyan-950/10" />
            <div className="pointer-events-none absolute inset-0 border border-white/5" />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative z-10 border-b border-white/10 bg-[linear-gradient(180deg,#071225_0%,#050b18_100%)] px-5 py-16 shadow-[inset_0_24px_60px_rgba(0,0,0,0.24)]"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-300">
              About
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Hardware engineering with a practical lab mindset.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-300 sm:[&_p]:text-justify">
            <p>
              I am an electronics hardware engineer specializing in PCB design,
              embedded control, and validation for real-world systems.
            </p>
            <p>
              My work bridges circuit design, lab testing, and system
              integration. I enjoy translating technical requirements into
              reliable electronics—from component selection and schematic
              design to PCB review, board bring-up, and measurement-led
              debugging.
            </p>
            <p>
              I am particularly interested in robotics, UAVs, autonomous
              systems and defence technologies, where electronics must be
              robust, measurable, and practical. My focus is on developing hardware
              that is not only functional on paper, but validated, well
              understood, and ready for integration into a complete system.
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

      <section id="projects" className="relative z-10 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-sm font-semibold uppercase text-cyan-300">
            Selected projects
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
                className="group overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(180deg,#071225_0%,#030712_100%)] shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-[0_22px_55px_rgba(0,0,0,0.38)]"
              >
                <div className="relative aspect-video overflow-hidden border-b border-white/10">
                  {project.homepageImages ? (
                    <div
                      className={`grid h-full grid-rows-[0.75fr_1.25fr] gap-1 bg-slate-950 ${
                  project.homepageImageLayout === "wide-left"
                    ? "grid-cols-[1.8fr_1fr]"
                    : project.homepageImageLayout === "portrait-left"
                    ? "grid-cols-2"
                    : "grid-cols-[0.9fr_1.4fr]"
                }`}
                    >
                      {project.homepageImages.map((image, imageIndex) => (
                        <div
                          key={image.src}
                          className={`relative overflow-hidden ${
                            imageIndex === 0
                              ? "row-span-2 bg-slate-950"
                              : "bg-white"
                          }`}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className={`transition duration-500 group-hover:scale-105 ${
                              image.fit === "contain" ||
                              (!image.fit && imageIndex >= 2)
                                ? "object-contain"
                                : "object-cover"
                            }`}
                            sizes="(max-width: 1024px) 50vw, 25vw"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Image
                      src={project.image}
                      alt={`${project.shortTitle} thumbnail`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  )}
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold text-cyan-300">
                    {project.homepageCompany ?? project.company} |{" "}
                    {project.period}
                  </p>
                  {project.slug === "simulation-control-unit" ? (
                    <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-emerald-300">
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 rounded-full bg-emerald-400"
                      />
                      VALIDATED DESIGN
                    </p>
                  ) : project.slug === "bspd-safety-critical-pcb" ||
                    project.slug === "rs485-emi-diagnosis" ||
                    project.slug === "bearingsolver" ? (
                    <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-emerald-300">
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 rounded-full bg-emerald-400"
                      />
                      VALIDATED
                    </p>
                  ) : null}
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {project.shortTitle}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-300 sm:text-justify">
                    {project.summary}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-300">
                    {project.homepageProof.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        <span className="sm:text-justify">{item}</span>
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
        className="relative z-10 border-y border-white/10 bg-[linear-gradient(180deg,#071225_0%,#050b18_100%)] px-5 py-16 shadow-[inset_0_24px_60px_rgba(0,0,0,0.24)]"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase text-cyan-300">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">
            Engineering experience across electronics, embedded systems, and R&amp;D.
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
                <p className="mt-4 max-w-3xl leading-7 text-slate-300 sm:text-justify">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="relative z-10 px-5 py-16 sm:py-20">
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
                  <dd className="text-slate-300 sm:text-justify">
                    {skill.items}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-[linear-gradient(180deg,#071225_0%,#050b18_100%)] px-5 py-16 shadow-[inset_0_24px_60px_rgba(0,0,0,0.24)]">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase text-cyan-300">
            Education
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">
            Master of Engineering
          </h2>
          <p className="mt-4 max-w-5xl text-lg leading-8 text-slate-300 sm:text-justify">
            ESTACA &ndash; Graduate School of Engineering
            <br />
            Specialized in Automotive Embedded Systems and Electrical Engineering
          </p>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-lg border border-cyan-300/20 bg-[linear-gradient(180deg,#071225_0%,#030712_100%)] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.28)] sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-300">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Let&apos;s discuss your next hardware challenge.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300 sm:text-justify">
              Open to international relocation and freelance projects.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-[linear-gradient(180deg,#071225_0%,#050b18_100%)] px-5 py-6 shadow-[inset_0_18px_35px_rgba(0,0,0,0.18)]">
        <div className="mx-auto grid max-w-7xl gap-3 text-sm text-slate-300 sm:grid-cols-3 sm:items-center">
          <p className="sm:justify-self-start">
            &copy; 2026 Lucas Frery. All rights reserved.
          </p>
          <Link
            href="/privacy-policy"
            className="font-semibold text-cyan-300 transition hover:text-cyan-200 sm:justify-self-center"
          >
            Privacy Policy
          </Link>
          <span aria-hidden="true" className="hidden sm:block" />
        </div>
      </footer>
    </main>
  );
}
