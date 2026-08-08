import { createFileRoute } from "@tanstack/react-router";
import nonprofitImg from "@/assets/non-profit-work.jpg";
import {
	Card,
	Cta,
	PageHero,
	Reveal,
	Section,
	SectionHeading,
} from "@/components/site-ui";

export const Route = createFileRoute("/why-link4good")({
	head: () => ({
		meta: [
			{ title: "Why Link4Good — The Digital Gap for Ethiopian Nonprofits" },
			{
				name: "description",
				content:
					"Why Link4Good exists: the digital gap facing Ethiopian nonprofits and what stronger digital infrastructure makes possible.",
			},
			{ property: "og:title", content: "Why Link4Good" },
			{
				property: "og:description",
				content:
					"The digital gap facing Ethiopian nonprofits — and why we're closing it.",
			},
		],
	}),
	component: WhyPage,
});

function WhyPage() {
	return (
		<>
			<PageHero
				eyebrow="Why Link4Good"
				title="Good work deserves to be seen, trusted, and supported."
				intro="Impact doesn't spread on its own. It spreads when people can find it, understand it, and believe in it."
			>
				<Cta to="/request-support" variant="gold">
					Request Support
				</Cta>
			</PageHero>

			<Section id="digital-gap">
				<div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
					<Reveal>
						<SectionHeading
							eyebrow="The Digital Gap"
							title="The distance between real work and public understanding."
							intro="Many Ethiopian nonprofits are deeply trusted in the communities they serve, yet almost invisible to the wider audience of donors, volunteers, supporters and institutions searching for them online."
						/>
					</Reveal>
					<Reveal delay={100}>
						<img
							src={nonprofitImg}
							alt="Nonprofit volunteers serving their community"
							width={1408}
							height={1008}
							loading="lazy"
							className="w-full rounded-xl border border-border object-cover"
						/>
					</Reveal>
				</div>
			</Section>

			<Section id="what-gets-lost" tone="white">
				<SectionHeading
					eyebrow="What Gets Lost"
					title="Problems organizations face online."
				/>
				<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{[
						{
							t: "No website at all",
							b: "Presence lives entirely inside social feeds that disappear in a day.",
						},
						{
							t: "Outdated information",
							b: "Programs, contacts and leadership details no longer reflect reality.",
						},
						{
							t: "Unclear mission",
							b: "Visitors can't tell in one sentence what the organization does.",
						},
						{
							t: "Invisible impact",
							b: "Years of results with nothing published that proves them.",
						},
						{
							t: "Hidden ways to help",
							b: "Donation and volunteer pathways buried or missing entirely.",
						},
						{
							t: "Trust barriers",
							b: "No transparency signals for donors and institutional funders.",
						},
					].map((x, i) => (
						<Reveal key={x.t} delay={(i % 3) * 80}>
							<Card className="h-full">
								<h3 className="text-base font-semibold text-primary">{x.t}</h3>
								<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
									{x.b}
								</p>
							</Card>
						</Reveal>
					))}
				</div>
			</Section>

			<Section id="why-it-matters" tone="indigo">
				<SectionHeading
					tone="light"
					eyebrow="Why It Matters"
					title="A digital presence is now the first conversation."
					intro="Before a donor gives, a volunteer signs up, or a supporter reaches out, they look you up. What they find becomes their first impression of the work."
				/>
				<div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-primary-foreground/15 bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
					{[
						"Credibility with donors",
						"Reach beyond word of mouth",
						"Easier volunteer recruitment",
						"Stronger institutional partnerships",
					].map((x, i) => (
						<div key={x} className="bg-primary p-8">
							<Reveal delay={i * 70}>
								<p className="text-base font-semibold text-primary-foreground">
									{x}
								</p>
							</Reveal>
						</div>
					))}
				</div>
			</Section>

			<Section id="why-we-exist">
				<div className="grid gap-14 lg:grid-cols-2">
					<Reveal>
						<SectionHeading
							eyebrow="Why We Exist"
							title="Students with skills. Organizations with missions."
							intro="Link4Good connects the two. Students studying engineering, design, communication and operations put those skills to work for Ethiopian nonprofits — and the organizations keep everything we build."
						/>
					</Reveal>
					<Reveal delay={100}>
						<SectionHeading
							eyebrow="What Becomes Possible"
							title="Better infrastructure changes what an organization can do."
						/>
						<ul className="mt-7 space-y-3">
							{[
								"Explain the mission clearly to anyone, anywhere",
								"Publish impact that donors and supporters can verify",
								"Turn interest into volunteers and support",
								"Keep the community informed between programs",
								"Grow without depending on personal networks alone",
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
		</>
	);
}
