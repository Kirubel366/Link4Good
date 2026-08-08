import { createFileRoute } from "@tanstack/react-router";
import nonprofitImg from "@/assets/non-profit-work.jpg";
import studentsImg from "@/assets/students-working.jpg";
import { ProcessSteps } from "@/components/final-cta";
import { HomeHero } from "@/components/home-hero";
import { Cta, Reveal, Section, SectionHeading } from "@/components/site-ui";

export const Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Link4Good — Powering the Helpers" },
			{
				name: "description",
				content:
					"Link4Good is a student-led initiative helping Ethiopian nonprofit organizations build modern digital platforms that connect their missions with supporters.",
			},
			{ property: "og:title", content: "Link4Good — Powering the Helpers" },
			{
				property: "og:description",
				content:
					"Modern digital platforms for Ethiopian nonprofit and charitable organizations, built by students.",
			},
		],
	}),
	component: Home,
});

function Home() {
	return (
		<>
			<HomeHero />

			<Section className="pt-10 md:pt-11">
				<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
					{[
						{
							t: "Student-Led",
							b: "Built by students passionate about technology and social impact.",
						},
						{
							t: "Built for Ethiopia",
							b: "Focused initially on Ethiopian nonprofit organizations.",
						},
						{
							t: "Free Infrastructure",
							b: "Organizations receive the digital infrastructure at no operational cost under the current initiative model.",
						},
						{
							t: "Full Ownership",
							b: "Organizations receive ownership of their digital infrastructure after handoff.",
						},
					].map((item) => (
						<div key={item.t} className="border-t-2 border-accent pt-6">
							<h3 className="text-xl font-semibold text-primary">{item.t}</h3>
							<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
								{item.b}
							</p>
						</div>
					))}
				</div>
			</Section>

			{/* Problem */}
			<Section id="problem">
				<div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
					<Reveal>
						<SectionHeading
							eyebrow="The Problem"
							title="Great work shouldn't be hidden behind outdated technology."
							intro="Many Ethiopian nonprofit organizations do meaningful, difficult work every day. But when their digital presence is thin or outdated, the people who want to help can't find the door in."
						/>
					</Reveal>
					<Reveal delay={120}>
						<ul className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
							{[
								"Understand their mission",
								"Discover their programs",
								"See their impact",
								"Donate",
								"Volunteer",
								"Stay connected",
								"Build trust",
							].map((item) => (
								<li
									key={item}
									className="bg-card px-6 py-5 text-sm font-medium text-foreground"
								>
									<span className="mr-3 text-muted-foreground/50">—</span>
									{item}
								</li>
							))}
							<li className="bg-primary px-6 py-5 text-sm font-semibold text-primary-foreground">
								Every gap is a supporter lost.
							</li>
						</ul>
					</Reveal>
				</div>
			</Section>

			{/* Solution */}
			<Section id="solution" tone="white">
				<div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center">
					<Reveal>
						<div className="overflow-hidden rounded-xl border border-border">
							<div className="flex items-center gap-1.5 border-b border-border bg-muted px-4 py-3">
								<span className="h-2.5 w-2.5 rounded-full bg-border" />
								<span className="h-2.5 w-2.5 rounded-full bg-border" />
								<span className="h-2.5 w-2.5 rounded-full bg-border" />
								<span className="ml-3 truncate rounded bg-card px-3 py-1 text-[0.7rem] text-muted-foreground">
									yournonprofit.org
								</span>
							</div>
							<div className="bg-card p-6">
								<p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent">
									Our Mission
								</p>
								<p className="mt-3 font-display text-xl font-semibold leading-snug text-primary">
									Clean water and health education for rural communities.
								</p>
								<div className="mt-5 grid grid-cols-3 gap-3">
									{["Programs", "Impact", "Donate"].map((l) => (
										<div
											key={l}
											className="rounded-md border border-border px-3 py-4 text-center text-xs font-medium"
										>
											{l}
										</div>
									))}
								</div>
								<img
									src={nonprofitImg}
									alt="Nonprofit volunteers welcoming community members"
									width={1408}
									height={1008}
									loading="lazy"
									className="mt-5 h-40 w-full rounded-md object-cover"
								/>
							</div>
						</div>
					</Reveal>

					<Reveal delay={120}>
						<SectionHeading
							eyebrow="The Solution"
							title="We build more than websites."
							intro="Link4Good creates modern digital platforms that give organizations a place to be understood, trusted and supported."
						/>
						<ul className="mt-8 grid gap-3 sm:grid-cols-2">
							{[
								"Tell your story",
								"Showcase your programs",
								"Demonstrate impact",
								"Connect with volunteers",
								"Make donation pathways discoverable",
								"Share events and updates",
								"Build trust with supporters",
							].map((f) => (
								<li key={f} className="flex gap-3 text-sm text-foreground">
									<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-brand" />
									{f}
								</li>
							))}
						</ul>
						<div className="mt-9">
							<Cta to="/what-we-do">See What We Do</Cta>
						</div>
					</Reveal>
				</div>
			</Section>

			{/* Impact experience */}
			<Section id="experience" tone="indigo">
				<SectionHeading
					tone="light"
					eyebrow="The Experience"
					title="Four things every organization deserves online."
				/>
				<div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-primary-foreground/15 bg-primary-foreground/15 md:grid-cols-2">
					{[
						{
							t: "Make the mission clear.",
							b: "A first sentence anyone understands in five seconds.",
						},
						{
							t: "Make impact visible.",
							b: "Real outcomes, told with clarity rather than claims.",
						},
						{
							t: "Make participation easy.",
							b: "Volunteering and giving without a maze of dead ends.",
						},
						{
							t: "Make trust tangible.",
							b: "Contact details, transparency, and proof of real work.",
						},
					].map((x, i) => (
						<div key={x.t} className="bg-primary p-9">
							<Reveal delay={i * 70}>
								<span className="font-display text-4xl font-semibold text-primary-foreground/15">
									0{i + 1}
								</span>
								<h3 className="mt-4 text-xl font-semibold text-primary-foreground">
									{x.t}
								</h3>
								<p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
									{x.b}
								</p>
							</Reveal>
						</div>
					))}
				</div>
			</Section>

			{/* How it works */}
			<Section id="process" tone="white">
				<SectionHeading
					eyebrow="How It Works"
					title="A simple, human process."
				/>
				<div className="mt-12">
					<ProcessSteps />
				</div>
				<div className="mt-10">
					<Cta to="/how-it-works">See How It Works</Cta>
				</div>
			</Section>

			{/* Impact preview */}
			<Section id="impact">
				<div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
					<Reveal>
						<SectionHeading
							eyebrow="Impact"
							title="Building toward measurable impact."
							intro="Link4Good is early. Rather than publish numbers we haven't earned, we're tracking what matters and will share verified results as our first nonprofit collaborations complete."
						/>
						<div className="mt-8">
							<Cta to="/impact">See Our Impact</Cta>
						</div>
					</Reveal>
					<Reveal delay={120}>
						<div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
							{[
								"Organizations Supported",
								"Websites Delivered",
								"Student Contributors",
								"Communities Reached",
							].map((m) => (
								<div key={m} className="bg-card p-7">
									<p className="font-display text-3xl font-semibold text-emerald-brand">
										—
									</p>
									<p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
										{m}
									</p>
								</div>
							))}
						</div>
					</Reveal>
				</div>
			</Section>

			{/* Story */}
			<Section id="story" tone="white">
				<div className="grid gap-14 lg:grid-cols-2 lg:items-center">
					<Reveal>
						<img
							src={studentsImg}
							alt="Ethiopian students collaborating on a project"
							width={1408}
							height={1008}
							loading="lazy"
							className="h-full w-full rounded-xl border border-border object-cover"
						/>
					</Reveal>
					<Reveal delay={120}>
						<SectionHeading
							eyebrow="Our Story"
							title="Built by students. Driven by impact."
							intro="We saw an opportunity to use the skills students are developing in technology, design, communication, and organization to help Ethiopian nonprofit organizations strengthen their digital presence."
						/>
						<div className="mt-8">
							<Cta to="/about">Meet the Team</Cta>
						</div>
					</Reveal>
				</div>
			</Section>
		</>
	);
}
