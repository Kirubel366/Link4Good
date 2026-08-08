import { Link } from "@tanstack/react-router";
import { type ReactNode, useEffect, useRef, useState } from "react";

export function Reveal({
	children,
	delay = 0,
	className = "",
}: {
	children: ReactNode;
	delay?: number;
	className?: string;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						setVisible(true);
						io.disconnect();
					}
				});
			},
			{ threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
		);
		io.observe(el);
		return () => io.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			data-visible={visible}
			style={{ transitionDelay: `${delay}ms` }}
			className={`reveal ${className}`}
		>
			{children}
		</div>
	);
}

export function Eyebrow({
	children,
	tone = "indigo",
}: {
	children: ReactNode;
	tone?: "indigo" | "light";
}) {
	return (
		<span
			className={`inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] ${
				tone === "light" ? "text-accent" : "text-primary"
			}`}
		>
			<span className="h-px w-6 bg-accent" />
			{children}
		</span>
	);
}

export function Section({
	children,
	className = "",
	tone = "ivory",
	id,
}: {
	children: ReactNode;
	className?: string;
	tone?: "ivory" | "white" | "indigo" | "muted";
	id?: string;
}) {
	const tones: Record<string, string> = {
		ivory: "bg-background text-foreground",
		white: "bg-card text-card-foreground",
		muted: "bg-muted text-foreground",
		indigo: "bg-primary text-primary-foreground",
	};
	return (
		<section id={id} className={`${tones[tone]} py-20 md:py-28 ${className}`}>
			<div className="container-x">{children}</div>
		</section>
	);
}

type CtaProps = {
	to: string;
	children: ReactNode;
	variant?: "gold" | "indigo" | "outline" | "ghost-light";
	className?: string;
};

export function Cta({
	to,
	children,
	variant = "indigo",
	className = "",
}: CtaProps) {
	const base =
		"inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98]";
	const variants: Record<string, string> = {
		gold: "bg-accent text-accent-foreground shadow-[0_10px_30px_-12px_rgba(245,158,11,0.7)] hover:brightness-105 hover:-translate-y-0.5",
		indigo:
			"bg-primary text-primary-foreground hover:bg-primary-deep hover:-translate-y-0.5",
		outline:
			"border border-border bg-transparent text-foreground hover:border-primary hover:text-primary",
		"ghost-light":
			"border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10",
	};
	return (
		<Link
			to={to as never}
			className={`${base} ${variants[variant]} ${className}`}
		>
			{children}
			<span aria-hidden>→</span>
		</Link>
	);
}

export function SectionHeading({
	eyebrow,
	title,
	intro,
	tone = "dark",
	align = "left",
}: {
	eyebrow?: string;
	title: string;
	intro?: string;
	tone?: "dark" | "light";
	align?: "left" | "center";
}) {
	return (
		<div
			className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
		>
			{eyebrow ? (
				<Eyebrow tone={tone === "light" ? "light" : "indigo"}>
					{eyebrow}
				</Eyebrow>
			) : null}
			<h2
				className={`mt-4 text-3xl font-semibold leading-[1.12] md:text-[2.6rem] ${
					tone === "light" ? "text-primary-foreground" : "text-primary"
				}`}
			>
				{title}
			</h2>
			{intro ? (
				<p
					className={`mt-5 text-base leading-relaxed md:text-lg ${
						tone === "light"
							? "text-primary-foreground/75"
							: "text-muted-foreground"
					}`}
				>
					{intro}
				</p>
			) : null}
		</div>
	);
}

export function PageHero({
	eyebrow,
	title,
	intro,
	children,
}: {
	eyebrow: string;
	title: string;
	intro?: string;
	children?: ReactNode;
}) {
	return (
		<header className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32">
			<div
				aria-hidden
				className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-primary-foreground/10"
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-primary-foreground/[0.04]"
			/>
			<div className="container-x relative">
				<Reveal>
					<Eyebrow tone="light">{eyebrow}</Eyebrow>
					<h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-[1.08] md:text-6xl">
						{title}
					</h1>
					{intro ? (
						<p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
							{intro}
						</p>
					) : null}
					{children ? (
						<div className="mt-9 flex flex-wrap gap-3">{children}</div>
					) : null}
				</Reveal>
			</div>
		</header>
	);
}

export function Card({
	children,
	className = "",
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<div
			className={`group rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_45px_-30px_rgba(30,58,138,0.55)] ${className}`}
		>
			{children}
		</div>
	);
}
