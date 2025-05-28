import Image from "next/image";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="gap-8 border-t border-prohealth-white/20 ">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex  justify-between items-center md:flex-row gap-8 py-8">
					<Image
						src="/logo2.png"
						alt="logo da aplicação"
						width={80}
						height={80}
						className="object-contain"
					/>
					<nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-prohealth-primaryDark">
						<Link
							href="/termos-de-uso"
							className="hover:text-prohealth-primary"
						>
							Termos de uso
						</Link>
						<Link
							href="/politica-de-privacidade"
							className="hover:text-prohealth-primary"
						>
							Política de privacidade
						</Link>
						<Link href="/feedback" className="hover:text-prohealth-primary">
							Feedback
						</Link>
					</nav>
				</div>
			</div>
		</footer>
	);
}
