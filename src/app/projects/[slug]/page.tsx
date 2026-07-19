import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, projects, type Project } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project not found | Lucas Frery",
    };
  }

  return {
    title: `${project.shortTitle} | Lucas Frery`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const isHilProject = project.slug === "simulation-control-unit";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070a] text-slate-100">
      {isHilProject ? (
        <>
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
        </>
      ) : null}

      <header
        className={`relative z-30 border-b border-white/10 ${
          isHilProject
            ? "bg-[linear-gradient(180deg,#071225_0%,#050b18_100%)] shadow-[inset_0_-18px_35px_rgba(0,0,0,0.18)] backdrop-blur"
            : "bg-[#05070a]/95"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="text-sm font-semibold text-cyan-200">
            Lucas Frery
          </Link>
          <Link
            href="/#projects"
            className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            Back to projects
          </Link>
        </nav>
      </header>

      <section className="relative z-10 border-b border-white/10 px-5 py-14 sm:py-18">
        {!isHilProject ? (
          <div className="absolute inset-0 opacity-20 circuit-grid" />
        ) : null}
        <div
          className={`relative mx-auto max-w-6xl ${
            isHilProject
              ? ""
              : "grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center"
          }`}
        >
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-300">
              {project.category}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              {project.summary}
            </p>
            <div className="mt-7 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
              <Fact label="Company" value={project.company} />
              <Fact label="Period" value={project.period} />
              <Fact label="Role" value={project.role} />
            </div>
          </div>

          {!isHilProject ? (
            <div className="overflow-hidden rounded-lg border border-cyan-300/20 bg-white/[0.03] shadow-2xl shadow-cyan-950/30">
              <Image
                src={project.image}
                alt={`${project.shortTitle} portfolio page`}
                width={2880}
                height={1620}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          ) : null}
        </div>
      </section>

      {project.approach ? (
        <ProjectApproach
          approach={project.approach}
          technologies={project.technologies}
          tools={project.tools}
        />
      ) : (
        <section className="relative z-10 px-5 py-14">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <aside className="space-y-5">
              <InfoCard title="Technologies" items={project.technologies} />
              <InfoCard title="Tools" items={project.tools} />
            </aside>

            <article className="space-y-8">
              <ProjectSection title="Context">
                <p>{project.context}</p>
              </ProjectSection>

              <ProjectSection title="My Role">
                <p>{project.roleDescription}</p>
              </ProjectSection>

              <ProjectSection title="Implementation">
                <Bullets items={project.implementation} />
              </ProjectSection>

              <ProjectSection title="Proof and Scale">
                <Bullets items={project.proof} />
              </ProjectSection>

              <ProjectSection title="Results">
                <Bullets items={project.results} />
              </ProjectSection>

              {project.nextSteps ? (
                <ProjectSection title="Current Next Steps">
                  <Bullets items={project.nextSteps} />
                </ProjectSection>
              ) : null}
            </article>
          </div>
        </section>
      )}

      {!isHilProject ? (
        <section className="relative z-10 border-t border-white/10 px-5 py-14">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase text-cyan-300">
              Original portfolio page
            </p>
            <div className="mt-5 overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]">
              <Image
                src={project.image}
                alt={`${project.shortTitle} original portfolio layout`}
                width={2880}
                height={1620}
                className="h-auto w-full"
                sizes="100vw"
              />
            </div>
          </div>
        </section>
      ) : null}

      {isHilProject ? (
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
      ) : null}
    </main>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
      <p className="text-xs font-semibold uppercase text-cyan-300">{label}</p>
      <p className="mt-2 text-slate-100">{value}</p>
    </div>
  );
}

function ProjectApproach({
  approach,
  technologies,
  tools,
}: {
  approach: NonNullable<Project["approach"]>;
  technologies: string[];
  tools: string[];
}) {
  return (
    <section className="relative z-10 border-t border-white/10">
      <div>
        <ApproachBlock number="01" title="Problem">
          <Paragraphs items={approach.problem.paragraphs} />
          <Subheading>Core requirements</Subheading>
          <Bullets items={approach.problem.requirements} />
        </ApproachBlock>

        <ApproachBlock number="02" title="Solution" transparent>
          <Paragraphs items={approach.solution.paragraphs} />
          <Subheading>Platform capabilities</Subheading>
          <Bullets items={approach.solution.features} />
        </ApproachBlock>

        <ApproachBlock number="03" title="Method">
          <div className="space-y-5">
            {approach.method.map((step) => (
              <div
                key={step.title}
                className="rounded-lg border border-white/10 bg-slate-950/70 p-5"
              >
                <h3 className="text-lg font-semibold text-cyan-200">
                  {step.title}
                </h3>
                <div className="mt-3">
                  <Paragraphs items={step.paragraphs} />
                </div>
                {step.images ? (
                  <div
                    className={`mx-auto mt-6 grid items-center gap-4 ${
                      step.images.length === 3
                        ? "max-w-5xl items-start sm:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)]"
                        : step.images.length > 1
                        ? "max-w-5xl sm:grid-cols-2"
                        : step.images[0].displayWidth === "wide"
                        ? "max-w-5xl sm:max-w-[75%]"
                        : "max-w-5xl sm:max-w-[50%]"
                    }`}
                  >
                    {step.images.map((image, imageIndex) => (
                      <div
                        key={image.src}
                        className={`overflow-hidden rounded-lg border border-white/10 bg-white ${
                          step.images.length === 3 && imageIndex === 0
                            ? "sm:row-span-2"
                            : step.images.length > 1 &&
                                step.images.length !== 3 &&
                                image.fit !== "equal-height"
                            ? "aspect-[4/3]"
                            : image.fit === "equal-height"
                            ? "justify-self-center"
                            : ""
                        }`}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          className={
                            image.fit === "equal-height"
                              ? "h-auto w-full sm:h-80 sm:w-auto"
                              : step.images.length > 1 &&
                            step.images.length !== 3
                              ? `h-full w-full ${
                                  image.fit === "cover"
                                    ? "object-cover"
                                    : "object-contain"
                                }`
                              : "h-auto w-full"
                          }
                        />
                      </div>
                    ))}
                  </div>
                ) : null}
                {step.details ? (
                  <div className="mt-4">
                    <Bullets items={step.details} />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </ApproachBlock>

        <ApproachBlock number="04" title="Results" transparent>
          <Paragraphs items={approach.results.paragraphs} />
          <Subheading>Completed at this stage</Subheading>
          <Bullets items={approach.results.completed} />
        </ApproachBlock>

        <ApproachBlock number="05" title="Next Steps">
          <p>
            The remaining work is organized around proving the critical design
            assumptions first, then completing the hardware and validating it
            against the three target ECUs.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {approach.nextSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-lg border border-white/10 bg-slate-950/70 p-5"
              >
                <h3 className="font-semibold text-cyan-200">{step.title}</h3>
                <div className="mt-3">
                  <Bullets items={step.actions} />
                </div>
              </div>
            ))}
          </div>
        </ApproachBlock>

        <div className="px-5 py-14">
          <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
            <InfoCard title="Technologies" items={technologies} />
            <InfoCard title="Tools" items={tools} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ApproachBlock({
  number,
  title,
  children,
  transparent = false,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  transparent?: boolean;
}) {
  return (
    <section
      className={`border-b border-white/10 px-5 py-14 ${
        transparent
          ? "bg-transparent"
          : "bg-[linear-gradient(180deg,#071225_0%,#050b18_100%)] shadow-[inset_0_24px_60px_rgba(0,0,0,0.24)]"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center gap-4 border-b border-white/10 pb-5">
          <span className="text-sm font-semibold text-cyan-300">{number}</span>
          <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
        <div className="leading-8 text-slate-300">{children}</div>
      </div>
    </section>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-3 mt-6 text-lg font-semibold text-white">{children}</h3>
  );
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-950 p-5">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-sm text-cyan-100"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.03] p-5 sm:p-6">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="mt-4 leading-8 text-slate-300">{children}</div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
