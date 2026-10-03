export interface FaqItem {
	id: string;
	question: string;
	answer: string;
}

export const faqsData: FaqItem[] = [
	{
		id: "faq-1",
		question: "Apakah Yumna Makeup melayani di luar Bandung?",
		answer:
			"Untuk saat ini Yumna Makeup fokus melayani customer di wilayah Kota Bandung dan area terdekat seperti Cimahi dan Bandung Barat. Untuk lokasi di luar area tersebut, silakan diskusikan terlebih dahulu dengan kami via WhatsApp mengenai ketersediaan jadwal dan akomodasi.",
	},
	{
		id: "faq-2",
		question: "Bagaimana cara melakukan booking?",
		answer:
			'Booking dilakukan dengan mudah melalui WhatsApp resmi Yumna Makeup. Anda cukup klik tombol "Booking via WhatsApp" di website, lalu sertakan tanggal acara, jenis acara (wedding, lamaran, wisuda, atau event), lokasi di Bandung, dan preferensi waktu. Kami akan segera memeriksa ketersediaan slot dan memandu proses reservasi.',
	},
	{
		id: "faq-3",
		question: "Apakah bisa request makeup look?",
		answer:
			"Tentu saja! Kami sangat menganjurkan Anda mendiskusikan preferensi look yang diinginkan. Anda dapat mengirimkan foto referensi makeup, warna gaun/kebaya, dan kondisi kulit saat konsultasi WhatsApp agar kami dapat menyesuaikan look yang paling harmonis untuk wajah Anda.",
	},
	{
		id: "faq-4",
		question: "Apakah tersedia makeup untuk wisuda?",
		answer:
			"Ya, kami menyediakan paket khusus makeup wisuda untuk mahasiswi perguruan tinggi di Bandung. Layanan wisuda dirancang dengan ketahanan ekstra terhadap keringat dan cuaca, serta melayani reservasi pagi hari (subuh) langsung ke lokasi tempat tinggal Anda di Bandung.",
	},
	{
		id: "faq-5",
		question: "Bagaimana cara mengetahui harga makeup?",
		answer:
			"Untuk mendapatkan pricelist lengkap beserta detail paket (termasuk benefit retouch, hijab/hair styling, dan penawaran rombongan), silakan hubungi WhatsApp resmi Yumna Makeup. Kami akan dengan senang hati mengirimkan katalog harga terbaru.",
	},
];
