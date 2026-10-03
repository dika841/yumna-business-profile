import { MessageCircle } from "lucide-react";
import { Button } from "#/components/ui/button";
import { createWhatsAppUrl } from "#/lib/whatsapp";

export default function ContactCta() {
	const waUrl = createWhatsAppUrl();

	return (
		<section id="kontak" className="scroll-mt-20 py-16 sm:py-24">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="relative overflow-hidden rounded-3xl border border-(--line) bg-(--sea-ink) px-6 py-12 sm:px-12 sm:py-16 text-center text-white shadow-xl">
					<div className="pointer-events-none absolute -top-24 left-1/2 z-0 h-64 w-64 -translate-x-1/2 rounded-full bg-(--lagoon) opacity-20 blur-3xl" />
					<div className="pointer-events-none absolute -bottom-24 right-10 z-0 h-64 w-64 rounded-full bg-(--palm) opacity-20 blur-3xl" />
					<div className="relative z-10 max-w-2xl mx-auto space-y-5">
						<span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-pink-200 backdrop-blur-xs">
							Konsultasi & Reservasi
						</span>

						<h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
							Siap Tampil Anggun & Memesona di Hari Bahagia Anda?
						</h2>

						<p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl mx-auto">
							Slot tanggal rias sangat terbatas terutama di akhir pekan dan
							musim wisuda Bandung. Amankan jadwal Anda sekarang melalui
							WhatsApp.
						</p>

						<div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
							<Button
								asChild
								size="lg"
								className="w-full sm:w-auto rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-6 shadow-lg text-sm sm:text-base transition-all hover:scale-105"
							>
								<a
									href={waUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center justify-center gap-2.5"
								>
									<MessageCircle className="h-5 w-5 text-white" />
									<span className="text-white">Booking via WhatsApp</span>
								</a>
							</Button>
						</div>

						<p className="text-xs text-zinc-400 pt-2">
							Respon cepat setiap hari • Konsultasi gratis seputar look & jadwal
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
