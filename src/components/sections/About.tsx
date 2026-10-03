import { siteConfig } from "#/config/site";

export default function About() {
	return (
		<section
			id="tentang"
			className="scroll-mt-20 py-16 sm:py-20 bg-[var(--surface)] transition-colors duration-200"
		>
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="grid gap-12 lg:grid-cols-12 lg:items-center">
					{/* Portrait Image */}
					<div className="lg:col-span-5">
						<div className="relative mx-auto max-w-sm lg:max-w-none">
							<div className="aspect-[3/4] overflow-hidden rounded-2xl border border-[var(--line)] shadow-md">
								<img
									src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80"
									alt="Proses rias makeup artist profesional Yumna Makeup Bandung"
									className="h-full w-full object-cover"
									loading="lazy"
								/>
							</div>
						</div>
					</div>

					{/* Narrative Content */}
					<div className="lg:col-span-7 space-y-6">
						<div>
							<p className="text-xs font-bold uppercase tracking-widest text-[var(--lagoon-deep)]">
								Tentang Kami
							</p>
							<h2 className="mt-2 font-serif text-2xl font-bold tracking-tight text-[var(--sea-ink)] sm:text-4xl">
								Sentuhan Riasan Personal & Profesional di Kota Bandung
							</h2>
						</div>

						<p className="text-base leading-relaxed text-[var(--sea-ink-soft)]">
							{siteConfig.name} hadir dengan keyakinan bahwa makeup terbaik
							bukanlah mengubah seseorang menjadi orang lain, melainkan
							menonjolkan versi tercantik dari karakter wajah aslinya.
						</p>

						<p className="text-base leading-relaxed text-[var(--sea-ink-soft)]">
							Dengan pengalaman menangani ratusan pengantin, wisudawati, dan
							keluarga di berbagai penjuru Bandung, kami memadukan teknik
							complexion modern yang tahan lama terhadap cuaca Bandung dengan
							sentuhan riasan mata yang lembut dan berdimensi.
						</p>

						{/* 3 Pillars Value Proposition */}
						<div className="pt-4 grid gap-4 sm:grid-cols-3">
							<div className="rounded-xl border border-[var(--line)] bg-[var(--background)] p-4">
								<h3 className="font-serif text-base font-bold text-[var(--sea-ink)]">
									Personal
								</h3>
								<p className="mt-1 text-xs text-[var(--sea-ink-soft)] leading-relaxed">
									Konsultasi intensif sebelum hari-H untuk memahami kondisi
									kulit dan preferensi riasan Anda.
								</p>
							</div>

							<div className="rounded-xl border border-[var(--line)] bg-[var(--background)] p-4">
								<h3 className="font-serif text-base font-bold text-[var(--sea-ink)]">
									Profesional
								</h3>
								<p className="mt-1 text-xs text-[var(--sea-ink-soft)] leading-relaxed">
									Disiplin waktu kehadiran, peralatan steril higienis, dan
									produk kecantikan terkurasi.
								</p>
							</div>

							<div className="rounded-xl border border-[var(--line)] bg-[var(--background)] p-4">
								<h3 className="font-serif text-base font-bold text-[var(--sea-ink)]">
									Bandung-Based
								</h3>
								<p className="mt-1 text-xs text-[var(--sea-ink-soft)] leading-relaxed">
									Home service fleksibel ke seluruh penjuru Bandung Raya tanpa
									kendala jarak.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
