import Link from "next/link";
import { ActiveLink } from "../active-link/active-link";
import Image from "next/image";

export function Header() {
	return (
		<header className="fixed top-0 z-50 w-full border-b border-white backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="mx-auto max-w-7xl px-4 sm:px-6">
				<div className="flex h-20 items-center justify-between">
					<div className="flex-shrink-0">
						<Link href="/">
							<Image
								src="/gastroemfoco.png"
								alt="logo da aplicação"
								width={250}
								height={250}
							/>
						</Link>
					</div>
					<nav className="hidden md:flex flex-1 justify-center items-center gap-6">
						<ActiveLink href="/">Início</ActiveLink>
						<ActiveLink href="/servicos">Serviços</ActiveLink>
						<ActiveLink href="/exames">Exames</ActiveLink>
						<ActiveLink href="/blog">Blog</ActiveLink>
						<ActiveLink href="/contato">Contato</ActiveLink>
					</nav>
					<div className="flex-shrink-0">
						<button
							className="inline-flex items-center justify-center px-14 py-[7.7px] rounded-full text-white text-xs font-semibold bg-gastro-gradient shadow-[0_4px_8px_rgba(0,0,0,0.2)] hover:opacity-90 transition"
							type="button"
						>
							Entrar
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}
