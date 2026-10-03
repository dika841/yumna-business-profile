import { Link } from "@tanstack/react-router";
import { Button } from "#/components/ui/button";

export default function NotFound() {
	return (
		<main className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
			<span className="font-serif text-6xl sm:text-8xl font-bold text-[var(--lagoon-deep)]">
				404
			</span>
			<h1 className="mt-4 font-serif text-2xl sm:text-3xl font-bold text-[var(--sea-ink)]">
				Halaman Tidak Ditemukan
			</h1>
			<p className="mt-2 text-sm text-[var(--sea-ink-soft)] max-w-md">
				Halaman yang Anda tuju mungkin telah dipindahkan atau tautan yang Anda
				masukkan kurang tepat.
			</p>
			<div className="mt-6">
				<Button
					asChild
					className="rounded-full bg-[var(--sea-ink)] hover:bg-[var(--lagoon-deep)] text-white px-6"
				>
					<Link to="/">Kembali ke Beranda</Link>
				</Button>
			</div>
		</main>
	);
}
