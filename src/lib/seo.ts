import { siteConfig } from "#/config/site";
import { faqsData } from "#/data/faqs";
import { servicesData } from "#/data/services";

export function generateLocalBusinessSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "BeautySalon",
		"@id": `${siteConfig.url}/#business`,
		name: siteConfig.name,
		description: siteConfig.description,
		url: siteConfig.url,
		telephone: siteConfig.whatsappDisplay,
		priceRange: siteConfig.priceRange,
		address: {
			"@type": "PostalAddress",
			addressLocality: siteConfig.city,
			addressRegion: siteConfig.province,
			addressCountry: "ID",
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: siteConfig.geo.latitude,
			longitude: siteConfig.geo.longitude,
		},
		areaServed: [
			{
				"@type": "City",
				name: "Kota Bandung",
			},
			{
				"@type": "City",
				name: "Cimahi",
			},
			{
				"@type": "AdministrativeArea",
				name: "Bandung Barat",
			},
			{
				"@type": "AdministrativeArea",
				name: "Kabupaten Bandung",
			},
		],
		openingHoursSpecification: [
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: [
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
					"Sunday",
				],
				opens: "05:00",
				closes: "21:00",
			},
		],
		sameAs: [siteConfig.instagram],
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "Layanan Makeup Artist Bandung",
			itemListElement: servicesData.map((svc) => ({
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: svc.title,
					description: svc.description,
				},
			})),
		},
	};
}

export function generateFaqSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqsData.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer,
			},
		})),
	};
}
