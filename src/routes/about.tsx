import { createFileRoute } from "@tanstack/react-router";
import { Award, GraduationCap, Heart } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";

function RouteComponent() {
	const education = [
		{
			year: "2015-2020",
			title: "Магістр психології",
			institution: "Київський національний університет імені Тараса Шевченка",
		},
		{
			year: "2020-2021",
			title: "Сертифікований психотерапевт",
			institution: "Інститут психотерапії та клінічної психології",
		},
	];

	const certificates = [
		"Гештальт-терапія (2021)",
		"Когнітивно-поведінкова терапія (2022)",
		"Травма-фокусована терапія (2023)",
		"Парна та сімейна терапія (2023)",
	];

	return (
		<div>
			{/* Hero Section */}
			<section className="pt-32 pb-12 section-padding bg-linear-to-b from-background to-muted/20">
				<div className="container-custom">
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 animate-fade-in-up">
							Про мене
						</h1>
						<p className="text-lg text-muted-foreground animate-fade-in">
							Моя історія та шлях у психології
						</p>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<section className="section-padding">
				<div className="container-custom">
					<div className="grid md:grid-cols-2 gap-12 items-start mb-16">
						<div className="animate-fade-in">
							<div className="aspect-3/4 rounded-2xl bg-linear-to-br from-primary/20 to-secondary/20 shadow-lg flex items-center justify-center">
								<div className="text-center p-8">
									<div className="w-64 h-64 mx-auto rounded-full bg-linear-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
										<span className="text-8xl">👩‍⚕️</span>
									</div>
									<p className="mt-4 text-sm text-muted-foreground">Марія</p>
								</div>
							</div>
						</div>
						<div className="animate-fade-in-up">
							<h2 className="text-3xl font-serif font-bold mb-6">
								Моя історія
							</h2>
							<div className="space-y-4 text-muted-foreground">
								<p>
									Вітаю! Мене звати Марія, і я психолог з понад 5-річним
									досвідом роботи. Моя місія – допомагати людям знаходити
									внутрішню гармонію та жити повноцінним життям.
								</p>
								<p>
									Я вірю, що кожна людина має ресурси для змін та особистісного
									зростання. Моя роль – створити безпечний простір, де ви
									зможете досліджувати свої почуття, розуміти себе краще та
									знаходити шляхи подолання труднощів.
								</p>
								<p>
									У своїй роботі я використовую інтегративний підхід, поєднуючи
									методи гештальт-терапії, когнітивно-поведінкової терапії та
									травма-фокусованої роботи. Це дозволяє мені адаптувати терапію
									під індивідуальні потреби кожного клієнта.
								</p>
							</div>
						</div>
					</div>

					{/* Education */}
					<div className="mb-16">
						<div className="flex items-center gap-3 mb-8">
							<GraduationCap className="w-8 h-8 text-primary" />
							<h2 className="text-3xl font-serif font-bold">Освіта</h2>
						</div>
						<div className="grid md:grid-cols-2 gap-6">
							{education.map((item) => (
								<Card
									key={item.title}
									className="border-2 hover:border-primary transition-all"
								>
									<CardContent className="p-6">
										<p className="text-sm text-primary font-semibold mb-2">
											{item.year}
										</p>
										<h3 className="text-xl font-serif font-semibold mb-2">
											{item.title}
										</h3>
										<p className="text-muted-foreground">{item.institution}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>

					{/* Certificates */}
					<div className="mb-16">
						<div className="flex items-center gap-3 mb-8">
							<Award className="w-8 h-8 text-primary" />
							<h2 className="text-3xl font-serif font-bold">
								Сертифікати та підвищення кваліфікації
							</h2>
						</div>
						<div className="grid md:grid-cols-2 gap-4">
							{certificates.map((cert) => (
								<div
									key={cert}
									className="p-4 rounded-xl bg-card border border-border hover:shadow-md transition-all flex items-center gap-3"
								>
									<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
										<Award className="w-6 h-6 text-primary" />
									</div>
									<span className="font-medium">{cert}</span>
								</div>
							))}
						</div>
					</div>

					{/* Approach */}
					<div>
						<div className="flex items-center gap-3 mb-8">
							<Heart className="w-8 h-8 text-primary" />
							<h2 className="text-3xl font-serif font-bold">
								Мій підхід у роботі
							</h2>
						</div>
						<Card className="border-2">
							<CardContent className="p-8">
								<div className="space-y-4 text-muted-foreground">
									<p>
										<strong className="text-foreground">
											Безпека та довіра:
										</strong>{" "}
										Створюю атмосферу, де ви можете бути собою без страху осуду.
									</p>
									<p>
										<strong className="text-foreground">
											Індивідуальний підхід:
										</strong>{" "}
										Кожна людина унікальна, тому терапія адаптується під ваші
										потреби та темп.
									</p>
									<p>
										<strong className="text-foreground">Партнерство:</strong> Ми
										працюємо разом – я підтримую вас на шляху до змін, але
										рішення завжди приймаєте ви.
									</p>
									<p>
										<strong className="text-foreground">
											Науковість та професійність:
										</strong>{" "}
										Використовую сучасні методи психотерапії з доведеною
										ефективністю.
									</p>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}

export const Route = createFileRoute("/about")({
	component: RouteComponent,
});
