import { createFileRoute } from "@tanstack/react-router";
import teamImg from "@/assets/team-portrait.jpg";
import {
	Card,
	Cta,
	PageHero,
	Reveal,
	Section,
	SectionHeading,
} from "@/components/site-ui";

export const Route = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Us — Built by Students, Driven by Impact | Link4Good" },
			{
				name: "description",
				content:
					"Link4Good is a student-led digital impact initiative in Ethiopia. Our story, mission, vision, values and team.",
			},
			{ property: "og:title", content: "About Link4Good" },
			{
				property: "og:description",
				content: "Built by students. Driven by impact.",
			},
		],
	}),
	component: About,
});

const values = [
	{
		t: "Impact",
		b: "We measure ourselves by what changes for organizations, not by what we ship.",
	},
	{
		t: "Ownership",
		b: "Everything we build belongs to the organization it was built for.",
	},
	{
		t: "Collaboration",
		b: "We work with organizations, not for them at a distance.",
	},
	{
		t: "Accessibility",
		b: "Built for real users on real devices and real connections.",
	},
	{
		t: "Integrity",
		b: "We don't overstate results or claim work we haven't done.",
	},
	{
		t: "Learning",
		b: "Every project makes our students better at their craft.",
	},
];

function About() {
	return (
		<>
			<PageHero
				eyebrow="About Us"
				title="Built by students. Driven by impact."
				intro="Link4Good is a student-led digital impact initiative working with nonprofit and charitable organizations in Ethiopia."
			/>

			<Section id="story">
				<div className="grid gap-14 lg:grid-cols-2 lg:items-center">
					<Reveal>
						<SectionHeading
							eyebrow="Our Story"
							title="It started with a visit."
							intro={
								<>
									<p>
										About a year and a half before Link4Good was founded, we
										visited{" "}
										<strong>
											Education for Needy People Association (ENPA)
										</strong>{" "}
										and saw the meaningful work they were doing for their
										community. But their digital presence didn't reflect that
										impact, and they lacked a structured way to manage volunteer
										information online.
									</p>

									<p className="mt-5">
										At the time, we were Grade 10 students—{" "}
										<strong>
											Kirubel Daniel, Yeabsira Tesfaye, and Eyob Desalegn.
										</strong>{" "}
										We asked ENPA if we could help, and built them a website
										with a professional landing page, volunteer registration,
										and structured volunteer data management.
									</p>

									<p className="mt-5">
										A year later, we wanted to help another organization. Then
										we asked ourselves:
									</p>

									<p className="mt-5 font-semibold text-primary">
										What if we didn't just help one organization? What if we
										could help many?
									</p>

									<p className="mt-5">
										That question became <strong>Link4Good</strong>—a
										student-led initiative helping nonprofits build the digital
										infrastructure they need to connect with the people who want
										to support them.
									</p>
								</>
							}
						/>
					</Reveal>
					<Reveal delay={100}>
						<img
							src={teamImg}
							alt="Link4Good student team"
							width={1408}
							height={912}
							loading="lazy"
							className="w-full rounded-xl border border-border object-cover"
						/>
					</Reveal>
				</div>
			</Section>

			<Section id="mission" tone="indigo">
				<div className="grid gap-14 lg:grid-cols-2">
					<Reveal>
						<SectionHeading
							tone="light"
							eyebrow="Our Mission"
							title="Powering the helpers."
							intro="We help Ethiopian nonprofits communicate their missions, showcase their impact, connect with volunteers and supporters, and improve access to donation and community engagement opportunities through modern digital platforms."
						/>
					</Reveal>
					<Reveal delay={100}>
						<SectionHeading
							tone="light"
							eyebrow="Our Vision"
							title="A future where no mission goes unseen."
							intro="Our work today is focused entirely on Ethiopia. Over the long term, we hope the model we're building here can support organizations far beyond it."
						/>
					</Reveal>
				</div>
			</Section>

			<Section id="values">
				<SectionHeading
					eyebrow="Our Values"
					title="What we hold ourselves to."
				/>
				<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{values.map((v, i) => (
						<Reveal key={v.t} delay={(i % 3) * 70}>
							<Card className="h-full">
								<span className="font-display text-sm font-semibold tracking-[0.2em] text-accent">
									{String(i + 1).padStart(2, "0")}
								</span>
								<h3 className="mt-4 text-lg font-semibold text-primary">
									{v.t}
								</h3>
								<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
									{v.b}
								</p>
							</Card>
						</Reveal>
					))}
				</div>
			</Section>

			<Section id="team" tone="white">
				<SectionHeading
					eyebrow="The Team"
					title="The people behind Link4Good."
					intro="Team profiles are being finalized and will be published here shortly."
				/>
				<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{[0, 1, 2, 3].map((i) => (
						<Reveal key={i} delay={i * 70}>
							<div className="h-full rounded-xl border border-dashed border-border bg-background p-6">
								<div className="aspect-square w-full rounded-lg bg-muted" />
								<div className="mt-5 h-3 w-2/3 rounded-full bg-muted" />
								<div className="mt-3 h-2.5 w-1/2 rounded-full bg-muted" />
								<p className="mt-4 text-xs text-muted-foreground">
									Profile coming soon
								</p>
							</div>
						</Reveal>
					))}
				</div>
				<div className="mt-12">
					<Cta to="/join" variant="gold">
						Join the Team
					</Cta>
				</div>
			</Section>
		</>
	);
}
