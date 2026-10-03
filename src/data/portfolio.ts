export type PortfolioCategory =
	| "all"
	| "wedding"
	| "engagement"
	| "graduation"
	| "party";

export interface PortfolioItem {
	id: string;
	title: string;
	category: "wedding" | "engagement" | "graduation" | "party";
	categoryLabel: string;
	description: string;
	lookDetails: string;
	image: string;
	imageAlt: string;
	featured?: boolean;
}

export const portfolioCategories: { key: PortfolioCategory; label: string }[] =
	[
		{ key: "all", label: "Semua Portofolio" },
		{ key: "wedding", label: "Wedding" },
		{ key: "engagement", label: "Lamaran" },
		{ key: "graduation", label: "Wisuda" },
		{ key: "party", label: "Pesta & Event" },
	];

export const portfolioData: PortfolioItem[] = [
	{
		id: "port-1",
		title: "Modern Sundanese Siger Bride",
		category: "wedding",
		categoryLabel: "Wedding",
		description:
			"Riasan pengantin adat Sunda modern dengan ronce melati dan sentuhan lipstik nude terracotta.",
		lookDetails:
			"Velvet matte complexion, winged soft liner, natural glowing blush.",
		image:
			"https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&w=800&q=80",
		imageAlt:
			"Riasan pengantin adat Sunda modern oleh MUA Bandung Yumna Makeup",
		featured: true,
	},
	{
		id: "port-2",
		title: "Soft Glam Akad Minimalist",
		category: "wedding",
		categoryLabel: "Wedding",
		description:
			"Look akad nikah pagi hari yang suci, natural manglingi, dan tetap ringan di kulit.",
		lookDetails:
			"Dewy skin finish, soft brown eyeshadow blend, peach nude lips.",
		image:
			"https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
		imageAlt: "Bridal soft glam akad nikah makeup oleh Yumna Makeup Bandung",
		featured: true,
	},
	{
		id: "port-3",
		title: "Peach Blossom Engagement",
		category: "engagement",
		categoryLabel: "Lamaran",
		description:
			"Look lamaran serasi dengan kebaya pastel peach dan tatanan hijab clean simetris.",
		lookDetails:
			"Luminous skin, natural single lash cluster, soft coral blush & lip glaze.",
		image:
			"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
		imageAlt:
			"Makeup lamaran tunangan nuansa peach oleh Yumna Makeup di Bandung",
		featured: true,
	},
	{
		id: "port-4",
		title: "Clean Fresh Graduation Glow",
		category: "graduation",
		categoryLabel: "Wisuda",
		description:
			"Makeup wisuda sarjana fresh tahan seharian untuk prosesi outdoor & foto studio keluarga.",
		lookDetails: "Sweat-proof base, naturally groomed brows, ombre berry tint.",
		image:
			"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
		imageAlt:
			"Makeup wisuda fresh dan natural mahasiswi Bandung oleh Yumna Makeup",
		featured: true,
	},
	{
		id: "port-5",
		title: "Romantic Rose Party Glam",
		category: "party",
		categoryLabel: "Pesta & Event",
		description:
			"Riasan glamor anggun untuk resepsi malam hari mendampingi sahabat sebagai bridesmaid.",
		lookDetails:
			"Shimmer champagne lids, sculptured cheekbones, satin rosewood lips.",
		image:
			"https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
		imageAlt:
			"Makeup pesta malam bridesmaid elegan di Bandung oleh Yumna Makeup",
		featured: true,
	},
	{
		id: "port-6",
		title: "Champagne Shimmer Resepsi",
		category: "wedding",
		categoryLabel: "Wedding",
		description:
			"Makeup resepsi megah dengan riasan mata berdimensi dan complexion tanpa cela.",
		lookDetails:
			"Full coverage flawless, dimensional contouring, glossy nude ombré.",
		image:
			"https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
		imageAlt: "Hasil makeup resepsi pernikahan elegan dan flawless di Bandung",
		featured: false,
	},
	{
		id: "port-7",
		title: "Dusty Rose Engagement Look",
		category: "engagement",
		categoryLabel: "Lamaran",
		description:
			"Makeup lamaran intim dengan palet warna dusty rose yang feminin dan hangat.",
		lookDetails: "Airbrush effect skin, soft fluttery lash, satin mauve lip.",
		image:
			"https://images.unsplash.com/photo-1516972810927-80185027ca84?auto=format&fit=crop&w=800&q=80",
		imageAlt:
			"Makeup engagement nuansa dusty rose oleh MUA Bandung Yumna Makeup",
		featured: false,
	},
	{
		id: "port-8",
		title: "Sun-Kissed Graduation Look",
		category: "graduation",
		categoryLabel: "Wisuda",
		description:
			"Makeup wisuda youthful dengan rona hangat yang membuat wajah tampak segar berseri di bawah topi toga.",
		lookDetails: "Feathered brow, soft winged brown liner, juicy apricot lip.",
		image:
			"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
		imageAlt: "Riasan wisuda youthful sun-kissed di Bandung oleh Yumna Makeup",
		featured: false,
	},
];
