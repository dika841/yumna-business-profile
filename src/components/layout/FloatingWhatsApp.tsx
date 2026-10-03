import { MessageCircle } from "lucide-react";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "#/components/ui/tooltip";
import { createWhatsAppUrl } from "#/lib/whatsapp";

export default function FloatingWhatsApp() {
	const waUrl = createWhatsAppUrl();

	return (
		<div className="fixed bottom-6 right-6 z-40">
			<Tooltip>
				<TooltipTrigger asChild>
					<a
						href={waUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
						aria-label="Konsultasi via WhatsApp Yumna Makeup"
					>
						<MessageCircle className="h-6 w-6" />
					</a>
				</TooltipTrigger>
				<TooltipContent
					side="left"
					className="bg-[var(--sea-ink)] text-white text-xs px-3 py-1.5 shadow-md"
				>
					Konsultasi & Booking WhatsApp
				</TooltipContent>
			</Tooltip>
		</div>
	);
}
