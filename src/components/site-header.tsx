import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { CONTACT, JOIN_SECTIONS, NAV } from "@/lib/site-config";
import logoUrl from "../assets/link4goodLogo.png";

export function SiteHeader() {
	const [open, setOpen] = useState(false);
	const [openMenu, setOpenMenu] = useState<string | null>(null);
	const [scrolled, setScrolled] = useState(false);
	const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
	const pathname = useRouterState({ select: (s) => s.location.pathname });

	useEffect(() => {
		setOpen(false);
		setOpenMenu(null);
	}, [pathname]);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const hoverOpen = (key: string) => {
		if (closeTimer.current) clearTimeout(closeTimer.current);
		setOpenMenu(key);
	};
	const hoverClose = () => {
		if (closeTimer.current) clearTimeout(closeTimer.current);
		closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
	};

	return (
		<header
			className={`sticky top-0 z-50 border-b transition-all duration-300 ${
				scrolled
					? "border-border bg-background/90 backdrop-blur-md"
					: "border-transparent bg-background"
			}`}
		>
			{/* Utility bar */}
			<div className="hidden md:block">
				<div className="container-x bg-transparent text-[#1E2A5A]">
					<div className="flex h-10 items-center justify-between gap-6 text-[0.74rem] font-medium tracking-[0.02em]">
						<div className="flex items-center gap-6 text-[#2E3B70]">
							<a
								href={`mailto:${CONTACT.email}`}
								className="transition-colors hover:text-primary"
							>
								{CONTACT.email}
							</a>
							<span aria-hidden className="h-3 w-px bg-[#A9B9EA]" />
							<a
								href={`tel:${CONTACT.phoneHref}`}
								className="transition-colors hover:text-primary"
							>
								{CONTACT.phone}
							</a>
						</div>
						<div className="flex items-center gap-4">
							<div
								className="relative"
								onMouseEnter={() => hoverOpen("join")}
								onMouseLeave={hoverClose}
								onFocus={() => hoverOpen("join")}
								onBlur={hoverClose}
							>
								<Link
									to="/join"
									className="transition-colors hover:text-primary"
								>
									Join the Team
								</Link>
								<div
									className={`absolute left-0 top-full z-50 pt-2 transition-all duration-150 ${
										openMenu === "join"
											? "pointer-events-auto translate-y-0 opacity-100"
											: "pointer-events-none -translate-y-1 opacity-0"
									}`}
								>
									<div className="min-w-52 rounded-lg border border-border bg-card p-2 shadow-[0_24px_50px_-30px_rgba(30,58,138,0.55)]">
										<Link
											to="/join"
											className="block rounded-md px-3 py-2 text-[0.8rem] font-semibold text-primary hover:bg-muted"
										>
											Overview
										</Link>
										{JOIN_SECTIONS.map((section) => (
											<Link
												key={section.hash}
												to="/join"
												hash={section.hash}
												className="block rounded-md px-3 py-2 text-[0.8rem] text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
											>
												{section.label}
											</Link>
										))}
									</div>
								</div>
							</div>
							<Link
								to="/partner"
								className="rounded-sm bg-[#F5C96A] px-3 py-1.5 font-semibold text-[#1E2A5A] transition-all hover:bg-[#E9B95A]"
							>
								Partner With Us
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="hidden md:block">
				<div className="container-x">
					<div className="h-[1px] w-full bg-[#F5C96A]" />
				</div>
			</div>

			<div className="container-x">
				<div className="grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
					<Link
						to="/"
						className="flex min-w-0 items-center gap-3"
						aria-label="Link4Good home"
					>
						<img
							src={logoUrl}
							alt="Link4Good logo"
							width={794}
							height={513}
							className="h-10 w-auto shrink-0 object-contain"
						/>
						<span className="text-[1.5rem] font-black tracking-[-0.05em] text-primary">
							Link4Good
						</span>
					</Link>

					<nav className="hidden items-center gap-1 lg:flex">
						{NAV.map((item) => (
							<div
								key={item.to}
								className="relative"
								onMouseEnter={() => hoverOpen(item.to)}
								onMouseLeave={hoverClose}
								onFocus={() => hoverOpen(item.to)}
								onBlur={hoverClose}
							>
								<Link
									to={item.to}
									className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary data-[status=active]:font-semibold data-[status=active]:text-primary"
									activeOptions={{ exact: item.to === "/" }}
								>
									{item.label}
								</Link>
								<div
									className={`absolute left-0 top-full z-50 pt-2 transition-all duration-150 ${
										openMenu === item.to
											? "pointer-events-auto translate-y-0 opacity-100"
											: "pointer-events-none -translate-y-1 opacity-0"
									}`}
								>
									<div className="min-w-56 rounded-lg border border-border bg-card p-2 shadow-[0_24px_50px_-30px_rgba(30,58,138,0.55)]">
										<Link
											to={item.to}
											className="block rounded-md px-3 py-2 text-[0.8rem] font-semibold text-primary hover:bg-muted"
										>
											Overview
										</Link>
										{item.sections.map((s) => (
											<Link
												key={s.hash}
												to={item.to}
												hash={s.hash}
												className="block rounded-md px-3 py-2 text-[0.8rem] text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
											>
												{s.label}
											</Link>
										))}
									</div>
								</div>
							</div>
						))}
					</nav>

					<button
						type="button"
						aria-label={open ? "Close menu" : "Open menu"}
						aria-expanded={open}
						onClick={() => setOpen((v) => !v)}
						className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border text-primary lg:hidden"
					>
						<span className="relative block h-4 w-5">
							<span
								className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`}
							/>
							<span
								className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
							/>
							<span
								className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`}
							/>
						</span>
					</button>
				</div>
			</div>

			<div
				className={`overflow-hidden border-t border-border bg-background transition-[max-height] duration-300 lg:hidden ${
					open ? "max-h-[48rem] overflow-y-auto" : "max-h-0 border-t-0"
				}`}
			>
				<nav className="container-x flex flex-col gap-1 py-4">
					{NAV.map((item) => (
						<div key={item.to}>
							<Link
								to={item.to}
								className="block rounded-md px-2 py-2.5 text-base font-medium text-foreground/85 transition-colors hover:bg-muted data-[status=active]:font-semibold data-[status=active]:text-primary"
								activeOptions={{ exact: item.to === "/" }}
							>
								{item.label}
							</Link>
						</div>
					))}

					<div className="mt-3 grid gap-2">
						<Link
							to="/join"
							className="rounded-md border border-border px-4 py-3 text-center text-sm font-semibold text-primary"
						>
							Join the Team
						</Link>
						<Link
							to="/partner"
							className="inline-flex items-center justify-center rounded-sm bg-[#F5C96A] px-3 py-1.5 font-semibold text-[#1E2A5A] transition-all hover:bg-[#E9B95A]"
						>
							Partner With Us
						</Link>
					</div>
					<div className="mt-3 flex flex-col gap-1 border-t border-border pt-3 text-xs text-muted-foreground">
						<a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
						<a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
					</div>
				</nav>
			</div>
		</header>
	);
}
