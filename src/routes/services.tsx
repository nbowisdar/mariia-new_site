import { createFileRoute } from "@tanstack/react-router";
import { Clock, CreditCard, Heart, Users, Video } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/services")({
	component: RouteComponent,
});

function RouteComponent() {
	const services = [
		{
			icon: <Heart className="w-10 h-10 text-primary" />,
			title: "Індивідуальна консультація",
			duration: "60 хвилин",
			price: "1200 грн",
			description:
				"Персональна робота над вашими запитами в комфортній атмосфері кабінету. Глибинна робота з емоціями, думками та поведінковими патернами.",
			features: [
				"Конфіденційність",
				"Безпечний простір",
				"Індивідуальний підхід",
				"Гнучкий графік",
			],
		},
		{
			icon: <Video className="w-10 h-10 text-primary" />,
			title: "Онлайн консультація",
			duration: "60 хвилин",
			price: "1000 грн",
			description:
				"Зручний формат консультацій через відеозв'язок з будь-якої точки світу. Ті ж можливості та ефективність, що й при особистих зустрічах.",
			features: [
				"Економія часу",
				"Комфорт дому",
				"Підходить для будь-якої локації",
				"Безпечна платформа",
			],
		},
		{
			icon: <Users className="w-10 h-10 text-primary" />,
			title: "Парна терапія",
			duration: "90 хвилин",
			price: "1800 грн",
			description:
				"Допомога парам у побудові здорових, гармонійних стосунків. Робота з конфліктами, комунікацією та зміцненням емоційного зв'язку.",
			features: [
				"Покращення комунікації",
				"Вирішення конфліктів",
				"Зміцнення довіри",
				"Розвиток близькості",
			],
		},
	]

	return (
		<div>
			{/* Hero Section */}
			<section className="pt-32 pb-12 section-padding bg-linear-to-b from-background to-muted/20">
				<div className="container-custom">
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 animate-fade-in-up">
							Послуги
						</h1>
						<p className="text-lg text-muted-foreground animate-fade-in">
							Оберіть формат консультації, який найкраще відповідає вашим
							потребам
						</p>
					</div>
				</div>
			</section>

			{/* Services */}
			<section className="section-padding">
				<div className="container-custom">
					<div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto">
						{services.map((service) => (
							<Card
								key={service.title}
								className="border-2 hover:border-primary transition-all hover:shadow-lg"
							>
								<CardHeader>
									<div className="flex items-start gap-4">
										<div className="p-3 rounded-2xl bg-primary/10">
											{service.icon}
										</div>
										<div className="flex-1">
											<CardTitle className="text-2xl font-serif mb-2">
												{service.title}
											</CardTitle>
											<div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
												<div className="flex items-center gap-1">
													<Clock className="w-4 h-4" />
													{service.duration}
												</div>
												<div className="flex items-center gap-1">
													<CreditCard className="w-4 h-4" />
													{service.price}
												</div>
											</div>
										</div>
									</div>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground mb-6">
										{service.description}
									</p>
									<div className="grid sm:grid-cols-2 gap-3 mb-6">
										{service.features.map((feature) => (
											<div
												key={feature}
												className="flex items-center gap-2 text-sm"
											>
												<div className="w-1.5 h-1.5 rounded-full bg-primary" />
												<span>{feature}</span>
											</div>
										))}
									</div>
									<NavLink to="/appointment">
										<Button className="rounded-full w-full sm:w-auto">
											Записатися на {service.title.toLowerCase()}
										</Button>
									</NavLink>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Additional Info */}
			<section className="section-padding bg-muted/20">
				<div className="container-custom">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-3xl font-serif font-bold mb-8 text-center">
							Додаткова інформація
						</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<Card>
								<CardContent className="p-6">
									<h3 className="font-serif font-semibold text-xl mb-3">
										Тривалість терапії
									</h3>
									<p className="text-muted-foreground">
										Кількість сесій залежить від ваших індивідуальних потреб та
										запитів. Деякі питання вирішуються за 3-5 зустрічей, інші
										потребують довшої роботи.
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="p-6">
									<h3 className="font-serif font-semibold text-xl mb-3">
										Оплата
									</h3>
									<p className="text-muted-foreground">
										Оплата проводиться після кожної сесії. Приймаю готівку,
										картки та банківські перекази. Можлива оплата частинами за
										домовленістю.
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="p-6">
									<h3 className="font-serif font-semibold text-xl mb-3">
										Скасування
									</h3>
									<p className="text-muted-foreground">
										Прошу повідомляти про скасування за 24 години. Пізнє
										скасування оплачується на 50%, неявка без попередження – на
										100%.
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="p-6">
									<h3 className="font-serif font-semibold text-xl mb-3">
										Конфіденційність
									</h3>
									<p className="text-muted-foreground">
										Вся інформація, яку ви ділитеся під час сесій, залишається
										конфіденційною відповідно до етичного кодексу психолога.
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	)
}
