"use client";

import Image from "next/image";
import React from "react";
import { Typography, Carousel } from "@material-tailwind/react";

const testimonials = [
	{
		text: "Era o meu rosto, meu cabelo e a minha voz. O único detalhe é que a voz estava um pouco em descompasso com o vídeo, mas sabemos que isso pode acontecer devido à conexão com a internet. É assustador ver a evolução desse tipo de golpe.",
		name: "Hanna Gomes",
		position: "DIZ VÍTIMA À @ BBC NEWS BRASIL.",
	},
	{
		text: "A tecnologia, quando bem usada, pode levar a humanidade a evolução, mas pessoas de mal caráter tem usado a inteligência artificial para praticar crimes. Estou sendo vítima de um crime, onde minha imagem e voz, com áudio criado por IA, falam de promoções e bazar, de uma marca de luxo, que não estão acontecendo. Não acreditem, é um golpe!",
		name: "Luciana Gimenez",
		position: "DECLAROU EM POST @ REVISTA VEJA.",
	},
	{
		text: "Utilizam a minha imagem, a imagem da nossa empresa com inteligência artificial. A voz é minha, mas é tudo falso. Ou seja, as pessoas precisam, quando vêem uma oferta muito boa, no caso 10% do que o valor do produto vale. Eles precisam checar no site oficial da empresa.",
		name: "Luciano Hang",
		position: "DESTACOU EM ENTREVISTA @ METRÓPOLES.",
	},
];

export function CarouselFeatures() {
	return (
		<section id="relatos" className="px-8 pt-36 pb-20">
			<div className="flex mb-16 flex-col items-center">
				<Typography variant="h2" className="text-center mb-2" color="blue-gray">
					Depoimentos de Vítimas
				</Typography>
				<Typography
					variant="lead"
					className="mb-3 w-full text-center font-normal !text-gray-500 lg:w-10/12"
				>
					Depoimentos de Vítimas: Histórias Reais para Alertar e Conscientizar!
				</Typography>
			</div>
			<div className="container mx-auto !rounded-lg bg-[url('/image/Background.png')] bg-center py-10 lg:px-16">
				<Carousel
					autoplay={true}
					autoplayDelay={12000}
					loop={true}
					transition={{ duration: 1 }}
					nextArrow={() => <></>}
					prevArrow={() => <></>}
					navigation={({ setActiveIndex, activeIndex, length }) => (
						<div className="absolute left-16 bottom-0 z-50 flex h-5 w-20 -translate-x-2/4 gap-2 md:left-2/4">
							{new Array(length).fill("").map((_, i) => (
								<span
									key={i}
									className={`block h-1 w-10 cursor-pointer transition-all content-[''] ${
										activeIndex === i ? "bg-white" : "bg-white/50"
									}`}
									onClick={() => setActiveIndex(i)}
								/>
							))}
						</div>
					)}
				>
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="!relative flex grid-cols-1 flex-col-reverse gap-6 px-10 py-14 md:grid md:grid-cols-5 md:gap-14 md:py-20"
						>
							<div className="col-span-3 flex flex-col items-start justify-center">
								<Typography
									variant="lead"
									color="white"
									className="mb-5 text-xl font-normal"
								>
									{testimonial.text}
								</Typography>
								<Typography
									variant="small"
									color="white"
									className="font-medium uppercase"
								>
									{testimonial.name},{" "}
									<span className="font-normal opacity-60">
										{testimonial.position}
									</span>
								</Typography>
							</div>
							<div className="col-span-2 flex w-full shrink-0 md:!justify-end"></div>
						</div>
					))}
				</Carousel>
			</div>
		</section>
	);
}

export default CarouselFeatures;