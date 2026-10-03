import { MessageCircle } from "lucide-react";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import { Card, CardContent } from "#/components/ui/card";
import { servicesData } from "#/data/services";
import { createWhatsAppUrl } from "#/lib/whatsapp";

export default function Services() {
	return (
		<section id="layanan" className="scroll-mt-20 py-16 sm:py-24">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
					<p className="text-xs font-bold uppercase tracking-widest text-(--lagoon-deep)">
						Layanan Kami
					</p>
					<h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-(--sea-ink) sm:text-4xl">
						Riasan Sempurna untuk Setiap Momen Berharga
					</h2>
					<p className="mt-3 text-sm sm:text-base text-(--sea-ink-soft) leading-relaxed">
						Pilihan paket makeup komprehensif yang dirancang khusus untuk
						kenyamanan dan keindahan tampilan Anda di Bandung.
					</p>
				</div>

				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
					{servicesData.map((service) => {
						const waServiceUrl = createWhatsAppUrl({
							serviceTitle: service.title,
						});

						return (
							<Card
								key={service.id}
								className="overflow-hidden py-0 border border-(--line) bg-(--surface-strong) shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
							>
								<div className="relative aspect-video w-full overflow-hidden bg-muted">
									<img
										src={service.image}
										alt={service.imageAlt}
										className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
										loading="lazy"
									/>
									<div className="absolute top-3 left-3">
										<Badge
											variant="secondary"
											className="bg-white/90 text-(--sea-ink) dark:bg-zinc-900/90 backdrop-blur-xs font-medium text-xs"
										>
											{service.subtitle}
										</Badge>
									</div>
								</div>

								<CardContent className="p-6 flex flex-col flex-1">
									<h3 className="font-serif text-xl font-bold text-(--sea-ink)">
										{service.title}
									</h3>
									<p className="mt-2 text-sm text-(--sea-ink-soft) leading-relaxed">
										{service.description}
									</p>

									<div className="mt-4 pt-4 border-t border-(--line)">
										<p className="text-xs font-semibold text-(--sea-ink) uppercase tracking-wider mb-2">
											Fasilitas Layanan:
										</p>
										<ul className="space-y-1.5 text-xs text-(--sea-ink-soft)">
											{service.features.map((feature) => (
												<li key={feature} className="flex items-start gap-2">
													<span className="text-(--lagoon-deep) font-bold">
														•
													</span>
													<span>{feature}</span>
												</li>
											))}
										</ul>
									</div>

									<div className="mt-6 pt-4 border-t border-(--line) flex items-center justify-between gap-4">
										<span className="text-xs text-(--sea-ink-soft) italic">
											{service.idealFor}
										</span>
										<Button
											asChild
											size="sm"
											className="rounded-full text-white shrink-0 px-4 text-xs font-medium"
										>
											<a
												href={waServiceUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-1.5"
											>
												<MessageCircle className="h-3.5 w-3.5 text-white" />
												<span className="text-white">Konsultasi Paket</span>
											</a>
										</Button>
									</div>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
}
