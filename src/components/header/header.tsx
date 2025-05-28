import Link from "next/link";
import { ActiveLink } from "../active-link/active-link";
import Image from "next/image";

export function Header() {
	return (
		<header className="fixed top-0 z-50 w-full border-b border-prohealth-white/20 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-80">
				<div className="flex h-20 items-center justify-between">
					<Link href="/">
						<Image
							src="/logo2.png"
							alt="logo da aplicação"
							width={100}
							height={100}
						/>
					</Link>
					<nav className="flex items-center gap-6">
						<ActiveLink href="/">Início</ActiveLink>
						<ActiveLink href="/sobre">Sobre</ActiveLink>
						<ActiveLink href="/blog">Blog</ActiveLink>
						<ActiveLink href="/contato">Contato</ActiveLink>
						<button className="bg-white" type="button">
							Entrar
						</button>
					</nav>
				</div>
			</div>
		</header>
	);
}
