import { siteConfig } from "#/config/site";

const bandungAreas = [
	"Coblong (Dago)",
	"Sukajadi (PVJ)",
	"Cidadap (Setiabudi)",
	"Cicendo",
	"Sumur Bandung",
	"Lengkong",
	"Buah Batu",
	"Regol",
	"Batununggal",
	"Bandung Wetan",
	"Antapani",
	"Arcamanik",
	"Cibeunying Kaler & Kidul",
	"Kota Cimahi",
	"Bandung Barat (Lembang & Padalarang)",
	"Majalaya",
];

export default function ServiceArea() {
	return (
		<section
			id="area-layanan"
			className="scroll-mt-20 py-16 sm:py-20 bg-(--surface) transition-colors duration-200"
		>
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="rounded-3xl border border-(--line) bg-background p-8 sm:p-12 shadow-xs">
					<div className="grid gap-8 lg:grid-cols-12 lg:items-center">
						<div className="lg:col-span-5 space-y-4">
							<p className="text-xs font-bold uppercase tracking-widest text-(--lagoon-deep)">
								Local Coverage
							</p>
							<h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-(--sea-ink)">
								Wilayah Jangkauan Layanan di Bandung
							</h2>
							<p className="text-sm text-(--sea-ink-soft) leading-relaxed">
								{siteConfig.name} berbasis di {siteConfig.location} dan siap
								melayani reservasi langsung ke kediaman, hotel, maupun gedung
								pertemuan di seluruh kawasan Bandung Raya.
							</p>
							<p className="text-xs text-(--sea-ink-soft) italic pt-2">
								* Untuk area di luar Bandung, silakan hubungi kami untuk
								mendiskusikan ketersediaan jadwal serta akomodasi perjalanan.
							</p>
						</div>

						<div className="lg:col-span-7">
							<div className="flex flex-wrap gap-2.5">
								{bandungAreas.map((area) => (
									<span
										key={area}
										className="inline-flex items-center rounded-full border border-(--line) bg-(--surface) px-3.5 py-1.5 text-xs font-medium text-(--sea-ink) shadow-xs"
									>
										{area}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
