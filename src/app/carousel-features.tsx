"use client";

import Image from "next/image";
import React from "react";
import { Typography, Carousel } from "@material-tailwind/react";

const testimonials = [
	{
		text: "Easy Shopping, Quick Delivery\nNo need to stress about shopping for books. Order online and have your textbooks and supplies delivered straight to your doorstep for free.",
		name: "Louis Miriam",
		position: "Web Developer @ AMAZON INC.",
		logo: "/image/logos/logo-amazon 3.svg",
	},
	{
		text: "Comprehensive Course Materials\nThe course materials are top-notch and cover everything I need. The online resources complement the textbooks perfectly, making studying a breeze.",
		name: "Sarah Johnson",
		position: "Data Scientist @ GOOGLE LLC.",
		logo: "/image/logos/logo-google.svg",
	},
	{
		text: "Excellent Support System\nThe support from instructors and fellow students is amazing. The online forums and study groups have been invaluable in my learning journey.",
		name: "Michael Chen",
		position: "Software Engineer @ MICROSOFT CORP.",
		logo: "/image/logos/logo-microsoft.svg",
	},
];

export function CarouselFeatures() {
	return (
		<section className="px-8 pt-40 pb-20">
			<div className="flex mb-16 flex-col items-center">
				<Typography variant="h2" className="text-center mb-2" color="blue-gray">
					What Students Say
				</Typography>
				<Typography
					variant="lead"
					className="mb-3 w-full text-center font-normal !text-gray-500 lg:w-10/12"
				>
					Discover what our students have to say about our course!
				</Typography>
			</div>
			<div className="container mx-auto !rounded-lg bg-[url('/image/Background.png')] bg-center py-10 lg:px-16">
				<Carousel
					autoplay={true}
					autoplayDelay={5000}
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
							<div className="col-span-2 flex w-full shrink-0 md:!justify-end">
							</div>
						</div>
					))}
				</Carousel>
			</div>
		</section>
	);
}

export default CarouselFeatures;