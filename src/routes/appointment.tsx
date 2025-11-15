import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Mail, MessageSquare, Phone, User } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { toast } from "sonner";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { handleFormSubmit } from "@/lib/functions";

export const Route = createFileRoute("/appointment")({
	component: RouteComponent,
});

function RouteComponent() {
	const nameId = useId();
	const emailId = useId();
	const phoneId = useId();
	const dateId = useId();
	const messageId = useId();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		serviceType: "",
		contactMethod: "",
		preferredDate: "",
		message: "",
	});

	const [isSubmitted, setIsSubmitted] = useState(false);

	// Check localStorage on component mount
	useEffect(() => {
		const savedState = localStorage.getItem("appointmentFormSubmitted");
		if (savedState === "true") {
			setIsSubmitted(true);
		}
	}, []);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (
			!formData.name ||
			!formData.email ||
			!formData.phone ||
			!formData.serviceType
		) {
			// Validation
			toast.error("Будь ласка, заповніть всі обов'язкові поля");
			return;
		}

		toast.success("Запит відправлено!", {
			description:
				"Дякую за ваш запит. Я зв'яжуся з вами найближчим часом для підтвердження запису.",
		});

		console.log("Bar");

		setFormData({
			name: "",
			email: "",
			phone: "",
			serviceType: "",
			contactMethod: "",
			preferredDate: "",
			message: "",
		});

		// Set submitted state and save to localStorage
		setIsSubmitted(true);
		localStorage.setItem("appointmentFormSubmitted", "true");

		handleFormSubmit({ data: formData });
	};

	const handleChange = (field: string, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	// Function to reset the form (in case user wants to submit another appointment)
	const resetForm = () => {
		setIsSubmitted(false);
		localStorage.removeItem("appointmentFormSubmitted");
	};

	return (
		<div>
			{/* Hero Section */}
			<section className="pt-32 pb-12 section-padding bg-linear-to-b from-background to-muted/20">
				<div className="container-custom">
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 animate-fade-in-up">
							Записатися на консультацію
						</h1>
						<p className="text-lg text-muted-foreground animate-fade-in">
							{isSubmitted
								? "Дякуємо за ваш запит!"
								: "Заповніть форму нижче, і я зв'яжуся з вами для підтвердження запису"}
						</p>
					</div>
				</div>
			</section>

			{/* Form Section */}
			<section className="section-padding">
				<div className="container-custom">
					<div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{/* Form or Success Message */}
						<div className="lg:col-span-2">
							<Card className="border-2">
								<CardHeader>
									<CardTitle className="text-2xl font-serif">
										{isSubmitted ? "Запит успішно відправлено" : "Форма запису"}
									</CardTitle>
								</CardHeader>
								<CardContent>
									{isSubmitted ? (
										<div className="space-y-6 text-center py-8">
											<div className="text-6xl mb-4">✅</div>
											<h3 className="text-xl font-semibold text-foreground">
												Дякуємо за ваш запит!
											</h3>
											<p className="text-muted-foreground">
												Я зв'яжуся з вами найближчим часом для підтвердження
												запису. Якщо у вас є термінові питання, ви можете
												зв'язатися зі мною безпосередньо за телефоном або email.
											</p>
										</div>
									) : (
										<form onSubmit={handleSubmit} className="space-y-6">
											{/* Name */}
											<div className="space-y-2">
												<Label
													htmlFor="name"
													className="flex items-center gap-2"
												>
													<User className="w-4 h-4" />
													Ім'я *
												</Label>
												<Input
													id={nameId}
													placeholder="Введіть ваше ім'я"
													value={formData.name}
													onChange={(e) => handleChange("name", e.target.value)}
													required
												/>
											</div>

											{/* Email */}
											<div className="space-y-2">
												<Label
													htmlFor="email"
													className="flex items-center gap-2"
												>
													<Mail className="w-4 h-4" />
													Email *
												</Label>
												<Input
													id={emailId}
													type="email"
													placeholder="example@email.com"
													value={formData.email}
													onChange={(e) =>
														handleChange("email", e.target.value)
													}
													required
												/>
											</div>

											{/* Phone */}
											<div className="space-y-2">
												<Label
													htmlFor="phone"
													className="flex items-center gap-2"
												>
													<Phone className="w-4 h-4" />
													Телефон *
												</Label>
												<Input
													id={phoneId}
													type="tel"
													placeholder="+380 97 761 57 02"
													value={formData.phone}
													onChange={(e) =>
														handleChange("phone", e.target.value)
													}
													required
												/>
											</div>

											{/* Service Type */}
											<div className="space-y-2">
												<Label htmlFor="serviceType">Тип консультації *</Label>
												<Select
													value={formData.serviceType}
													onValueChange={(value: string) =>
														handleChange("serviceType", value)
													}
												>
													<SelectTrigger>
														<SelectValue placeholder="Оберіть тип консультації" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="individual">
															Індивідуальна консультація
														</SelectItem>
														<SelectItem value="online">
															Онлайн консультація
														</SelectItem>
														<SelectItem value="couple">
															Парна терапія
														</SelectItem>
													</SelectContent>
												</Select>
											</div>

											{/* Contact Method */}
											<div className="space-y-2">
												<Label htmlFor="contactMethod">
													Зручний спосіб зв'язку
												</Label>
												<Select
													value={formData.contactMethod}
													onValueChange={(value: string) =>
														handleChange("contactMethod", value)
													}
												>
													<SelectTrigger>
														<SelectValue placeholder="Оберіть спосіб зв'язку" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="phone">Телефон</SelectItem>
														<SelectItem value="email">Email</SelectItem>
														<SelectItem value="telegram">Telegram</SelectItem>
														<SelectItem value="viber">Viber</SelectItem>
													</SelectContent>
												</Select>
											</div>

											{/* Date and Time */}
											<div className="space-y-2">
												<div className="space-y-2">
													<Label
														htmlFor="preferredDate"
														className="flex items-center gap-2"
													>
														<Calendar className="w-4 h-4" />
														Бажана дата
													</Label>
													<Input
														id={dateId}
														type="date"
														value={formData.preferredDate}
														onChange={(e) =>
															handleChange("preferredDate", e.target.value)
														}
													/>
												</div>
											</div>

											{/* Message */}
											<div className="space-y-2">
												<Label
													htmlFor="message"
													className="flex items-center gap-2"
												>
													<MessageSquare className="w-4 h-4" />
													Додаткова інформація
												</Label>
												<Textarea
													id={messageId}
													placeholder="Розкажіть коротко про ваш запит (необов'язково)"
													rows={4}
													value={formData.message}
													onChange={(e) =>
														handleChange("message", e.target.value)
													}
												/>
											</div>

											<Button
												type="submit"
												size="lg"
												className="w-full rounded-full"
											>
												Відправити запит
											</Button>
										</form>
									)}
								</CardContent>
							</Card>
						</div>

						{/* Info Sidebar */}
						<div className="space-y-6">
							<Card className="border-2">
								<CardHeader>
									<CardTitle className="text-xl font-serif">
										Важлива інформація
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4 text-sm text-muted-foreground">
									<p>
										📅 <strong className="text-foreground">Графік:</strong>{" "}
										Пн-Пт, 10:00-20:00. Суботи за домовленістю.
									</p>
									<p>
										⏱️ <strong className="text-foreground">Тривалість:</strong>{" "}
										Стандартна сесія – 60 хвилин, парна терапія – 90 хвилин.
									</p>
									<p>
										💳 <strong className="text-foreground">Оплата:</strong>{" "}
										Після сесії готівкою, карткою або переказом.
									</p>
									<p>
										🔒{" "}
										<strong className="text-foreground">
											Конфіденційність:
										</strong>{" "}
										Гарантована повна конфіденційність відповідно до етичного
										кодексу.
									</p>
								</CardContent>
							</Card>

							<Card className="border-2 bg-linear-to-br from-primary/5 to-secondary/5">
								<CardContent className="p-6">
									<h3 className="font-serif font-semibold mb-3">
										Маєте питання?
									</h3>
									<p className="text-sm text-muted-foreground mb-4">
										Якщо у вас виникли питання щодо запису або послуг,
										зв'яжіться зі мною зручним способом.
									</p>
									<div className="space-y-2 text-sm">
										<p>📧 mariasohanchak@gmail.com</p>
										<p>📱 +380 97 761 57 02</p>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
