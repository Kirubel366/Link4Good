import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import nonprofitImg from "@/assets/non-profit-work.jpg";
import { ProcessSteps } from "@/components/final-cta";
import { Field, Select } from "@/components/form-fields";
import {
	PageHero,
	Reveal,
	Section,
	SectionHeading,
} from "@/components/site-ui";

export const Route = createFileRoute("/request-support")({
	head: () => ({
		meta: [
			{ title: "Request Support — Link4Good" },
			{
				name: "description",
				content:
					"Request support from Link4Good for your nonprofit or charitable organization in Ethiopia. Tell us about your mission, challenges, and goals.",
			},
			{ property: "og:title", content: "Request Support — Link4Good" },
			{
				property: "og:description",
				content:
					"A clearer digital presence for organizations doing meaningful work in Ethiopia.",
			},
		],
	}),
	component: RequestSupport,
});

const supportBenefits = [
	{
		t: "A stronger digital presence",
		b: "A website designed to make your mission clear, credible and easy to support.",
	},
	{
		t: "Mission explained with clarity",
		b: "Visitors can quickly understand who you are, what you do, and why it matters.",
	},
	{
		t: "Programs and impact shown well",
		b: "Your work gets the structure and storytelling it deserves.",
	},
	{
		t: "More ways to connect",
		b: "Donation, volunteering, outreach and updates all in one place.",
	},
	{
		t: "A platform your team owns",
		b: "We build it with your organization, train your team, and hand it over responsibly.",
	},
	{
		t: "A smoother path to support",
		b: "People who care about your mission can find the right next step without friction.",
	},
];

const faqs = [
	{
		q: "Who can request support?",
		a: "We work with Ethiopian nonprofit and charitable organizations whose work is rooted in community impact and whose digital presence could be stronger.",
	},
	{
		q: "Is there a cost for this support?",
		a: "The current model is designed to be accessible for organizations doing meaningful work, with the platform and support provided through Link4Good's student-led initiative.",
	},
	{
		q: "What information do we need to provide?",
		a: "Your mission, history, programs, locations, photos, branding, contact details, and any relevant legal or consent information to help us build accurately and respectfully.",
	},
	{
		q: "How long does it take?",
		a: "It depends on the organization, team availability and content readiness. We usually provide a realistic timeline after the first conversation.",
	},
	{
		q: "Who owns the website after launch?",
		a: "Your organization does. We provide the platform, training and handoff so your team can continue to maintain it confidently.",
	},
	{
		q: "What happens after the site is live?",
		a: "We test the platform, support launch, and train your team to manage the site independently going forward.",
	},
];

function RequestSupport() {
	const [sent, setSent] = useState(false);
	const [open, setOpen] = useState<number | null>(0);

	return (
		<>
			<PageHero
				eyebrow="Request Support"
				title="A clearer digital presence for the work your organization is already doing."
				intro="Link4Good helps Ethiopian nonprofits build simple, credible, and useful digital platforms that make it easier for supporters to understand, trust, and act."
			/>

			<Section>
				<div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
					<Reveal>
						<SectionHeading
							eyebrow="What you receive"
							title="A complete platform, without the usual friction."
						/>
						<div className="mt-10 grid gap-6 sm:grid-cols-2">
							{supportBenefits.map((item) => (
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
						<img
							src={nonprofitImg}
							alt="Nonprofit team showing community impact"
							width={1408}
							height={1008}
							loading="lazy"
							className="w-full rounded-xl border border-border object-cover"
						/>
					</Reveal>
				</div>
			</Section>

			<Section tone="white">
				<SectionHeading
					eyebrow="What we need"
					title="A few details from your team will help us move quickly."
				/>
				<ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
					{[
						"Mission, history and leadership",
						"Programs and service locations",
						"Photos and media from your work",
						"Logo and brand assets",
						"Contact information and social links",
						"Donation or volunteer pathways",
						"Consent and legal materials",
					].map((item) => (
						<li
							key={item}
							className="flex gap-3 rounded-lg border border-border bg-background px-5 py-4 text-sm"
						>
							<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-brand" />
							{item}
						</li>
					))}
				</ul>
			</Section>

			<Section>
				<SectionHeading
					eyebrow="Process"
					title="How the support process works."
				/>
				<div className="mt-12">
					<ProcessSteps />
				</div>
			</Section>

			<Section tone="white">
				<SectionHeading
					eyebrow="FAQ"
					title="Questions organizations usually ask."
				/>
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
				<div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-start">
					<SectionHeading
						tone="light"
						eyebrow="Request form"
						title="Tell us about your organization."
						intro="Share a little about your mission, current challenges and what kind of support would help most."
					/>
					<Reveal delay={100}>
						<div className="rounded-xl bg-card p-8 text-card-foreground md:p-10">
							{sent ? (
								<div className="py-6">
									<p className="font-display text-xl font-semibold text-emerald-brand">
										Thank you — your request has been sent.
									</p>
									<p className="mt-3 text-sm text-muted-foreground">
										We’ll review your details and follow up with the next step
										in the process.
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
										<Field label="Organization name" name="org" required />
										<Field label="Contact person" name="contact" required />
									</div>
									<div className="grid gap-5 sm:grid-cols-2">
										<Field label="Email" name="email" type="email" required />
										<Field label="Phone" name="phone" type="tel" />
									</div>
									<div className="grid gap-5 sm:grid-cols-2">
										<Select
											label="Organization type"
											name="type"
											options={[
												"Nonprofit organization",
												"Charitable association",
												"Community group",
												"Foundation",
												"Other",
											]}
										/>
										<Field
											label="Current website"
											name="website"
											placeholder="Optional"
										/>
									</div>
									<Field
										label="What digital challenges are you facing?"
										name="challenges"
										textarea
									/>
									<Field
										label="What would you like Link4Good to help with?"
										name="help"
										textarea
									/>
									<Field
										label="Additional information"
										name="extra"
										textarea
										placeholder="Optional"
									/>
									<button
										type="submit"
										className="w-full rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:brightness-105 active:scale-[0.99]"
									>
										Send Request
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
