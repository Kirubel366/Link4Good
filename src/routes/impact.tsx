import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHero, Reveal, Section, SectionHeading } from "@/components/site-ui";
import studentsImg from "@/assets/students-working.jpg";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — Link4Good" },
      {
        name: "description",
        content:
          "Link4Good measures technology by the impact it enables. An honest, forward-looking view of the organizations we support, student contributors and community outcomes.",
      },
      { property: "og:title", content: "Our Impact — Link4Good" },
      { property: "og:description", content: "Technology measured by the impact it enables." },
    ],
  }),
  component: ImpactPage,
});

const metrics = [
  { label: "Organizations Supported", value: "—" },
  { label: "Websites Delivered", value: "—" },
  { label: "Student Contributors", value: "—" },
  { label: "Communities Reached", value: "—" },
];

function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Impact"
        title="Technology measured by the impact it enables."
        intro="We're early. Everything on this page is either verified or clearly marked as what we're building toward — never invented."
      />

      <Section id="at-a-glance">
        <SectionHeading
          eyebrow="Impact at a Glance"
          title="Numbers we'll publish once they're real."
          intro="These counters stay empty until our first collaborations complete. When they fill, every figure will be traceable to a specific organization."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <div key={m.label} className="bg-card p-9">
              <Reveal delay={i * 70}>
                <p className="font-display text-5xl font-semibold text-emerald-brand">{m.value}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {m.label}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </Section>

      <Section id="organizations" tone="white">
        <SectionHeading
          eyebrow="Organizations"
          title="Nonprofit organizations we support."
          intro="As collaborations begin, each organization will appear here with its work and its platform."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="flex h-44 items-center justify-center rounded-xl border border-dashed border-border bg-background text-sm text-muted-foreground">
                Organization slot open
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="case-studies">
        <SectionHeading
          eyebrow="Stories of Impact"
          title="Case studies, told properly."
          intro="Each completed project becomes a case study: the challenge, what we built, what changed, and the human story behind it."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {[1, 2].map((i) => (
            <Reveal key={i} delay={i * 80}>
              <Card className="h-full">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent">
                  Case study {i} — coming soon
                </span>
                <div className="mt-6 space-y-4">
                  {["Organization", "Challenge", "What Link4Good built", "Result", "Human story"].map((f) => (
                    <div key={f} className="border-b border-border pb-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{f}</p>
                      <div className="mt-2 h-2 w-2/3 rounded-full bg-muted" />
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="student-impact" tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={studentsImg}
              alt="Students collaborating on a Link4Good project"
              width={1408}
              height={1008}
              loading="lazy"
              className="w-full rounded-xl border border-border object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Student Impact"
              title="Impact runs in both directions."
              intro="Students on Link4Good projects work with real organizations, real deadlines and real users — the kind of experience that's hard to find before graduating."
            />
            <ul className="mt-7 space-y-3">
              {[
                "Shipping work that people depend on",
                "Collaborating across engineering, design and outreach",
                "Communicating directly with organizations",
                "A portfolio grounded in real outcomes",
              ].map((x) => (
                <li key={x} className="flex gap-3 text-sm text-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-brand" />
                  {x}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section id="community-impact" tone="indigo">
        <SectionHeading
          tone="light"
          eyebrow="Community Impact"
          title="The outcome we're actually chasing."
          intro="Not page views. More people finding an organization they can trust, understanding what it does, and choosing to support it. We'll report those outcomes with the organizations we support as credible data becomes available."
        />
      </Section>

    </>
  );
}
