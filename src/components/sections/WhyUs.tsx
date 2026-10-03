import { whyUsData } from "#/data/whyUs";

export default function WhyUs() {
	return (
		<section id="keunggulan" className="scroll-mt-20 py-16 sm:py-24">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
					<p className="text-xs font-bold uppercase tracking-widest text-[var(--lagoon-deep)]">
						Nilai & Komitmen
					</p>
					<h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[var(--sea-ink)] sm:text-4xl">
						Kenapa Memilih Yumna Makeup?
					</h2>
					<p className="mt-3 text-sm sm:text-base text-[var(--sea-ink-soft)] leading-relaxed">
						Dedikasi kami untuk memberikan pengalaman rias yang menenangkan,
						higienis, dan hasil yang memuaskan di hari spesial Anda.
					</p>
				</div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{whyUsData.map((item) => (
						<div
							key={item.number}
							className="relative flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-6 shadow-xs hover:border-[var(--lagoon-deep)] transition-colors duration-200"
						>
							<div>
								<span className="font-serif text-3xl font-bold text-[var(--lagoon-deep)] opacity-80">
									{item.number}
								</span>
								<h3 className="mt-4 font-serif text-lg font-bold text-[var(--sea-ink)]">
									{item.title}
								</h3>
								<p className="mt-2 text-xs sm:text-sm text-[var(--sea-ink-soft)] leading-relaxed">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
