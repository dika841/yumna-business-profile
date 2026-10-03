export interface SiteConfig {
	name: string;
	tagline: string;
	description: string;
	url: string;
	locale: string;
	location: string;
	city: string;
	province: string;
	country: string;
	serviceArea: string;
	whatsapp: string;
	whatsappDisplay: string;
	instagram: string;
	instagramDisplay: string;
	openingHours: string;
	priceRange: string;
	geo: {
		latitude: number;
		longitude: number;
	};
}

export const siteConfig: SiteConfig = {
	name: "Yumna Makeup",
	tagline: "Makeup Artist Bandung untuk Momen Spesial Anda",
	description:
		"Jasa Makeup Artist (MUA) profesional di Kota Bandung untuk Wedding, Lamaran, Wisuda, dan Party dengan tampilan natural, elegan, dan tahan lama.",
	url: "https://yumnamakeup.com",
	locale: "id_ID",
	location: "Bandung, Jawa Barat",
	city: "Kota Bandung",
	province: "Jawa Barat",
	country: "Indonesia",
	serviceArea: "Kota Bandung & sekitarnya",
	whatsapp: "6283144873245",
	whatsappDisplay: "+62 831-4487-3245",
	instagram: "https://instagram.com/yumnamakeup",
	instagramDisplay: "@yumnamakeup",
	openingHours: "Senin - Minggu (Sesuai Reservasi / Booking)",
	priceRange: "IDR",
	geo: {
		latitude: -6.917464,
		longitude: 107.619123,
	},
};
