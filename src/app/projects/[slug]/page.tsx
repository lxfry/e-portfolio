import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Fragment, type CSSProperties } from "react";
import { getProject, projects, type Project } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

type MethodImage = NonNullable<
  NonNullable<Project["approach"]>["method"][number]["images"]
>[number];

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

      <header className="relative z-30 border-b border-white/10 bg-[linear-gradient(180deg,#071225_0%,#050b18_100%)] shadow-[inset_0_-18px_35px_rgba(0,0,0,0.18)] backdrop-blur">
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
        <div className="relative mx-auto max-w-6xl">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-300">
              {project.category}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
              {project.title}
            </h1>
            <p
              className={`mt-5 text-lg leading-8 text-slate-300 ${
                project.summaryFullWidth ? "max-w-none" : "max-w-3xl"
              } sm:text-justify`}
            >
              {project.summary}
            </p>
            {project.slug === "bspd-safety-critical-pcb" ||
            project.slug === "rs485-emi-diagnosis" ||
            project.slug === "bearingsolver" ? (
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-emerald-300">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-emerald-400"
                />
                VALIDATED
              </p>
            ) : null}
            {project.slug === "simulation-control-unit" ? (
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-emerald-300">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-emerald-400"
                />
                VALIDATED DESIGN
              </p>
            ) : null}
            <div className="mt-7 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
              <Fact label="Role" value={project.role} />
              <Fact
                label={
                  project.slug === "bspd-safety-critical-pcb" ||
                  project.slug === "rs485-emi-diagnosis"
                    ? "Project"
                    : "Company"
                }
                value={project.company}
              />
              <Fact label="Period" value={project.period} />
            </div>
          </div>

        </div>
      </section>

      <ProjectApproach
        approach={project.approach}
        technologies={project.technologies}
        tools={project.tools}
        toolsTitle={project.toolsTitle}
      />

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
  toolsTitle,
}: {
  approach: NonNullable<Project["approach"]>;
  technologies: string[];
  tools: string[];
  toolsTitle?: string;
}) {
  return (
    <section className="relative z-10 border-t border-white/10 sm:[&_p]:text-justify sm:[&_li>span:last-child]:text-justify">
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
                <div className="mt-3 space-y-4">
                  {step.paragraphs.map((paragraph, paragraphIndex) => (
                    <Fragment key={paragraph}>
                      <p>{paragraph}</p>
                      {step.inlineImages
                        ?.filter(
                          (group) =>
                            group.afterParagraph === paragraphIndex + 1,
                        )
                        .map((group) => (
                          <MethodImages
                            key={`after-${group.afterParagraph}`}
                            images={group.images}
                          />
                        ))}
                    </Fragment>
                  ))}
                </div>
                {step.images ? <MethodImages images={step.images} /> : null}
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
          <Subheading>
            {approach.results.completedTitle ?? "Completed at this stage"}
          </Subheading>
          <div className="space-y-6">
            {approach.results.completed.map((group) => (
              <div key={group.title}>
                <h4 className="font-semibold text-cyan-200">{group.title}</h4>
                <div className="mt-3">
                  <Bullets items={group.items} />
                </div>
              </div>
            ))}
          </div>
        </ApproachBlock>

        {approach.nextSteps?.length ? (
          <ApproachBlock
            number="05"
            title={approach.nextStepsTitle ?? "Next Steps"}
          >
            <p>
              {approach.nextStepsIntro ??
                "The remaining work will progress from targeted prototyping of critical circuitry and schematic refinement to PCB layout, manufacturing, board bring-up, and validation of functionality and accuracy against a defined test plan covering the company's three target VCUs."}
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
        ) : null}

        <div className="px-5 py-14">
          <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
            <InfoCard title="Technologies" items={technologies} />
            <InfoCard title={toolsTitle ?? "Tools"} items={tools} />
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

function MethodImages({ images }: { images: MethodImage[] }) {
  const usesEqualHeight = images.every(
    (image) => image.fit === "equal-height",
  );
  const usesCenteredThreeImageLayout =
    images.length === 3 && usesEqualHeight;

  return (
    <div
      className={`mx-auto mt-6 grid items-center gap-4 ${
        usesCenteredThreeImageLayout
          ? "max-w-5xl items-start sm:grid-cols-2"
          : images.length === 3
          ? "max-w-5xl items-start sm:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)]"
          : images.length > 1 && usesEqualHeight
          ? "max-w-5xl lg:grid-cols-[repeat(2,max-content)] lg:items-start lg:justify-center"
          : images.length > 1
          ? "max-w-5xl sm:grid-cols-2"
          : images[0].displayWidth === "wide"
          ? "max-w-5xl sm:max-w-[75%]"
          : images[0].displayWidth === "medium"
          ? "max-w-5xl sm:max-w-[60%]"
          : "max-w-5xl sm:max-w-[50%]"
      }`}
    >
      {images.map((image, imageIndex) => (
        <figure
          key={image.src}
          style={
            image.fit === "equal-height"
              ? ({
                  "--equal-height-width": `${
                    (image.width / image.height) *
                    (image.displayHeightRem ?? 18)
                  }rem`,
                  "--equal-height-height": `${
                    image.displayHeightRem ?? 18
                  }rem`,
                } as CSSProperties)
              : undefined
          }
          className={`${
            usesCenteredThreeImageLayout && imageIndex === 2
              ? "w-full justify-self-center sm:col-span-2 sm:w-[var(--equal-height-width)]"
              : usesCenteredThreeImageLayout
              ? "w-full justify-self-center sm:w-[var(--equal-height-width)]"
              : images.length === 3 && imageIndex === 0
              ? "sm:row-span-2"
              : image.fit === "equal-height"
              ? "w-full justify-self-center lg:w-[var(--equal-height-width)]"
              : ""
          }`}
        >
          <div
            className={`overflow-hidden rounded-lg border border-white/10 bg-white ${
              images.length > 1 &&
              images.length !== 3 &&
              image.fit !== "equal-height"
                ? "aspect-[4/3]"
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
                  ? usesCenteredThreeImageLayout
                    ? "h-auto w-full object-contain sm:h-[var(--equal-height-height)]"
                    : "h-auto w-full lg:h-[var(--equal-height-height)]"
                  : images.length > 1 && images.length !== 3
                  ? `h-full w-full ${
                      image.fit === "cover" ? "object-cover" : "object-contain"
                    }`
                  : "h-auto w-full"
              }
            />
          </div>
          {image.caption ? (
            <figcaption className="mt-2 text-center text-sm leading-relaxed text-slate-400">
              {image.caption}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
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
