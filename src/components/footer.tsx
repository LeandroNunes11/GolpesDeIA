import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

const LINKS = [
	{
		title: "Pages",
		items: ["Login", "Register", "Add List", "Contact"],
	},
	{
		title: "Legal",
		items: ["Terms", "Privacy", "Team", "About Us"],
	},
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
	return (
		<footer className="px-7 pt-16 pb-8">
			<div className="container max-w-6xl flex flex-col mx-auto">
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
								<div className="w-full	">
									<Typography
										variant="small"
										className="font-medium mb-2 text-left"
									>
										Digite seu nome:
									</Typography>
									<Input type="text" name="name" label="Nome" color="gray" />
									<Typography
										variant="small"
										className="font-medium mb-2 text-left"
									>
										Digite seu Email:
									</Typography>
									<Input type="email" name="email" label="Email" color="gray" />
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
									></Textarea>
								</div>
								<Button
									type="submit"
									color="gray"
									className="w-full lg:w-fit"
									size="md"
								>
									enviar
								</Button>
								<input type="hidden" name="_template" value={"table"} />
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-gray-900 mt-28 w-full relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
				<div className="container max-w-6xl mx-auto py-10 px-4">
					<div className="flex justify-center gap-10 mb-10 lg:mb-0 md:gap-32">
						{LINKS.map(({ title, items }) => (
							<ul key={title}>
								<Typography variant="h6" color="blue-gray" className="mb-4">
									{title}
								</Typography>
								{items.map((link) => (
									<li key={link}>
										<Typography
											as="a"
											href="#"
											className="py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900"
										>
											{link}
										</Typography>
									</li>
								))}
							</ul>
						))}
					</div>
				</div>
			</div>
			<div className="container max-w-6xl mx-auto">
				<Typography
					color="blue-gray"
					className="md:text-center mt-16 font-normal !text-gray-700"
				>
					&copy; {CURRENT_YEAR} Made with{" "}
					<a
						href="https://www.material-tailwind.com"
						target="_blank"
						rel="noreferrer"
					>
						Material Tailwind
					</a>{" "}
					by{" "}
					<a
						href="https://www.creative-tim.com"
						target="_blank"
						rel="noreferrer"
					>
						Creative Tim
					</a>
					.
				</Typography>
			</div>
		</footer>
	);
}

export default Footer;