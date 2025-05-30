import Link from "next/link";
import type { LinkProps } from "next/link";
import { useRouter } from "next/router";

type ActiveLinkProps = {
	children: React.ReactNode;
} & LinkProps;

export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
	const router = useRouter();
	const isCurrentPath =
		router.asPath === href ||
		router.asPath === rest.as ||
		router.asPath.startsWith(String(rest.as));
	return (
		<Link
			href={href}
			className={`text-sm font-medium transition-colors hover:text-blue-500' ${
				isCurrentPath ? "text-secundary font-bold" : "text-secundary"
			}`}
		>
			{children}
		</Link>
	);
};
