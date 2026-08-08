// Placeholder contact details — replace with Link4Good's real address and number.
export const CONTACT = {
	email: "hello@link4good.org",
	phone: "+251 000 000 000",
	phoneHref: "+251000000000",
};

export type NavSection = { hash: string; label: string };
export type NavItem = { to: string; label: string; sections: NavSection[] };

export const NAV: NavItem[] = [
	{
		to: "/",
		label: "Home",
		sections: [
			{ hash: "problem", label: "The Problem" },
			{ hash: "solution", label: "The Solution" },
			{ hash: "experience", label: "The Experience" },
			{ hash: "process", label: "How It Works" },
			{ hash: "impact", label: "Impact" },
			{ hash: "story", label: "Our Story" },
		],
	},
	{
		to: "/why-link4good",
		label: "Why Link4Good",
		sections: [
			{ hash: "digital-gap", label: "The Digital Gap" },
			{ hash: "what-gets-lost", label: "What Gets Lost" },
			{ hash: "why-it-matters", label: "Why It Matters" },
			{ hash: "why-we-exist", label: "Why We Exist" },
		],
	},
	{
		to: "/what-we-do",
		label: "What We Do",
		sections: [
			{ hash: "capabilities", label: "Capabilities" },
			{ hash: "beyond-launch", label: "Beyond Launch" },
		],
	},
	{
		to: "/impact",
		label: "Impact",
		sections: [
			{ hash: "at-a-glance", label: "Impact at a Glance" },
			{ hash: "organizations", label: "Organizations" },
			{ hash: "case-studies", label: "Stories of Impact" },
			{ hash: "student-impact", label: "Student Impact" },
			{ hash: "community-impact", label: "Community Impact" },
		],
	},
	{
		to: "/how-it-works",
		label: "How It Works",
		sections: [
			{ hash: "process", label: "The Process" },
			{ hash: "your-part", label: "Your Part" },
		],
	},
	{
		to: "/about",
		label: "About",
		sections: [
			{ hash: "story", label: "Our Story" },
			{ hash: "mission", label: "Mission & Vision" },
			{ hash: "values", label: "Our Values" },
			{ hash: "team", label: "The Team" },
		],
	},
	{
		to: "/request-support",
		label: "Request Support",
		sections: [
			{ hash: "overview", label: "Overview" },
			{ hash: "benefits", label: "Support Benefits" },
			{ hash: "process", label: "Process" },
			{ hash: "faq", label: "FAQ" },
			{ hash: "form", label: "Request Form" },
		],
	},
];

// Verified metrics are not available yet — null renders a placeholder instead of a number.
export const METRICS: {
	value: number | null;
	suffix?: string;
	label: string;
}[] = [
	{ value: null, suffix: "+", label: "Organizations Supported" },
	{ value: null, suffix: "+", label: "Digital Platforms Built" },
	{ value: null, suffix: "+", label: "Student Contributors" },
	{ value: null, suffix: "+", label: "People Reached" },
];
