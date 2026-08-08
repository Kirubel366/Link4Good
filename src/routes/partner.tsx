import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Field } from "@/components/form-fields";
import {
	PageHero,
	Reveal,
	Section,
	SectionHeading,
} from "@/components/site-ui";

export const Route = createFileRoute("/partner")({
	head: () => ({
		meta: [
			{ title: "Partner With Us — Link4Good" },
			{
				name: "description",
				content:
					"Support Link4Good by backing the student-led effort to help Ethiopian nonprofits build stronger digital platforms.",
			},
			{ property: "og:title", content: "Partner With Us — Link4Good" },
			{
				property: "og:description",
				content:
					"Help Link4Good expand access to digital infrastructure for nonprofits in Ethiopia.",
			},
		],
	}),
	component: Partner,
});

const supportWays = [
	{
		t: "Fund the foundation",
		b: "Help us sustain the infrastructure, tooling, and coordination behind every nonprofit site we build.",
	},
	{
		t: "Back student builders",
		b: "Support the next generation of tech and design talent creating public-interest digital work.",
	},
	{
		t: "Expand access",
		b: "Make it possible for more organizations to launch a modern, credible presence online.",
	},
	{
		t: "Strengthen impact",
		b: "Help good work become easier to find, understand, and support by the people who care.",
	},
];

const faqs = [
	{
		q: "Who is this page for?",
		a: "This page is for individuals, foundations, organizations, and businesses who want to help Link4Good expand its mission and support nonprofit digital infrastructure in Ethiopia.",
	},
	{
		q: "What does support look like?",
		a: "Support can come in the form of funding, mentoring, visibility, strategic partnerships, or practical in-kind contributions that help the initiative scale responsibly.",
	},
	{
		q: "How does supporter funding help?",
		a: "It helps cover the tools, coordination, training, and technical support needed to deliver modern digital platforms for organizations with limited capacity.",
	},
	{
		q: "Is this connected to nonprofit requests?",
		a: "No. This page is specifically for supporters of Link4Good. Nonprofit requests for support are handled through a separate Request Support path.",
	},
];

function Partner() {
	const [sent, setSent] = useState(false);
	const [open, setOpen] = useState<number | null>(0);

	return (
		<>
			<PageHero
				eyebrow="Partner With Us"
				title="Help Link4Good build the digital infrastructure that mission-driven organizations need."
				intro="When people and organizations support Link4Good, they make it possible for more Ethiopian nonprofits to reach the communities they serve with clarity, credibility, and a stronger online presence."
			/>

			<Section>
				<div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
					<Reveal>
						<SectionHeading
							eyebrow="Why it matters"
							title="The work is real. The need is growing. The opportunity is bigger than one website."
						/>
						<div className="mt-10 grid gap-6 sm:grid-cols-2">
							{supportWays.map((item) => (
								<div key={item.t} className="border-t-2 border-accent pt-4">
									<h3 className="text-sm font-semibold text-primary">
										{item.t}
									</h3>
									<p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
										{item.b}
									</p>
								</div>
							))}
						</div>
					</Reveal>
					<Reveal delay={100}>
						<div className="rounded-2xl border border-border bg-card p-8 shadow-[0_24px_80px_-40px_rgba(30,58,138,0.38)]">
							<p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
								What your support enables
							</p>
							<ul className="mt-8 space-y-5">
								{[
									"More nonprofits gain a credible public-facing digital home.",
									"Student teams receive mentorship and the tools to build responsibly.",
									"Organizations can focus more on service delivery and less on digital fragmentation.",
									"Supporters become part of a practical, measurable impact model.",
								].map((item) => (
									<li
										key={item}
										className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
									>
										<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
										{item}
									</li>
								))}
							</ul>
						</div>
					</Reveal>
				</div>
			</Section>

			<Section tone="white">
				<SectionHeading
					eyebrow="How supporters help"
					title="Partnering with Link4Good means helping the ecosystem, not just one page."
				/>
				<div className="mt-10 grid gap-6 md:grid-cols-3">
					{[
						{
							t: "Financial support",
							b: "Fund the tools, coordination, and infrastructure that make nonprofit work structurally sustainable.",
						},
						{
							t: "Strategic partnership",
							b: "Share expertise, networks, and capacity to help the initiative grow with real-world support.",
						},
						{
							t: "Visibility and advocacy",
							b: "Help more people understand the work and why digital access matters for mission organizations.",
						},
					].map((item) => (
						<div
							key={item.t}
							className="rounded-xl border border-border bg-background p-6"
						>
							<h3 className="text-lg font-semibold text-primary">{item.t}</h3>
							<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
								{item.b}
							</p>
						</div>
					))}
				</div>
			</Section>

			<Section tone="white">
				<SectionHeading eyebrow="FAQ" title="Questions supporters ask." />
				<div className="mt-10 max-w-3xl divide-y divide-border overflow-hidden rounded-xl border border-border bg-background">
					{faqs.map((f, i) => (
						<div key={f.q}>
							<button
								type="button"
								onClick={() => setOpen(open === i ? null : i)}
								aria-expanded={open === i}
								className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
							>
								<span className="text-sm font-semibold text-primary">
									{f.q}
								</span>
								<span
									aria-hidden
									className={`shrink-0 text-accent transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}
								>
									+
								</span>
							</button>
							<div
								className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
							>
								<div className="overflow-hidden">
									<p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
										{f.a}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</Section>

			<Section tone="indigo">
				<div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
					<SectionHeading
						tone="light"
						eyebrow="Supporter form"
						title="Let’s start a conversation."
						intro="Tell us a little about your interest in supporting Link4Good. We’ll reach out with next steps and opportunities to partner in a way that matches your goals."
					/>
					<Reveal delay={100}>
						<div className="rounded-xl bg-card p-8 text-card-foreground md:p-10">
							{sent ? (
								<div className="py-6">
									<p className="font-display text-xl font-semibold text-emerald-brand">
										Thank you — we’ve received your message.
									</p>
									<p className="mt-3 text-sm text-muted-foreground">
										We’ll be in touch soon to discuss how you’d like to support
										Link4Good.
									</p>
								</div>
							) : (
								<form
									className="space-y-5"
									onSubmit={(e) => {
										e.preventDefault();
										setSent(true);
									}}
								>
									<div className="grid gap-5 sm:grid-cols-2">
										<Field label="Full name" name="name" required />
										<Field
											label="Organization"
											name="organization"
											placeholder="Optional"
										/>
									</div>
									<div className="grid gap-5 sm:grid-cols-2">
										<Field label="Email" name="email" type="email" required />
										<Field label="Phone" name="phone" type="tel" />
									</div>
									<Field
										label="How would you like to support Link4Good?"
										name="support"
										textarea
									/>
									<Field
										label="Anything else we should know?"
										name="notes"
										textarea
										placeholder="Optional"
									/>
									<button
										type="submit"
										className="w-full rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:brightness-105 active:scale-[0.99]"
									>
										Send Message
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
