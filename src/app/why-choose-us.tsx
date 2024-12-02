"use client";

import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  ExclamationCircleIcon,
  IdentificationIcon,
  MegaphoneIcon,
  NewspaperIcon,
  PhoneIcon,
  PlayIcon,
  UserCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import type React from "react";

import BackgroundCard from "@/components/background-card";

interface OptionProps {
	icon: React.ElementType;
	title: string;
	children: React.ReactNode;
}

function Option({ icon: Icon, title, children }: OptionProps) {
	return (
		<div className="flex gap-4">
			<div className="mb-4">
				<Icon className="text-gray-900 h-6 w-6" />
			</div>
			<div>
				<Typography variant="h5" color="blue-gray" className="mb-2">
					{title}
				</Typography>
				<Typography className="mb-2 md:w-10/12 font-normal !text-gray-500">
					{children}
				</Typography>
			</div>
		</div>
	);
}

export function WhyChooseUs() {
	return (
		<section
			id="golpes"
			className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-12"
		>
			<Typography variant="h2" className="text-center mb-2" color="blue-gray">
				Quais os Golpes e os Cuidados?
			</Typography>
			<Typography
				variant="lead"
				className="mb-16 w-full text-center font-normal !text-gray-500 lg:w-10/12"
			>
				Golpes e Precauções: Como Identificar e se Proteger de Ameaças com IA.
			</Typography>
			<div className="mt-8">
				<div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
					<div className="space-y-9">
						<BackgroundCard title="Golpes com I.A.">
							O golpe com inteligência artificial é uma fraude sofisticada, em
							que os golpistas utilizam a tecnologia para enganar, manipular ou
							explorar os indivíduos, ou até mesmo organizações.
						</BackgroundCard>
						<div className="my-4">
							<Option icon={MegaphoneIcon} title="Anúncios Falsos">
								A IA pode gerar anúncios falsos que imitam produtos e serviços
								legítimos, direcionando as pessoas para sites fraudulentos.
							</Option>
						</div>
						<div className="flex">
							<Option icon={NewspaperIcon} title="Notícias Falsas">
								A IA pode ser usada para gerar notícias falsas de forma rápida e
								eficiente, espalhando desinformação e manipulando a opinião
								pública.
							</Option>
						</div>
					</div>
					<div className="space-y-8">
						<div className="my-4">
							<Option icon={PlayIcon} title="Deepfakes">
								Vídeos e áudios falsos, mas extremamente realistas, criados com
								IA. Podem ser usados para difamar pessoas, manipular eleições ou
								até mesmo extorquir dinheiro.
							</Option>
						</div>
						<div className="mb-4 flex gap-4">
							<Option icon={EnvelopeIcon} title="Phishing">
								E-mails e mensagens falsas que imitam perfeitamente empresas e
								pessoas conhecidas. A IA permite criar conteúdos ainda mais
								personalizados e convincentes, aumentando as chances de sucesso
								do golpe.
							</Option>
						</div>
						<Option icon={UserCircleIcon} title="Perfis Falsos">
							A IA pode gerar perfis falsos em redes sociais com fotos e
							informações extremamente realistas, dificultando a identificação
							de perfis falsos.
						</Option>
					</div>
				</div>
				<div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
					<div className="space-y-8 md:order-last">
						<BackgroundCard title="Precauções">
							Informe as autoridades policiais por meio de um boletim de
							ocorrência, que deve conter todos os detalhes do ocorrido. Esse BO
							pode ser registrado de forma online em alguns estados.
						</BackgroundCard>
						<div className="my-4">
							<Option icon={IdentificationIcon} title="Proteja seus Dados">
								Altere as senhas de todas as contas comprometidas, usando
								códigos de segurança mais fortes e difíceis de serem
								adivinhados. Além disso, ative a autenticação multifator em
								todas as contas e acessos!
							</Option>
						</div>
						<div className="flex">
							<Option icon={ExclamationCircleIcon} title="Fique Atento">
								Tenha consciência que esse tipo de golpe existe e desconfie de
								qualquer tipo de conteúdo em vídeo, áudio ou imagem.
							</Option>
						</div>
					</div>
					<div className="space-y-12 ">
						<div className="mb-4 flex gap-4">
							<Option icon={UserGroupIcon} title="Fale Pessoalmente">
								Na dúvida se é realmente a pessoa que está interagindo por uma
								chamada de vídeo ou em um vídeo, tente falar com ele
								pessoalmente.
							</Option>
						</div>
						<Option icon={BuildingOffice2Icon} title="Contate a Empresa">
							Se você receber uma chamada ou mensagem suspeita pedindo dados ou
							informações confidenciais, ligue para o número oficial da empresa
							para verificar a autenticidade.
						</Option>
						<div className="my-4">
							<Option icon={PhoneIcon} title="Contate Autoridades">
								Informe as autoridades policiais por meio de um boletim de
								ocorrência, que deve conter todos os detalhes do ocorrido. Esse
								BO pode ser registrado de forma online em alguns estados.
							</Option>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default WhyChooseUs;
