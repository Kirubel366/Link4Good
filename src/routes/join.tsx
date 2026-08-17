import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import studentsImg from "@/assets/students-working.jpg";
import { Field, Select } from "@/components/form-fields";
import {
	Card,
	PageHero,
	Reveal,
	Section,
	SectionHeading,
} from "@/components/site-ui";

export const Route = createFileRoute("/join")({
	head: () => ({
		meta: [
			{ title: "Join the Team — Student Opportunities | Link4Good" },
			{
				name: "description",
				content:
					"Use your skills for something that matters. Join Link4Good as a volunteer in partnership, onboarding, content, design, growth, or operations.",
			},
			{ property: "og:title", content: "Join Link4Good" },
			{
				property: "og:description",
				content:
					"Don't just learn skills. Use them for something that matters.",
			},
		],
	}),
	component: Join,
});

const roles = [
	{
		title: "Partnership & Outreach Volunteer",
		positions: "5 positions",
		summary:
			"Help Link 4Good connect with charities and introduce them to our platform.",
		responsibilities: [
			"Find and contact potential charity partners.",
			"Explain Link 4Good and answer basic questions.",
			"Track outreach and follow up with interested charities.",
			"Connect interested charities with the onboarding team.",
		],
		requirements: [
			"Good communication skills.",
			"Basic understanding of charities/NGOs.",
			"Willingness to learn.",
			"4–6 hours per week.",
		],
	},
	{
		title: "Onboarding & Success Volunteer",
		positions: "5 positions",
		summary:
			"Help partner charities get started and make sure we have everything needed to build their digital platform.",
		responsibilities: [
			"Be the main contact for partner charities.",
			"Collect information, images, logos, and reports.",
			"Explain what charities need to provide and when.",
			"Prepare project briefs for the team.",
		],
		requirements: [
			"Strong organization and communication skills.",
			"Basic understanding of website content.",
			"4–6 hours per week.",
		],
	},
	{
		title: "Content & Storytelling Volunteer",
		positions: "5 positions",
		summary:
			"Turn a charity's story and information into clear, engaging content that inspires people to support its mission.",
		responsibilities: [
			"Write mission, program, impact, and About content.",
			"Turn raw information into donor-friendly stories.",
			"Edit and improve website copy.",
			"Keep content clear, trustworthy, and impactful.",
		],
		requirements: [
			"Strong English writing skills.",
			"Amharic is a plus.",
			"Interest in nonprofit storytelling.",
			"4–6 hours per week.",
		],
	},
	{
		title: "Design & Visuals Volunteer",
		positions: "5 positions",
		summary:
			"Create the visual content that helps charity websites look professional, consistent, and engaging.",
		responsibilities: [
			"Design banners, hero images, and simple graphics.",
			"Create visual styles for charity websites.",
			"Work with Link 4Good's templates and guidelines.",
			"Improve designs based on feedback.",
		],
		requirements: [
			"Basic design skills.",
			"Familiarity with Figma, Canva, or similar tools.",
			"Portfolio or sample work is a plus.",
			"4–6 hours per week.",
		],
	},
	{
		title: "Growth & Communications Volunteer",
		positions: "3 positions",
		summary:
			"Help Link 4Good grow its audience and showcase the impact of our work.",
		responsibilities: [
			"Create social media posts and updates.",
			"Share stories about our work and partner charities.",
			"Create simple case studies.",
			"Collect testimonials from charities and volunteers.",
		],
		requirements: [
			"Good writing and storytelling skills.",
			"Basic social media knowledge.",
			"4–6 hours per week.",
		],
	},
	{
		title: "Operations & Impact Volunteer",
		positions: "2 positions",
		summary:
			"Help keep our volunteer team organized and measure the impact we're creating.",
		responsibilities: [
			"Track volunteer participation and project progress.",
			"Help onboard and organize volunteers.",
			"Support team check-ins and training.",
			"Track impact such as charities served and websites launched.",
		],
		requirements: [
			"Basic computer and spreadsheet skills.",
			"Interest in operations, data, or team management.",
			"4–6 hours per week.",
		],
	},
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

			<Section id="roles">
				<SectionHeading eyebrow="Open roles" title="Six ways to contribute." />
				<div className="mt-12 grid gap-6 lg:grid-cols-2">
					{roles.map((role, i) => (
						<Reveal key={role.title} delay={(i % 2) * 70}>
							<Card className="h-full">
								<p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-brand">
									{role.positions}
								</p>
								<h3 className="mt-4 text-xl font-semibold text-primary">
									{role.title}
								</h3>
								<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
									{role.summary}
								</p>

								<div className="mt-6 space-y-5">
									<div>
										<h4 className="text-sm font-semibold uppercase tracking-wide text-primary">
											What you'll do
										</h4>
										<ul className="mt-2 space-y-2 text-sm text-muted-foreground">
											{role.responsibilities.map((item) => (
												<li key={item} className="flex gap-2">
													<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-brand" />
													<span>{item}</span>
												</li>
											))}
										</ul>
									</div>

									<div>
										<h4 className="text-sm font-semibold uppercase tracking-wide text-primary">
											What you need
										</h4>
										<ul className="mt-2 space-y-2 text-sm text-muted-foreground">
											{role.requirements.map((item) => (
												<li key={item} className="flex gap-2">
													<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-brand" />
													<span>{item}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							</Card>
						</Reveal>
					))}
				</div>
			</Section>

			<Section tone="white" id="what-you-get">
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
							<h2 className="text-2xl font-semibold text-primary">
								Apply to Join Link4Good
							</h2>
							<p className="mt-2 text-sm text-muted-foreground">
								Short and honest is better than long and polished.
							</p>

							{sent ? (
								<div className="mt-8 rounded-lg border border-emerald-brand/40 bg-card p-6">
									<p className="font-semibold text-emerald-brand">
										Application received.
									</p>
									<p className="mt-2 text-sm text-muted-foreground">
										Thanks for reaching out — we'll be in touch soon.
									</p>
								</div>
							) : (
								<form
									id="apply"
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
										<Field label="School" name="school" />
										<Select
											label="Role of interest"
											name="area"
											options={[...roles.map((role) => role.title), "Other"]}
										/>
									</div>
									<Select
										label="Grade Level"
										name="grade"
										options={["G-10", "G-11", "G-12"]}
									/>
									<Field label="LinkedIn" name="link" placeholder="Optional" />
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
