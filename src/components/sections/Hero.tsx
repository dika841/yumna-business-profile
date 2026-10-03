import { MessageCircle, Star } from "lucide-react";
import { Button } from "#/components/ui/button";
import { createWhatsAppUrl } from "#/lib/whatsapp";

export default function Hero() {
	const waUrl = createWhatsAppUrl();

	return (
		<section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-20 lg:pb-32">
			{/* Background Subtle Gradient Blobs */}
			<div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-125 w-125 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.22),transparent_70%)] blur-2xl" />
			<div className="pointer-events-none absolute top-1/3 -right-24 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.12),transparent_70%)] blur-2xl" />

			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
					{/* Text Content */}
					<div className="lg:col-span-7">
						<h1 className="font-serif text-3xl font-bold tracking-tight text-(--sea-ink) sm:text-5xl lg:text-6xl sm:leading-[1.12]">
							Makeup Artist Bandung untuk Momen Spesial Anda
						</h1>

						<p className="mt-5 text-base sm:text-lg leading-relaxed text-(--sea-ink-soft) max-w-xl">
							Wujudkan riasan impian untuk pernikahan, lamaran, wisuda, dan
							pesta. Mengedepankan teknik rias yang menonjolkan kecantikan alami
							wajah, manglingi, anggun, dan tahan seharian.
						</p>

						{/* CTA Buttons */}
						<div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
							<Button
								asChild
								size="lg"
								className="rounded-full text-white shadow-md px-6 py-6 text-sm font-semibold transition-all hover:scale-[1.02]"
							>
								<a
									href={waUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2.5"
								>
									<MessageCircle className="h-5 w-5 text-white" />
									<span className="text-white">Booking via WhatsApp</span>
								</a>
							</Button>

							<Button
								asChild
								variant="outline"
								size="lg"
								className="rounded-full border-(--line) bg-(--surface) text-(--sea-ink) hover:bg-(--surface-strong) px-6 py-6 text-sm font-semibold transition-all"
							>
								<a href="#portofolio">Lihat Portofolio</a>
							</Button>
						</div>

						{/* Trust Badges */}
						<div className="mt-10 pt-8 border-t border-(--line) grid grid-cols-3 gap-4 max-w-lg">
							<div>
								<div className="flex items-center gap-1 text-(--sea-ink)">
									<Star className="h-4 w-4 fill-amber-400 text-amber-400" />
									<span className="font-serif text-xl font-bold">4.9/5</span>
								</div>
								<p className="text-xs text-(--sea-ink-soft) mt-0.5">
									Rating Kepuasan
								</p>
							</div>

							<div>
								<p className="font-serif text-xl font-bold text-(--sea-ink)">
									200+
								</p>
								<p className="text-xs text-(--sea-ink-soft) mt-0.5">
									Klien Bahagia
								</p>
							</div>

							<div>
								<p className="font-serif text-xl font-bold text-(--sea-ink)">
									100%
								</p>
								<p className="text-xs text-(--sea-ink-soft) mt-0.5">
									Produk Higienis
								</p>
							</div>
						</div>
					</div>

					{/* Hero Visual */}
					<div className="lg:col-span-5">
						<div className="relative mx-auto max-w-sm lg:max-w-none">
							{/* Outer Decorative Frame */}
							<div className="relative aspect-4/5 overflow-hidden rounded-3xl border border-(--line) shadow-xl">
								<img
									src="https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&w=800&q=85"
									alt="Hasil riasan pengantin Sunda modern oleh Yumna Makeup Bandung"
									className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
									loading="eager"
									fetchPriority="high"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

								{/* Float Card on Image */}
								<div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 p-4 backdrop-blur-md dark:bg-zinc-900/90 border border-white/20 shadow-lg">
									<p className="text-xs font-semibold text-(--lagoon-deep) uppercase tracking-wider">
										Signature Look
									</p>
									<p className="font-serif text-sm font-bold text-(--sea-ink) mt-0.5">
										Soft Glam Flawless Complexion
									</p>
									<p className="text-xs text-(--sea-ink-soft) mt-1">
										Cocok untuk akad nikah, lamaran & wisuda outdoor di Bandung.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
