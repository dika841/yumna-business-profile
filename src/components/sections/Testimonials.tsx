import { Star } from "lucide-react";
import { testimonialsData } from "#/data/testimonials";

const RATING_STARS = [1, 2, 3, 4, 5] as const;

export default function Testimonials() {
	return (
		<section
			id="testimoni"
			className="scroll-mt-20 py-16 sm:py-24 bg-[var(--surface)] transition-colors duration-200"
		>
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
					<p className="text-xs font-bold uppercase tracking-widest text-[var(--lagoon-deep)]">
						Ulasan Klien
					</p>
					<h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[var(--sea-ink)] sm:text-4xl">
						Cerita Bahagia dari Klien Kami
					</h2>
					<p className="mt-3 text-sm sm:text-base text-[var(--sea-ink-soft)] leading-relaxed">
						Pengalaman nyata para calon pengantin dan wisudawati yang
						mempercayakan riasannya kepada Yumna Makeup.
					</p>
				</div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{testimonialsData.map((testi) => (
						<div
							key={testi.id}
							className="flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-[var(--background)] p-6 shadow-xs"
						>
							<div>
								{/* 5-star rating */}
								<div className="flex items-center gap-0.5 text-amber-400">
									{RATING_STARS.slice(0, testi.rating).map((starNum) => (
										<Star key={starNum} className="h-4 w-4 fill-current" />
									))}
								</div>

								<p className="mt-4 text-xs sm:text-sm text-[var(--sea-ink-soft)] leading-relaxed italic">
									"{testi.quote}"
								</p>
							</div>

							<div className="mt-6 pt-4 border-t border-[var(--line)] flex items-center gap-3">
								<img
									src={testi.avatarUrl}
									alt={`Foto profil ulasan ${testi.name}`}
									className="h-10 w-10 rounded-full object-cover border border-[var(--line)]"
									loading="lazy"
								/>
								<div>
									<p className="text-xs font-bold text-[var(--sea-ink)]">
										{testi.name}
									</p>
									<p className="text-[11px] text-[var(--lagoon-deep)] font-medium">
										{testi.occasion}
									</p>
									<p className="text-[10px] text-[var(--sea-ink-soft)]">
										{testi.location}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
