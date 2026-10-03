export interface ServiceItem {
	id: string;
	slug: string;
	title: string;
	subtitle: string;
	description: string;
	features: string[];
	idealFor: string;
	image: string;
	imageAlt: string;
}

export const servicesData: ServiceItem[] = [
	{
		id: "wedding",
		slug: "wedding-makeup",
		title: "Wedding Makeup",
		subtitle: "Akad Nikah & Resepsi",
		description:
			"Layanan rias pengantin eksklusif untuk hari teristimewa Anda. Mengutamakan hasil riasan yang anggun, manglingi namun tetap natural, serta tahan lama sepanjang rangkaian prosesi.",
		features: [
			"Konsultasi look & skin preparation",
			"Complexion tahan lama hingga 12+ jam",
			"Pemasangan hijab/hairdo & aksesoris",
			"Retouch untuk pergantian busana/sesi resepsi",
		],
		idealFor:
			"Calon pengantin akad nikah, resepsi adat maupun modern di Bandung.",
		image:
			"https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&w=900&q=80",
		imageAlt:
			"Riasan pengantin wedding makeup natural dan elegan oleh Yumna Makeup di Bandung",
	},
	{
		id: "engagement",
		slug: "engagement-makeup",
		title: "Engagement Makeup",
		subtitle: "Lamaran & Tunangan",
		description:
			"Makeup lembut nan memikat untuk momen pertunangan. Memberikan kesan fresh, flawless, dan bercahaya natural di depan keluarga besar serta bidikan kamera.",
		features: [
			"Soft glam / dewy complexion",
			"Eye makeup presisi sesuai bentuk mata",
			"Hijab styling / simple hairstyling",
			"Termasuk touch-up kit mini",
		],
		idealFor: "Acara lamaran, seserahan, dan pertemuan keluarga intim.",
		image:
			"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
		imageAlt:
			"Makeup lamaran engagement flawless fresh oleh Yumna Makeup Bandung",
	},
	{
		id: "graduation",
		slug: "graduation-makeup",
		title: "Graduation Makeup",
		subtitle: "Wisuda & Sumpah Profesi",
		description:
			"Riasan wisuda tahan banting yang tetap segar dari pagi hingga sore hari. Nyaman di kulit tanpa rasa berat saat mengenakan toga dan berfoto di luar ruangan.",
		features: [
			"Complexion tahan keringat dan tidak cakey",
			"Look youthful, segar, dan fotogenik",
			"Styling jilbab wisuda rapi / styling rambut",
			"Fleksibel untuk slot pagi hari di Bandung",
		],
		idealFor:
			"Mahasiswi wisuda ITB, Unpad, UPI, Telkom University, dan kampus Bandung.",
		image:
			"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
		imageAlt:
			"Riasan wisuda graduation makeup tahan lama di Bandung oleh Yumna Makeup",
	},
	{
		id: "party",
		slug: "party-event-makeup",
		title: "Party & Event Makeup",
		subtitle: "Keluarga, Photoshoot & Pesta",
		description:
			"Tampil memukau dan percaya diri untuk menghadiri pesta pernikahan keluarga, photoshoot studio, gala dinner, maupun perayaan formal lainnya.",
		features: [
			"Pilihan look: Natural Glam, Bold, atau Editorial",
			"Teknik shading & highlight yang menonjolkan fitur wajah",
			"Bulu mata berkualitas yang ringan di mata",
			"Dapat melayani makeup grup keluarga",
		],
		idealFor:
			"Pendamping pengantin, bridesmaid, photoshoot maternity/pre-wedding, dan tamu undangan.",
		image:
			"https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80",
		imageAlt:
			"Makeup pesta party dan photoshoot look profesional oleh Yumna Makeup Bandung",
	},
];
