import { createFileRoute } from "@tanstack/react-router";
import About from "#/components/sections/About";
import ContactCta from "#/components/sections/ContactCta";
import WhyUs from "#/components/sections/WhyUs";
import { siteConfig } from "#/config/site";

export const Route = createFileRoute("/about")({
	head: () => ({
		meta: [
			{
				title: `Tentang ${siteConfig.name} — Makeup Artist Bandung`,
			},
			{
				name: "description",
				content: `Profil ${siteConfig.name}, layanan makeup artist profesional di Kota Bandung untuk hari pernikahan, lamaran, wisuda, dan momen spesial Anda.`,
			},
		],
	}),
	component: AboutPage,
});

function AboutPage() {
	return (
		<main className="py-8">
			<About />
			<WhyUs />
			<ContactCta />
		</main>
	);
}
