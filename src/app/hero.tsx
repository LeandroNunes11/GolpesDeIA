"use client";

import { Button, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

function Hero() {
	const router = useRouter();

	const scrollToSection = (
		e: React.MouseEvent<HTMLButtonElement>,
		href: string,
	) => {
		e.preventDefault();
		const targetId = href.replace("#", "");
		const elem = document.getElementById(targetId);
		if (elem) {
			const offset = -15;
			const elementPosition = elem.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	};

	return (
		<div
			id="home"
			className="relative min-h-screen w-full bg-[url('/image/course.png')] bg-cover bg-no-repeat"
		>
			<div className="absolute inset-0 h-full w-full bg-gray-900/60" />
			<div className="grid min-h-screen px-8">
				<div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
					<Typography
						variant="h1"
						color="white"
						className="md:max-w-full lg:max-w-3xl mt-12"
					>
						Golpes de IA: Proteja-se da Nova Era de Fraudes Digitais
					</Typography>
					<Typography
						variant="lead"
						color="white"
						className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
					>
						Explore como a inteligência artificial está sendo utilizada para
						criar golpes sofisticados que podem enganar até os mais atentos.
						Descubra as táticas utilizadas e as melhores práticas para proteger
						sua privacidade e segurança online.
					</Typography>
					<div>
						<Button
							color="white"
							variant="gradient"
							onClick={(e) => scrollToSection(e, "#sobre_ia")}
						>
							SAIBA MAIS
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;