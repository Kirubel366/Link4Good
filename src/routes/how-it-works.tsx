import { createFileRoute } from "@tanstack/react-router";
import { ProcessSteps } from "@/components/final-cta";
import {
	Cta,
	PageHero,
	Reveal,
	Section,
	SectionHeading,
} from "@/components/site-ui";

export const Route = createFileRoute("/how-it-works")({
	head: () => ({
		meta: [
			{ title: "How It Works — The Link4Good Process" },
			{
				name: "description",
				content:
					"From first conversation to digital launch: how Link4Good works with Ethiopian nonprofits, and what your organization needs to provide.",
			},
			{ property: "og:title", content: "How It Works — Link4Good" },
			{
				property: "og:description",
				content: "From first conversation to digital launch.",
			},
		],
	}),
	component: HowItWorks,
});

const needs = [
	{
		t: "Organization information",
		b: "Legal name, registration details, locations and leadership.",
	},
	{
		t: "Mission and history",
		b: "Why the organization exists and how it started.",
	},
	{ t: "Program details", b: "What you run, who it serves, and where." },
	{ t: "Images and media", b: "Photography from your programs and community." },
	{
		t: "Branding assets",
		b: "Logo files and any colors or typefaces you already use.",
	},
	{ t: "Contact information", b: "Phone, email, address and social accounts." },
	{
		t: "Donation information",
		b: "The giving pathways you'd like supporters to use.",
	},
	{
		t: "Consent & legal materials",
		b: "Permissions for photos and any required documentation.",
	},
];

function HowItWorks() {
	return (
		<>
			<PageHero
				eyebrow="How It Works"
				title="From first conversation to digital launch."
				intro="A clear four-step process. No technical jargon, no surprises, and a finished platform your team owns."
			>
				<Cta to="/request-support" variant="gold">
					Request Support
				</Cta>
			</PageHero>

			<Section id="process">
				<SectionHeading
					eyebrow="The Process"
					title="Four steps, start to handoff."
				/>
				<div className="mt-12">
					<ProcessSteps />
				</div>
			</Section>

			<Section id="your-part" tone="white">
				<SectionHeading
					eyebrow="Your Part"
					title="What we need from your organization."
					intro="The better your materials, the stronger the result. We'll help you gather anything that's missing."
				/>
				<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{needs.map((n, i) => (
						<Reveal key={n.t} delay={(i % 4) * 70}>
							<div className="h-full border-t-2 border-emerald-brand pt-5">
								<h3 className="text-base font-semibold text-primary">{n.t}</h3>
								<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
									{n.b}
								</p>
							</div>
						</Reveal>
					))}
				</div>
			</Section>
		</>
	);
}
