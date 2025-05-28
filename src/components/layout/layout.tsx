import { Footer } from "../footer/footer";
import { Header } from "../header/header";

type LayoutProps = {
	children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
	return (
		<div className="relative flex min-h-screen flex-col dark">
			<Header />
			<main className="flex-1 flex-col">{children}</main>
			<Footer />
		</div>
	);
}
