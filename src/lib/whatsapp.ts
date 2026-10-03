import { siteConfig } from "#/config/site";

export interface WhatsAppInquiryParams {
	serviceTitle?: string;
	lookTitle?: string;
	source?: string;
}

export function createWhatsAppUrl(params?: WhatsAppInquiryParams): string {
	let message = `Halo ${siteConfig.name}, saya ingin konsultasi mengenai layanan makeup.`;

	if (params?.serviceTitle) {
		message = `Halo ${siteConfig.name},\n\nSaya tertarik untuk konsultasi dan booking layanan *${params.serviceTitle}*.\n\nNama:\nTanggal acara:\nLokasi di Bandung:\nCatatan tambahan:\n\nTerima kasih.`;
	} else if (params?.lookTitle) {
		message = `Halo ${siteConfig.name},\n\nSaya melihat portfolio look *${params.lookTitle}* di website dan tertarik untuk konsultasi tampilan serupa.\n\nNama:\nTanggal acara:\nJenis acara:\n\nTerima kasih.`;
	} else {
		message = `Halo ${siteConfig.name},\n\nSaya ingin konsultasi mengenai layanan makeup di Bandung.\n\nNama:\nTanggal acara:\nJenis acara:\nLokasi:\nLayanan yang diinginkan:\n\nTerima kasih.`;
	}

	return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
