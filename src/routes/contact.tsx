import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
	component: RouteComponent,
});

import {
	Facebook,
	Instagram,
	Mail,
	MapPin,
	MessageCircle,
	Phone,
} from "lucide-react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function RouteComponent() {
	const contactMethods = [
		{
			icon: <Mail className="w-6 h-6" />,
			title: "Email",
			value: "maria@example.com",
			link: "mailto:maria@example.com",
		},
		{
			icon: <Phone className="w-6 h-6" />,
			title: "Телефон",
			value: "+380 12 345 67 89",
			link: "tel:+380123456789",
		},
		{
			icon: <MessageCircle className="w-6 h-6" />,
			title: "Telegram",
			value: "@maria_psychologist",
			link: "#",
		},
		{
			icon: <MapPin className="w-6 h-6" />,
			title: "Адреса",
			value: "м. Київ, вул. Прикладна, 15",
			link: "#",
		},
	];

	const socialLinks = [
		{
			icon: <Instagram size={24} />,
			name: "Instagram",
			link: "https://www.instagram.com/_mari_089s",
		},
		{
			icon: <Facebook size={24} />,
			name: "Facebook",
			link: "#",
		},
	];

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="pt-32 pb-12 section-padding bg-linear-to-b from-background to-muted/20">
				<div className="container-custom">
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 animate-fade-in-up">
							Контакти
						</h1>
						<p className="text-lg text-muted-foreground animate-fade-in">
							Зв'яжіться зі мною зручним для вас способом
						</p>
					</div>
				</div>
			</section>

			{/* Contact Methods */}
			<section className="section-padding">
				<div className="container-custom">
					<div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
						{contactMethods.map((method) => (
							<Card
								key={method.title}
								className="border-2 hover:border-primary transition-all hover:shadow-lg"
							>
								<CardContent className="p-6">
									<a href={method.link} className="flex items-start gap-4">
										<div className="p-3 rounded-2xl bg-primary/10 text-primary">
											{method.icon}
										</div>
										<div>
											<h3 className="font-semibold mb-1">{method.title}</h3>
											<p className="text-muted-foreground">{method.value}</p>
										</div>
									</a>
								</CardContent>
							</Card>
						))}
					</div>

					{/* Social Media */}
					<div className="max-w-4xl mx-auto">
						<h2 className="text-2xl font-serif font-bold mb-6 text-center">
							Соціальні мережі
						</h2>
						<div className="flex justify-center gap-4 mb-12">
							{socialLinks.map((social) => (
								<a
									key={social.name}
									href={social.link}
									className="p-4 rounded-2xl bg-card border-2 border-border hover:border-primary transition-all hover:shadow-lg"
									aria-label={social.name}
								>
									{social.icon}
								</a>
							))}
						</div>

						{/* Working Hours */}
						<Card className="border-2 bg-linear-to-br from-primary/5 to-secondary/5">
							<CardContent className="p-8">
								<h2 className="text-2xl font-serif font-bold mb-6 text-center">
									Графік роботи
								</h2>
								<div className="space-y-3 text-center">
									<div className="flex justify-between max-w-md mx-auto">
										<span className="font-medium">Понеділок - П'ятниця:</span>
										<span className="text-muted-foreground">10:00 - 20:00</span>
									</div>
									<div className="flex justify-between max-w-md mx-auto">
										<span className="font-medium">Субота:</span>
										<span className="text-muted-foreground">
											За домовленістю
										</span>
									</div>
									<div className="flex justify-between max-w-md mx-auto">
										<span className="font-medium">Неділя:</span>
										<span className="text-muted-foreground">Вихідний</span>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="section-padding bg-muted/20">
				<div className="container-custom">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-3xl font-serif font-bold mb-4">
							Готові почати?
						</h2>
						<p className="text-lg text-muted-foreground mb-8">
							Перший крок завжди найважчий. Дозвольте мені підтримати вас на
							цьому шляху.
						</p>
						<Link to="/appointment">
							<Button size="lg" className="rounded-full">
								Записатися на консультацію
							</Button>
						</Link>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
