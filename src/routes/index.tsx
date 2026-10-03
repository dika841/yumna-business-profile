import { createFileRoute } from "@tanstack/react-router";
import About from "#/components/sections/About";
import ContactCta from "#/components/sections/ContactCta";
import Faq from "#/components/sections/Faq";
import Hero from "#/components/sections/Hero";
import Portfolio from "#/components/sections/Portfolio";
import ServiceArea from "#/components/sections/ServiceArea";
import Services from "#/components/sections/Services";
import Testimonials from "#/components/sections/Testimonials";
import WhyUs from "#/components/sections/WhyUs";

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	return (
		<main>
			<Hero />
			<About />
			<Services />
			<Portfolio />
			<WhyUs />
			<Testimonials />
			<Faq />
			<ServiceArea />
			<ContactCta />
		</main>
	);
}
