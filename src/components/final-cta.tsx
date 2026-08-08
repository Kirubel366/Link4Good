import { Reveal } from "@/components/site-ui";

export function ProcessSteps({ compact = false }: { compact?: boolean }) {
  const steps = [
    { n: "01", title: "Connect", body: "Tell us about your organization and digital needs." },
    {
      n: "02",
      title: "Collaborate",
      body: "We collect your content, brand assets, organizational information, and other required materials.",
    },
    { n: "03", title: "Build", body: "Our student team creates and customizes your digital platform." },
    {
      n: "04",
      title: "Launch & Handoff",
      body: "We test, deploy, train your team, and transfer ownership.",
    },
  ];

  return (
    <ol className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.n} className="bg-card">
          <Reveal delay={i * 80}>
            <div className={`h-full ${compact ? "p-7" : "p-8"}`}>
              <span className="font-display text-sm font-semibold tracking-[0.2em] text-accent">{s.n}</span>
              <h3 className="mt-4 text-xl font-semibold text-primary">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
