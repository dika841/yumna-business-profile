import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import FloatingWhatsApp from "#/components/layout/FloatingWhatsApp";
import Footer from "#/components/layout/Footer";
import Header from "#/components/layout/Header";
import NotFound from "#/components/layout/NotFound";
import { TooltipProvider } from "#/components/ui/tooltip";
import { siteConfig } from "#/config/site";
import { generateFaqSchema, generateLocalBusinessSchema } from "#/lib/seo";

import appCss from "../styles.css?url";

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`;

export const Route = createRootRoute({
	head: () => {
		const businessSchema = generateLocalBusinessSchema();
		const faqSchema = generateFaqSchema();

		return {
			meta: [
				{
					charSet: "utf-8",
				},
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					title: `${siteConfig.name} — ${siteConfig.tagline}`,
				},
				{
					name: "description",
					content: siteConfig.description,
				},
				{
					name: "keywords",
					content:
						"MUA Bandung, Makeup Artist Bandung, Wedding Makeup Bandung, Rias Pengantin Bandung, Makeup Wisuda Bandung, Makeup Lamaran Bandung, Yumna Makeup",
				},
				{
					name: "author",
					content: siteConfig.name,
				},
				{
					property: "og:type",
					content: "website",
				},
				{
					property: "og:locale",
					content: siteConfig.locale,
				},
				{
					property: "og:url",
					content: siteConfig.url,
				},
				{
					property: "og:title",
					content: `${siteConfig.name} — ${siteConfig.tagline}`,
				},
				{
					property: "og:description",
					content: siteConfig.description,
				},
				{
					property: "og:site_name",
					content: siteConfig.name,
				},
				{
					name: "twitter:card",
					content: "summary_large_image",
				},
				{
					name: "twitter:title",
					content: `${siteConfig.name} — ${siteConfig.tagline}`,
				},
				{
					name: "twitter:description",
					content: siteConfig.description,
				},
			],
			links: [
				{
					rel: "stylesheet",
					href: appCss,
				},
				{
					rel: "canonical",
					href: siteConfig.url,
				},
			],
			scripts: [
				{
					type: "application/ld+json",
					children: JSON.stringify(businessSchema),
				},
				{
					type: "application/ld+json",
					children: JSON.stringify(faqSchema),
				},
			],
		};
	},
	notFoundComponent: NotFound,
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="id" suppressHydrationWarning>
			<head>
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: Theme initialization script */}
				<script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
				<HeadContent />
			</head>
			<body
				suppressHydrationWarning
				className="font-sans antialiased text-foreground bg-background selection:bg-primary selection:text-white transition-colors duration-200"
			>
				<TooltipProvider>
					<div className="flex min-h-screen flex-col">
						<Header />
						<div className="flex-1">{children}</div>
						<Footer />
					</div>
					<FloatingWhatsApp />
				</TooltipProvider>

				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
