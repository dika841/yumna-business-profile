import { siteConfig } from "#/config/site";
import { createWhatsAppUrl } from "#/lib/whatsapp";

export default function Footer() {
	const currentYear = new Date().getFullYear();
	const waUrl = createWhatsAppUrl();

	return (
		<footer className="border-t border-[var(--line)] bg-[var(--surface)] text-[var(--sea-ink-soft)] transition-colors duration-200">
			<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{/* Brand & Identity */}
					<div className="space-y-3">
						<h3 className="font-serif text-xl font-bold tracking-tight text-[var(--sea-ink)]">
							{siteConfig.name}
						</h3>
						<p className="text-sm leading-relaxed text-[var(--sea-ink-soft)]">
							{siteConfig.description}
						</p>
						<div className="pt-1">
							<span className="inline-block rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1 text-xs font-semibold text-[var(--sea-ink)]">
								{siteConfig.serviceArea}
							</span>
						</div>
					</div>

					{/* Navigasi Layanan */}
					<div className="space-y-3">
						<h4 className="text-xs font-bold uppercase tracking-wider text-[var(--sea-ink)]">
							Layanan Makeup
						</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a
									href="/#layanan"
									className="hover:text-[var(--sea-ink)] transition-colors"
								>
									Wedding Makeup Bandung
								</a>
							</li>
							<li>
								<a
									href="/#layanan"
									className="hover:text-[var(--sea-ink)] transition-colors"
								>
									Engagement & Lamaran
								</a>
							</li>
							<li>
								<a
									href="/#layanan"
									className="hover:text-[var(--sea-ink)] transition-colors"
								>
									Graduation / Wisuda
								</a>
							</li>
							<li>
								<a
									href="/#layanan"
									className="hover:text-[var(--sea-ink)] transition-colors"
								>
									Party, Event & Photoshoot
								</a>
							</li>
						</ul>
					</div>

					{/* Area Layanan Local SEO */}
					<div className="space-y-3">
						<h4 className="text-xs font-bold uppercase tracking-wider text-[var(--sea-ink)]">
							Wilayah Layanan
						</h4>
						<p className="text-sm leading-relaxed">
							Melayani reservasi home service dan on-location di seluruh
							kecamatan Kota Bandung (Dago, Coblong, Buah Batu, Setiabudi,
							Antapani, Sukajadi) serta Kota Cimahi & Bandung Barat.
						</p>
					</div>

					{/* Kontak & Reservasi */}
					<div className="space-y-3">
						<h4 className="text-xs font-bold uppercase tracking-wider text-[var(--sea-ink)]">
							Kontak & Booking
						</h4>
						<div className="space-y-1.5 text-sm">
							<p>
								<span className="font-medium text-[var(--sea-ink)]">
									WhatsApp:
								</span>{" "}
								<a
									href={waUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-[var(--sea-ink)] underline underline-offset-2"
								>
									{siteConfig.whatsappDisplay}
								</a>
							</p>
							<p>
								<span className="font-medium text-[var(--sea-ink)]">
									Instagram:
								</span>{" "}
								<a
									href={siteConfig.instagram}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-[var(--sea-ink)] underline underline-offset-2"
								>
									{siteConfig.instagramDisplay}
								</a>
							</p>
							<p className="text-xs text-[var(--sea-ink-soft)] pt-1">
								Jam Layanan: Sesuai jadwal booking & reservasi acara
							</p>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-10 border-t border-[var(--line)] pt-6 flex flex-col items-center justify-between gap-4 text-xs text-[var(--sea-ink-soft)] sm:flex-row">
					<p className="m-0">
						&copy; {currentYear} {siteConfig.name}. Seluruh hak cipta
						dilindungi.
					</p>
					<p className="m-0">Jasa MUA Profesional Kota Bandung, Jawa Barat</p>
				</div>
			</div>
		</footer>
	);
}
