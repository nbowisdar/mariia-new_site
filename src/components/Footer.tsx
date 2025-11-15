import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-muted/30 border-t border-border">
			<div className="container-custom py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Brand */}
					<div>
						<h3 className="text-xl font-serif font-semibold mb-4">Марія</h3>
						<p className="text-sm text-muted-foreground">
							Професійна психологічна допомога для тих, хто шукає підтримку та
							розуміння.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-semibold mb-4">Навігація</h4>
						<nav className="flex flex-col gap-2">
							<Link
								to="/"
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Головна
							</Link>
							<Link
								to="/about"
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Про мене
							</Link>
							<Link
								to="/services"
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Послуги
							</Link>
							<Link
								to="/appointment"
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Записатися
							</Link>
							<Link
								to="/contact"
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Контакти
							</Link>
						</nav>
					</div>

					{/* Contact */}
					<div>
						<h4 className="font-semibold mb-4">Контакти</h4>
						<div className="flex flex-col gap-3">
							<a
								href="mailto:mariasohanchak@gmail.com"
								className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								<Mail size={16} />
								mariasohanchak@gmail.com
							</a>
							<a
								href="tel:+380123456789"
								className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								<Phone size={16} />
								+380 97 761 57 02
							</a>
							<div className="flex gap-3 mt-2">
								<a
									href="#"
									className="text-muted-foreground hover:text-foreground transition-colors"
									aria-label="Instagram"
								>
									<Instagram size={20} />
								</a>
								<a
									href="#"
									className="text-muted-foreground hover:text-foreground transition-colors"
									aria-label="Facebook"
								>
									<Facebook size={20} />
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
					<p>© {new Date().getFullYear()} Марія. Всі права захищені.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
