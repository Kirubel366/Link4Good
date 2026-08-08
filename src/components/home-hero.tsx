import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-community.jpg";
import { Cta, Eyebrow } from "@/components/site-ui";
import { METRICS } from "@/lib/site-config";

function useInView<T extends HTMLElement>() {
	const ref = useRef<T>(null);
	const [inView, setInView] = useState(false);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(
			(entries) => {
				if (entries.some((e) => e.isIntersecting)) {
					setInView(true);
					io.disconnect();
				}
			},
			{ threshold: 0.3 },
		);
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return { ref, inView };
}

function CountUp({
	value,
	suffix = "",
}: {
	value: number | null;
	suffix?: string | undefined;
}) {
	const { ref, inView } = useInView<HTMLSpanElement>();
	const [n, setN] = useState(0);

	useEffect(() => {
		if (!inView || value === null) return;
		let raf = 0;
		const start = performance.now();
		const dur = 900;
		const tick = (t: number) => {
			const p = Math.min(1, (t - start) / dur);
			setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [inView, value]);

	return (
		<span
			ref={ref}
			className="font-display text-4xl font-semibold tracking-tight md:text-5xl"
		>
			{value === null ? (
				<span className="text-primary-foreground/40">—</span>
			) : (
				`${n}${suffix}`
			)}
		</span>
	);
}

export function HomeHero() {
	return (
		<section className="relative overflow-hidden bg-primary text-primary-foreground">
			{/* layered ambience */}
			<div
				aria-hidden
				className="pointer-events-none absolute -right-32 -top-32 h-[30rem] w-[30rem] animate-[hero-spin_44s_linear_infinite] rounded-full border border-primary-foreground/10"
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -bottom-40 -left-24 h-[26rem] w-[26rem] animate-[hero-float_11s_ease-in-out_infinite] rounded-full bg-primary-foreground/[0.05] blur-2xl"
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute right-1/3 top-10 h-40 w-40 animate-[hero-float_8s_ease-in-out_infinite] rounded-full bg-accent/10 blur-2xl"
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 hero-grid opacity-[0.35]"
			/>

			<div className="container-x relative grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[1.05fr_1fr]">
				<div>
					<div className="hero-in" style={{ animationDelay: "40ms" }}>
						<Eyebrow tone="light">Student-Led • Ethiopia</Eyebrow>
					</div>
					<h1 className="mt-6 text-5xl font-semibold leading-[1.02] md:text-7xl">
						<span className="hero-in block" style={{ animationDelay: "120ms" }}>
							Powering the
						</span>
						<span
							className="hero-in block text-accent"
							style={{ animationDelay: "220ms" }}
						>
							Helpers.
						</span>
					</h1>
					<p
						className="hero-in mt-7 max-w-xl text-lg leading-relaxed text-primary-foreground/75"
						style={{ animationDelay: "320ms" }}
					>
						We help Ethiopian nonprofit organizations build modern digital
						platforms that connect their missions with the people who want to
						support them.
					</p>
					<div
						className="hero-in mt-10 flex flex-wrap gap-3"
						style={{ animationDelay: "420ms" }}
					>
						<Cta to="/request-support" variant="gold">
							Request Support
						</Cta>
						<Cta to="/join" variant="ghost-light">
							Join the Team
						</Cta>
					</div>
				</div>

				<div className="hero-in relative" style={{ animationDelay: "300ms" }}>
					<div className="animate-[hero-float_9s_ease-in-out_infinite] overflow-hidden rounded-xl border border-primary-foreground/15">
						<img
							src={heroImg}
							alt="A nonprofit team in Ethiopia collaborating around a laptop"
							width={1408}
							height={1008}
							className="h-full w-full object-cover"
						/>
					</div>
					<div className="absolute -bottom-6 -left-4 hidden animate-[hero-float_7s_ease-in-out_infinite_reverse] rounded-lg border border-border bg-card p-5 shadow-[0_25px_50px_-30px_rgba(0,0,0,0.6)] sm:block">
						<p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-brand">
							<span className="relative flex h-2 w-2">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-brand/60" />
								<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-brand" />
							</span>
							Mission visible
						</p>
						<p className="mt-2 max-w-[13rem] text-sm text-foreground">
							Programs, impact and ways to help — all in one place.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
