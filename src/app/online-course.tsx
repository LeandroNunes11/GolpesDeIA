"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  BookOpenIcon,
  CheckBadgeIcon,
  EyeDropperIcon,
  EyeIcon,
  InboxIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "@/components/feature-card";

const FEATURES = [
	{
		icon: BookOpenIcon,
		title: "Aprendizado",
		description:
			"No caso da inteligência artificial o aprendizado é a característica dos algoritmos que têm a capacidade de melhorar seu desempenho por meio da experiência. O aprendizado de máquina, como é chamado (do inglês machine learning), consiste em um algoritmo ajustar seus parâmetros internos com dados oriundos de execuções anteriores, atingindo melhores resultados a cada execução.",
	},
	{
		icon: EyeIcon,
		title: "Percepção",
		description:
			"No caso dos sistemas cibernéticos, a percepção é baseada em sensores que coletam objetivamente dados acerca do problema em questão. No caso dos sistemas cibernéticos, vai desde a leitura de dados por um software, até sensores físicos, isto é, que interagem com o ambiente, como no caso de acelerômetros.",
	},
	{
		icon: LightBulbIcon,
		title: "Criatividade",
		description:
			"A criatividade artificial se apresenta quando um sistema de i.a. — livre dos hábitos e da mecânica a que nós, seres humanos, muitas vezes nos prendemos, e busca maneiras diferentes de resolver a questão. Neste caso não ocorre tanto uma rejeição em si das formas corriqueiras de se pensar, mas não havendo familiaridade com estas formas, o sistema de i.a. explora novas formas com a mesma intensidade.",
	},
];

export function OnlineCourse() {
  return (
			<section id="sobre_ia" className="py-16 px-8">
				<div className="container mx-auto grid grid-cols-1 place-items-center lg:grid-cols-3">
					<div className="col-span-1 rounded-xl lg:mb-0 mb-12">
						<Image
							width={768}
							height={500}
							src="/image/IA.png"
							className="h-full rounded-2xl max-h-[500px] w-full object-cover scale-110"
							alt="Inteligência Artificial"
						/>
					</div>
					<div className="col-span-2 lg:pl-24">
						<Typography variant="h2" color="blue-gray" className="mb-4">
							O que é Inteligência Artificial?
						</Typography>
						<Typography
							variant="lead"
							className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-500 lg:px-0  "
						>
							Uma definição de inteligência artificial mais geral e que nos
							aproxima de um entendimento intuitivo sobre o assunto é a que nos
							oferecem Lima, Pinheiro e Santos (2014), que afirmam que a I.A. é
							o conjunto de ações que, se fossem realizadas por um ser humano,
							seriam consideradas inteligentes.
						</Typography>

						<div className="col-span-2 grid grid-cols-1 gap-10 sm:grid-cols-3 ">
							{FEATURES.map(({ icon, title, description }) => (
								<FeatureCard key={title} icon={icon} title={title}>
									{description}
								</FeatureCard>
							))}
						</div>
					</div>
				</div>
			</section>
		);
}

export default OnlineCourse;
