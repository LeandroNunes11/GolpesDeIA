import React from "react";
import {
	Navbar as MTNavbar,
	Collapse,
	IconButton,
	Typography,
	Button,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

interface NavItemProps {
	children: React.ReactNode;
	href?: string;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

function NavItem({ children, href, onClick }: NavItemProps) {
	return (
		<li>
			<Typography
				as="a"
				href={href || "#"}
				target={href && href.startsWith("http") ? "_blank" : "_self"}
				variant="small"
				className="font-medium cursor-pointer"
				onClick={onClick}
			>
				{children}
			</Typography>
		</li>
	);
}

export function Navbar() {
	const [open, setOpen] = React.useState(false);
	const [isScrolling, setIsScrolling] = React.useState(false);

	const handleOpen = () => setOpen((cur) => !cur);

	React.useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpen(false),
		);
	}, []);

	React.useEffect(() => {
		function handleScroll() {
			if (window.scrollY > 0) {
				setIsScrolling(true);
			} else {
				setIsScrolling(false);
			}
		}

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string,
	) => {
		e.preventDefault();
		const targetId = href.replace("#", "");
		const elem = document.getElementById(targetId);
		if (elem) {
			const offset = 80;
			const elementPosition = elem.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
			setOpen(false);
		}
	};

	return (
		<MTNavbar
			fullWidth
			shadow={false}
			blurred={false}
			color={isScrolling ? "white" : "transparent"}
			className="fixed top-0 z-50 border-0"
		>
			<div className="container mx-auto flex items-center justify-between">
				<Typography variant="h6" color={isScrolling ? "blue-gray" : "white"}>
					APIEXT - GOLPES COM IA
				</Typography>
				<ul
					className={`ml-10 hidden items-center gap-6 lg:flex ${
						isScrolling ? "text-gray-900" : "text-white"
					}`}
				>
					<NavItem href="#home" onClick={(e) => scrollToSection(e, "#home")}>
						Home
					</NavItem>
					<NavItem href="#sobre" onClick={(e) => scrollToSection(e, "#sobre")}>
						Sobre
					</NavItem>
					<NavItem href="mailto:sacblogseguranca@gmail.com">Ajuda</NavItem>
				</ul>
				<IconButton
					variant="text"
					color={isScrolling ? "gray" : "white"}
					onClick={handleOpen}
					className="ml-auto inline-block lg:hidden"
				>
					{open ? (
						<XMarkIcon strokeWidth={2} className="h-6 w-6" />
					) : (
						<Bars3Icon strokeWidth={2} className="h-6 w-6" />
					)}
				</IconButton>
			</div>
			<Collapse open={open}>
				<div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
					<ul className="flex flex-col gap-4 text-blue-gray-900">
						<NavItem href="#home" onClick={(e) => scrollToSection(e, "#home")}>
							Home
						</NavItem>
						<NavItem
							href="#sobre"
							onClick={(e) => scrollToSection(e, "#sobre")}
						>
							Sobre
						</NavItem>
						<NavItem
							href="mailto:sacblogseguranca@gmail.com"
						>
							Ajuda
						</NavItem>
					</ul>
				</div>
			</Collapse>
		</MTNavbar>
	);
}

export default Navbar;