"use client";

import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useEffect } from "react";

const LINKS = [
	{
		title: "Página",
		items: [
			{ name: "Home", href: "#home" },
			{ name: "Sobre IA", href: "#sobre_ia" },
			{ name: "Golpes", href: "#golpes" },
			{ name: "Relatos", href: "#relatos" },
		],
	},
	{
		title: "Contatos",
		items: [
			{ name: "Suporte", href: "#suporte" },
			{ name: "Conte-nos", href: "#conte-nos" },
		],
	},
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
	useEffect(() => {
		const smoothScroll = (e: MouseEvent) => {
			e.preventDefault();
			const target = e.target as HTMLAnchorElement;
			const href = target.getAttribute("href");
			if (href && href.startsWith("#")) {
				const element = document.querySelector(href);
				if (element) {
					element.scrollIntoView({
						behavior: "smooth",
						block: "start",
					});
				}
			}
		};

		const links = document.querySelectorAll('a[href^="#"]');
		links.forEach((link) => {
			link.addEventListener("click", smoothScroll);
		});

		return () => {
			links.forEach((link) => {
				link.removeEventListener("click", smoothScroll);
			});
		};
	}, []);

	return (
		<footer id="conte-nos" className="pt-16 pb-4">
			<div className="container max-w-6xl flex flex-col mx-auto px-7">
				<div className="grid grid-cols-2 !w-full ">
					<div className="">
						<Typography variant="h6" className="mb-3 text-left">
							Compartilhe sua Experiência
						</Typography>
						<Typography className="!text-gray-500 font-normal mb-4 text-base">
							Já teve alguma experiência com golpes envolvendo inteligência
							artificial? Compartilhe sua história conosco! Sua experiência pode
							ajudar outras pessoas a se protegerem.
						</Typography>
						<div className="flex mb-3 flex-col lg:flex-grow items-start gap-4">
							<form
								action="https://formsubmit.co/sacblogseguranca@gmail.com"
								method="POST"
							>
								<div className="w-full">
									<Typography
										variant="small"
										className="font-medium mb-2 text-left"
									>
										Digite seu nome:
									</Typography>
									<Input
										type="text"
										name="name"
										label="Nome"
										color="gray"
										required
									/>
									<Typography
										variant="small"
										className="font-medium mb-2 text-left"
									>
										Digite seu Email:
									</Typography>
									<Input
										type="email"
										name="email"
										label="Email"
										color="gray"
										required
									/>
									<Typography
										variant="small"
										className="font-medium mb-2 text-left"
									>
										Digite sua mensagem
									</Typography>
									<Textarea
										cols={30}
										rows={5}
										name="message"
										label="Mensagem"
										color="gray"
										required
									></Textarea>
								</div>
								<Button
									type="submit"
									color="gray"
									className="w-full lg:w-fit"
									size="md"
								>
									Enviar
								</Button>
								<input type="hidden" name="_template" value={"table"} />
							</form>
						</div>
					</div>
				</div>
			</div>
			<div id="sobre" className="bg-gray-900 mt-28 w-full">
				<div className="max-w-6xl mx-auto py-10 px-4">
					<div className="flex justify-center gap-10 mb-10 lg:mb-0 md:gap-32">
						{LINKS.map(({ title, items }) => (
							<ul key={title}>
								<Typography variant="h6" color="light-blue" className="mb-4">
									{title}
								</Typography>
								{items.map((item) => (
									<li key={item.name}>
										<Link href={item.href} passHref legacyBehavior>
											<Typography
												as="a"
												className="py-1 font-normal !text-gray-500 transition-colors hover:!text-gray-200"
											>
												{item.name}
											</Typography>
										</Link>
									</li>
								))}
							</ul>
						))}
					</div>
				</div>
			</div>

			<div className="container max-w-6xl mx-auto px-7">
				<Typography
					color="blue-gray"
					className="md:text-center pt-4 font-normal !text-gray-700"
				>
					&copy; {CURRENT_YEAR} Site feito com intuito Informativo e Beneficente.
				</Typography>
			</div>
		</footer>
	);
}

export default Footer;