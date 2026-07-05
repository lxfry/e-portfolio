import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, projects } from "@/data/projects";

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

  return (
    <main className="min-h-screen bg-[#05070a] text-slate-100">
      <header className="border-b border-white/10 bg-[#05070a]/95">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="text-sm font-semibold text-cyan-200">
            Lucas Fr&eacute;ry
          </Link>
          <Link
            href="/#projects"
            className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            Back to projects
          </Link>
        </nav>
      </header>

      <section className="relative border-b border-white/10 px-5 py-14 sm:py-18">
        <div className="absolute inset-0 opacity-20 circuit-grid" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
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
        </div>
      </section>

      <section className="px-5 py-14">
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

      <section className="border-t border-white/10 px-5 py-14">
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
