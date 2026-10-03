import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "#/components/ui/button";
import {
	type PortfolioCategory,
	portfolioCategories,
	portfolioData,
} from "#/data/portfolio";
import { createWhatsAppUrl } from "#/lib/whatsapp";

export default function Portfolio() {
	const [activeCategory, setActiveCategory] =
		useState<PortfolioCategory>("all");

	const filteredPortfolio =
		activeCategory === "all"
			? portfolioData
			: portfolioData.filter((item) => item.category === activeCategory);

	return (
		<section
			id="portofolio"
			className="scroll-mt-20 py-16 sm:py-24 bg-(--surface) transition-colors duration-200"
		>
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
					<p className="text-xs font-bold uppercase tracking-widest text-(--lagoon-deep)">
						Galeri Karya
					</p>
					<h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-(--sea-ink) sm:text-4xl">
						Portofolio Hasil Riasan
					</h2>
					<p className="mt-3 text-sm sm:text-base text-(--sea-ink-soft) leading-relaxed">
						Eksplorasi ragam hasil makeup Yumna Makeup untuk hari pernikahan,
						lamaran, wisuda, hingga acara pesta keluarga di Bandung.
					</p>

					{/* Filter Pills */}
					<div className="mt-8 flex flex-wrap items-center justify-center gap-2">
						{portfolioCategories.map((category) => {
							const isActive = activeCategory === category.key;
							return (
								<button
									key={category.key}
									type="button"
									onClick={() => setActiveCategory(category.key)}
									className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
										isActive
											? "bg-(--sea-ink) text-white shadow-xs"
											: "border border-(--line) bg-background text-(--sea-ink-soft) hover:text-(--sea-ink) hover:border-(--sea-ink-soft)"
									}`}
								>
									{category.label}
								</button>
							);
						})}
					</div>
				</div>

				{/* Gallery Grid */}
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{filteredPortfolio.map((item) => {
						const waLookUrl = createWhatsAppUrl({ lookTitle: item.title });

						return (
							<div
								key={item.id}
								className="group relative flex flex-col overflow-hidden rounded-2xl border border-(--line) bg-background shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
							>
								<div className="relative aspect-4/5 w-full overflow-hidden bg-muted">
									<img
										src={item.image}
										alt={item.imageAlt}
										className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
										loading="lazy"
									/>
									<div className="absolute top-3 left-3">
										<span className="rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-xs">
											{item.categoryLabel}
										</span>
									</div>
								</div>

								<div className="p-4 flex flex-col flex-1 justify-between">
									<div>
										<h3 className="font-serif text-base font-bold text-(--sea-ink)">
											{item.title}
										</h3>
										<p className="mt-1 text-xs text-(--sea-ink-soft) line-clamp-2">
											{item.description}
										</p>
										<p className="mt-2 text-[11px] font-medium text-(--lagoon-deep)">
											{item.lookDetails}
										</p>
									</div>

									<div className="mt-4 pt-3 border-t border-(--line)">
										<Button
											asChild
											variant="outline"
											size="sm"
											className="w-full rounded-full border-(--line) text-xs text-(--sea-ink) hover:bg-(--sea-ink) hover:text-white transition-colors"
										>
											<a
												href={waLookUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center justify-center gap-1.5"
											>
												<MessageCircle className="h-3.5 w-3.5" />
												<span>Konsultasi Look Ini</span>
											</a>
										</Button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
