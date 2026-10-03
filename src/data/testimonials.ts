export interface TestimonialItem {
	id: string;
	name: string;
	role: string;
	occasion: string;
	location: string;
	quote: string;
	rating: number;
	avatarUrl: string;
}

export const testimonialsData: TestimonialItem[] = [
	{
		id: "testi-1",
		name: "Anindya Putri",
		role: "Pengantin Akad & Resepsi",
		occasion: "Wedding Makeup",
		location: "Dago, Bandung",
		quote:
			"Kak Yumna bener-bener telaten dan dengerin request aku. Dari akad jam 7 pagi sampai resepsi siang selesai, makeup-nya sama sekali nggak geser atau cakey! Banyak tamu yang memuji hasil riasannya manglingi tapi tetep natural.",
		rating: 5,
		avatarUrl:
			"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
	},
	{
		id: "testi-2",
		name: "Farah Salsabila",
		role: "Mahasiswi ITB",
		occasion: "Graduation Makeup",
		location: "Coblong, Bandung",
		quote:
			"Datang subuh tepat waktu banget ke kosan. Makeup wisuda aku tahan seharian dari prosesi di Sasana Budaya Ganesha (Sabuga) sampai sore sesi foto studio. Ringan banget di muka!",
		rating: 5,
		avatarUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
	},
	{
		id: "testi-3",
		name: "Clara Meidiana",
		role: "Calon Pengantin",
		occasion: "Engagement Makeup",
		location: "Buah Batu, Bandung",
		quote:
			"Suka banget sama look lamaran kemarin! Warna peach-nya pas banget di kulit aku dan hijab styling-nya super rapi. Komunikasi lewat WhatsApp juga sangat ramah dan responsif membantu konsultasi look.",
		rating: 5,
		avatarUrl:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
	},
	{
		id: "testi-4",
		name: "Dinda Rahmawati",
		role: "Bridesmaid & Sister of the Bride",
		occasion: "Party Makeup",
		location: "Setiabudi, Bandung",
		quote:
			"Aku dan mama makeup sama tim Yumna Makeup untuk wedding kakak. Produk yang dipakai semua higienis dan kuasnya bersih banget. Hasilnya awet seharian meski kami mondar-mandir bantu acara.",
		rating: 5,
		avatarUrl:
			"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
	},
];
