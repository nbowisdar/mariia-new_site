import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle, Heart, MessageCircle, Users } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/")({ component: App });

function App() {
	const problems = [
		"Тривога та стрес",
		"Депресивні стани",
		"Проблеми у стосунках",
		"Низька самооцінка",
		"Травматичний досвід",
		"Життєві кризи",
	];

	const services = [
		{
			icon: <Heart className="w-8 h-8 text-primary" />,
			title: "Індивідуальна консультація",
			description:
				"Персональна робота над вашими запитами в комфортній атмосфері",
		},
		{
			icon: <MessageCircle className="w-8 h-8 text-primary" />,
			title: "Онлайн консультація",
			description: "Зручний формат з будь-якої точки світу через відеозв'язок",
		},
		{
			icon: <Users className="w-8 h-8 text-primary" />,
			title: "Парна терапія",
			description: "Допомога парам у побудові гармонійних стосунків",
		},
	];

	return (
		<div>
			{/* Hero Section */}
			<section className="pt-32 pb-20 section-padding bg-linear-to-b from-background to-muted/20">
				<div className="container-custom">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="animate-fade-in-up">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance">
								Підтримка на шляху до внутрішньої гармонії
							</h1>
							<p className="text-lg text-muted-foreground mb-8 text-balance">
								Вітаю! Я Марія, психолог з багаторічним досвідом. Допомагаю
								людям знайти відповіді, подолати труднощі та відкрити нові
								можливості для особистісного зростання.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<NavLink to="/appointment">
									<Button size="lg" className="rounded-full w-full sm:w-auto">
										Записатися на консультацію
									</Button>
								</NavLink>
								<NavLink to="/about">
									<Button
										size="lg"
										variant="outline"
										className="rounded-full w-full sm:w-auto"
									>
										Більше про мене
									</Button>
								</NavLink>
							</div>
						</div>
						<div className="animate-fade-in">
							<div className="aspect-square rounded-3xl bg-linear-to-br from-primary/20 to-secondary/20 shadow-lg flex items-center justify-center">
								<div className="text-center p-8">
									<div className="w-48 h-48 mx-auto rounded-full bg-linear-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
										<span className="text-6xl">👩‍⚕️</span>
									</div>
									<p className="mt-4 text-sm text-muted-foreground">
										Фото психолога Марії
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Problems Section */}
			<section className="section-padding">
				<div className="container-custom">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
							З чим я допомагаю
						</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							Професійна підтримка у вирішенні різноманітних психологічних
							труднощів
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
						{problems.map((problem) => (
							<div
								key={problem}
								className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:shadow-md transition-all"
							>
								<CheckCircle className="w-5 h-5 text-primary shrink-0" />
								<span className="font-medium">{problem}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="section-padding bg-muted/20">
				<div className="container-custom">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
							Мої послуги
						</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							Оберіть формат консультації, який вам найбільше підходить
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-8">
						{services.map((service) => (
							<Card
								key={service.title}
								className="border-2 hover:border-primary transition-all hover:shadow-lg"
							>
								<CardContent className="p-6">
									<div className="mb-4">{service.icon}</div>
									<h3 className="text-xl font-serif font-semibold mb-3">
										{service.title}
									</h3>
									<p className="text-muted-foreground">{service.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
					<div className="text-center mt-12">
						<NavLink to="/services">
							<Button size="lg" variant="outline" className="rounded-full">
								Дізнатися більше про послуги
							</Button>
						</NavLink>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="section-padding">
				<div className="container-custom">
					<div className="bg-linear-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 text-center">
						<h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
							Готові зробити перший крок?
						</h2>
						<p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
							Запишіться на консультацію зараз і почніть свій шлях до змін
						</p>
						<NavLink to="/appointment">
							<Button size="lg" className="rounded-full">
								Записатися на консультацію
							</Button>
						</NavLink>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
