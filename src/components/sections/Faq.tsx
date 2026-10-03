import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "#/components/ui/accordion";
import { faqsData } from "#/data/faqs";

export default function Faq() {
	return (
		<section id="faq" className="scroll-mt-20 py-16 sm:py-24">
			<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
					<p className="text-xs font-bold uppercase tracking-widest text-(--lagoon-deep)">
						Tanya Jawab
					</p>
					<h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-(--sea-ink) sm:text-4xl">
						Pertanyaan yang Sering Diajukan
					</h2>
					<p className="mt-3 text-sm sm:text-base text-(--sea-ink-soft) leading-relaxed">
						Informasi penting seputar area layanan, sistem booking, kustomisasi
						riasan, dan pricelist Yumna Makeup.
					</p>
				</div>

				<div className="rounded-2xl border border-(--line) bg-(--surface-strong) p-6 sm:p-8 shadow-xs">
					<Accordion
						type="single"
						collapsible
						defaultValue="faq-1"
						className="w-full"
					>
						{faqsData.map((faq) => (
							<AccordionItem
								key={faq.id}
								value={faq.id}
								className="border-b border-(--line) last:border-b-0 py-2"
							>
								<AccordionTrigger className="text-left font-serif text-base sm:text-lg font-bold text-(--sea-ink) hover:text-(--lagoon-deep) transition-colors">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="text-sm text-(--sea-ink-soft) leading-relaxed pt-2">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
}
