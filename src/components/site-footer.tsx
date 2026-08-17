import { Link } from "@tanstack/react-router";
import { CONTACT } from "@/lib/site-config";
import logoUrl from "../assets/link4goodLogo.png";

const explore = [
	{ to: "/", label: "Home" },
	{ to: "/about", label: "About" },
	{ to: "/what-we-do", label: "What We Do" },
	{ to: "/how-it-works", label: "How It Works" },
	{ to: "/impact", label: "Impact" },
	{ to: "/why-link4good", label: "Why Link4Good" },
	{ to: "/request-support", label: "Request Support" },
];

const involved = [
	{ to: "/request-support", label: "Request Support" },
	{ to: "/join", label: "Join the Team" },
];

export function SiteFooter() {
	return (
		<footer className="bg-primary text-primary-foreground">
			<div className="container-x py-16 md:py-20">
				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr]">
					<div className="max-w-sm">
						<div className="inline-flex items-center gap-3 rounded-md bg-primary-foreground/10 px-3 py-2 ring-1 ring-inset ring-primary-foreground/10">
							<img
								src={logoUrl}
								alt="Link4Good logo"
								width={794}
								height={513}
								className="h-11 w-auto object-contain"
							/>
							<span className="font-display text-xl font-semibold tracking-[-0.04em] text-primary-foreground">
								Link4Good
							</span>
						</div>
						<p className="mt-5 font-display text-xl text-accent">
							Powering the Helpers.
						</p>
						<p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
							A student-led digital impact initiative providing Ethiopian
							nonprofits with modern digital platforms at no cost.
						</p>
					</div>

					<FooterCol title="Explore" links={explore} />
					<FooterCol title="Get Involved" links={involved} />

					<div>
						<h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
							Connect
						</h3>
						<ul className="mt-5 space-y-3 text-sm">
							<li>
								<a
									href={`mailto:${CONTACT.email}`}
									className="text-primary-foreground/80 transition-colors hover:text-accent"
								>
									{CONTACT.email}
								</a>
							</li>
							<li>
								<a
									href={`tel:${CONTACT.phoneHref}`}
									className="text-primary-foreground/80 transition-colors hover:text-accent"
								>
									{CONTACT.phone}
								</a>
							</li>
							{["LinkedIn", "Instagram", "X (Twitter)"].map((s) => (
								<li key={s}>
									<a
										href="#"
										className="text-primary-foreground/80 transition-colors hover:text-accent"
										aria-label={`Link4Good on ${s}`}
									>
										{s}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/[0.06] p-6">
						<h3 className="font-display text-base font-semibold leading-snug text-primary-foreground">
							Need a stronger digital presence?
						</h3>
						<p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
							Help more people discover, understand, and support your
							nonprofit's work.
						</p>
						<Link
							to="/request-support"
							className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:brightness-110"
						>
							Request Support <span aria-hidden>→</span>
						</Link>
					</div>
				</div>

				<div className="mt-14 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
					<p>© 2026 Link4Good</p>
					<p>Student-led digital impact initiative in Ethiopia.</p>
				</div>
			</div>
		</footer>
	);
}

function FooterCol({
	title,
	links,
}: {
	title: string;
	links: { to: string; label: string }[];
}) {
	return (
		<div>
			<h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
				{title}
			</h3>
			<ul className="mt-5 space-y-3 text-sm">
				{links.map((l) => (
					<li key={l.to}>
						<Link
							to={l.to as never}
							className="text-primary-foreground/80 transition-colors hover:text-accent"
						>
							{l.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
