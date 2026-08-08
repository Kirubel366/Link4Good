import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHero, Reveal, Section, SectionHeading } from "@/components/site-ui";
import { Field, Select } from "@/components/form-fields";
import studentsImg from "@/assets/students-working.jpg";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join the Team — Student Opportunities | Link4Good" },
      {
        name: "description",
        content:
          "Use your skills for something that matters. Join Link4Good as a student contributor in engineering, design, outreach, content or operations.",
      },
      { property: "og:title", content: "Join Link4Good" },
      { property: "og:description", content: "Don't just learn skills. Use them for something that matters." },
    ],
  }),
  component: Join,
});

const areas = [
  { t: "Engineering", b: "Frontend, backend, integrations, infrastructure." },
  { t: "Design", b: "UI/UX, visual identity, graphics." },
  { t: "Outreach", b: "Research, communication, nonprofit relationships." },
  { t: "Content & Media", b: "Writing, photography, video, storytelling." },
  { t: "Operations", b: "Coordination, documentation, project management." },
];

function Join() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Join the Team"
        title="Don't just learn skills. Use them for something that matters."
        intro="Link4Good gives students real projects with real organizations — work that ships, gets used, and helps someone's mission reach further."
      />

      <Section>
        <SectionHeading eyebrow="Where You Fit" title="Five ways to contribute." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => (
            <Reveal key={a.t} delay={(i % 3) * 70}>
              <Card className="h-full">
                <span className="block h-8 w-8 rounded-md bg-emerald-brand/15 transition-colors group-hover:bg-accent/25" />
                <h3 className="mt-5 text-lg font-semibold text-primary">{a.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.b}</p>
              </Card>
            </Reveal>
          ))}
          <Reveal delay={140}>
            <div className="flex h-full flex-col justify-center rounded-xl bg-primary p-7 text-primary-foreground">
              <p className="font-display text-xl font-semibold leading-snug">
                Something else you're great at?
              </p>
              <p className="mt-2 text-sm text-primary-foreground/70">
                Tell us in the form — we build the team around the people who show up.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <img
              src={studentsImg}
              alt="Students working together"
              width={1408}
              height={1008}
              loading="lazy"
              className="w-full rounded-xl border border-border object-cover"
            />
            <div className="mt-8">
              <SectionHeading
                eyebrow="What You Get"
                title="Real work. Real people. Real outcomes."
              />
              <ul className="mt-6 space-y-3">
                {[
                  "Projects that go live and stay live",
                  "Mentorship and collaborative code review",
                  "Experience working directly with organizations",
                  "A portfolio with genuine impact behind it",
                ].map((x) => (
                  <li key={x} className="flex gap-3 text-sm text-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-brand" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-xl border border-border bg-background p-8 md:p-10">
              <h2 className="text-2xl font-semibold text-primary">Apply to Join Link4Good</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Short and honest is better than long and polished.
              </p>

              {sent ? (
                <div className="mt-8 rounded-lg border border-emerald-brand/40 bg-card p-6">
                  <p className="font-semibold text-emerald-brand">Application received.</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thanks for reaching out — we'll be in touch soon.
                  </p>
                </div>
              ) : (
                <form
                  className="mt-8 space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="University / School" name="school" />
                    <Select
                      label="Area of interest"
                      name="area"
                      options={[...areas.map((a) => a.t), "Other"]}
                    />
                  </div>
                  <Field label="Portfolio, GitHub or LinkedIn" name="link" placeholder="Optional" />
                  <Field
                    label="Why do you want to join?"
                    name="why"
                    textarea
                    placeholder="A few sentences is plenty."
                  />
                  <button
                    type="submit"
                    className="w-full rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:brightness-105 active:scale-[0.99]"
                  >
                    Apply to Join Link4Good
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
