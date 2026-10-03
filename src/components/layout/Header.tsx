import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "#/components/ThemeToggle";
import { Button } from "#/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "#/components/ui/sheet";
import { siteConfig } from "#/config/site";
import { createWhatsAppUrl } from "#/lib/whatsapp";

const navLinks = [
	{ href: "/#layanan", label: "Layanan" },
	{ href: "/#portofolio", label: "Portofolio" },
	{ href: "/#tentang", label: "Tentang" },
	{ href: "/#keunggulan", label: "Keunggulan" },
	{ href: "/#faq", label: "FAQ" },
	{ href: "/#kontak", label: "Kontak" },
];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const waUrl = createWhatsAppUrl();

	return (
		<header className="sticky top-0 z-50 border-b border-(--line) bg-(--surface-strong) backdrop-blur-md transition-colors duration-200">
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
				{/* Brand Logo */}
				<Link to="/" className="group flex flex-col text-decoration-none">
					<span className="font-serif text-xl font-bold tracking-tight text-(--sea-ink) group-hover:text-(--lagoon-deep) transition-colors sm:text-2xl">
						{siteConfig.name}
					</span>
					<span className="text-[10px] uppercase tracking-widest font-semibold text-(--sea-ink-soft) -mt-0.5">
						Makeup Artist Bandung
					</span>
				</Link>

				{/* Desktop Nav */}
				<nav
					className="hidden items-center gap-7 md:flex"
					aria-label="Navigasi Utama"
				>
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-sm font-medium text-(--sea-ink-soft) transition-colors hover:text-(--sea-ink)"
						>
							{link.label}
						</a>
					))}
				</nav>

				{/* Actions Desktop */}
				<div className="hidden items-center gap-3 md:flex">
					<ThemeToggle />
					<Button
						asChild
						size="sm"
						className="rounded-full bg-primary text-white hover:bg-(--lagoon-deep) shadow-sm px-4 font-medium transition-all"
					>
						<a
							href={waUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2"
						>
							<MessageCircle className="h-4 w-4 text-white" />
							<span className="text-white">Booking WhatsApp</span>
						</a>
					</Button>
				</div>

				{/* Mobile Nav Button */}
				<div className="flex items-center gap-2 md:hidden">
					<ThemeToggle />
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="h-9 w-9 text-(--sea-ink)"
								aria-label="Buka Menu"
							>
								<Menu className="h-5 w-5" />
							</Button>
						</SheetTrigger>
						<SheetContent
							side="right"
							className="w-70 sm:w-[320px] bg-background"
						>
							<SheetHeader className="text-left border-b border-(--line) pb-4">
								<SheetTitle className="font-serif text-xl font-bold text-(--sea-ink)">
									{siteConfig.name}
								</SheetTitle>
								<p className="text-xs text-(--sea-ink-soft) m-0">
									{siteConfig.tagline}
								</p>
							</SheetHeader>

							<div className="flex flex-col gap-4 py-6">
								{navLinks.map((link) => (
									<a
										key={link.href}
										href={link.href}
										onClick={() => setIsOpen(false)}
										className="text-base px-4 font-medium text-(--sea-ink) hover:text-(--lagoon-deep) transition-colors py-1"
									>
										{link.label}
									</a>
								))}

								<div className="pt-4 border-t border-(--line)">
									<Button
										asChild
										className="w-full rounded-full text-white shadow-sm"
									>
										<a
											href={waUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center justify-center gap-2"
										>
											<MessageCircle className="h-4 w-4 text-white" />
											<span className="text-white">Booking WhatsApp</span>
										</a>
									</Button>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
