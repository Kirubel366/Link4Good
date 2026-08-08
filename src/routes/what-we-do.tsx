import { createFileRoute } from "@tanstack/react-router";
import {
	Cta,
	PageHero,
	Reveal,
	Section,
	SectionHeading,
} from "@/components/site-ui";

export const Route = createFileRoute("/what-we-do")({
	head: () => ({
		meta: [
			{ title: "What We Do — Digital Platforms for Nonprofits | Link4Good" },
			{
				name: "description",
				content:
					"Link4Good builds digital platforms for Ethiopian nonprofits: story, programs, impact, donations, volunteering, events, gallery and transparency.",
			},
			{ property: "og:title", content: "What We Do — Link4Good" },
			{
				property: "og:description",
				content:
					"Digital infrastructure for organizations creating real impact.",
			},
		],
	}),
	component: WhatWeDo,
});

const capabilities = [
	{
		t: "Story & Mission",
		b: "A clear, human introduction to who your organization is, who it serves, and why it exists — written so anyone understands it immediately.",
		preview: ["Mission statement", "Founding story", "Leadership"],
	},
	{
		t: "Programs",
		b: "Every initiative presented in its own space, with the people it serves, where it operates, and how it works.",
		preview: ["Program pages", "Locations", "Beneficiaries"],
	},
	{
		t: "Impact",
		b: "Results turned into clear statements and figures your team can update as work continues.",
		preview: ["Outcome highlights", "Progress figures", "Impact stories"],
	},
	{
		t: "Donations",
		b: "Whatever giving pathways you already use, made obvious and easy to find rather than buried.",
		preview: ["Ways to give", "Clear next step", "Supporter guidance"],
	},
	{
		t: "Volunteer",
		b: "Opportunities described plainly, with a simple path for people who want to contribute their time.",
		preview: ["Open roles", "Time commitment", "Sign-up path"],
	},
	{
		t: "Events & Updates",
		b: "A place to announce what's happening and keep your community informed between programs.",
		preview: ["Upcoming events", "News posts", "Announcements"],
	},
	{
		t: "Gallery",
		b: "Real photography of real work, presented well — the most persuasive thing most organizations already have.",
		preview: ["Photo collections", "Field moments", "Program albums"],
	},
	{
		t: "Contact & Transparency",
		b: "Accessible contact details and organizational information that help donors and supporters trust you quickly.",
		preview: ["Contact details", "Organization info", "Enquiry form"],
	},
	{
		t: "Organization Management",
		b: "Where it's useful, we set up simple ways for your team to update content without needing a developer.",
		preview: ["Content updates", "Team access", "Training included"],
	},
];

function WhatWeDo() {
	return (
		<>
			<PageHero
				eyebrow="What We Do"
				title="Digital infrastructure for organizations creating real impact."
				intro="Not a brochure page. A working platform your organization owns, understands, and can keep using long after handoff."
			>
				<Cta to="/request-support" variant="gold">
					Request Support
				</Cta>
				<Cta to="/how-it-works" variant="ghost-light">
					See How It Works
				</Cta>
			</PageHero>

			<Section id="capabilities">
				<SectionHeading
					eyebrow="Capabilities"
					title="Nine parts of a complete digital presence."
					intro="We adapt every build to the organization. These are the pieces most nonprofits need."
				/>

				<div className="mt-14 space-y-px overflow-hidden rounded-xl border border-border bg-border">
					{capabilities.map((c, i) => (
						<div key={c.t} className="bg-card">
							<Reveal>
								<div className="grid gap-8 p-8 md:grid-cols-[auto_1fr_20rem] md:items-start md:p-10">
									<span className="font-display text-sm font-semibold tracking-[0.2em] text-accent">
										{String(i + 1).padStart(2, "0")}
									</span>
									<div className="min-w-0">
										<h3 className="text-2xl font-semibold text-primary">
											{c.t}
										</h3>
										<p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
											{c.b}
										</p>
									</div>
									<div className="rounded-lg border border-border bg-background p-5">
										<p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
											In your platform
										</p>
										<ul className="mt-4 space-y-2.5">
											{c.preview.map((p) => (
												<li
													key={p}
													className="flex items-center gap-3 text-sm text-foreground"
												>
													<span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-brand" />
													{p}
												</li>
											))}
										</ul>
									</div>
								</div>
							</Reveal>
						</div>
					))}
				</div>
			</Section>

			<Section id="beyond-launch" tone="indigo">
				<SectionHeading
					tone="light"
					eyebrow="Beyond Launch"
					title="We hand over something your team can actually run."
					intro="Training, documentation and full ownership are part of every engagement — not an upsell."
				/>
			</Section>
		</>
	);
}
