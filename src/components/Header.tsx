import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ to: "/", label: "Головна" },
		{ to: "/about", label: "Про мене" },
		{ to: "/services", label: "Послуги" },
		{ to: "/contact", label: "Контакти" },
	];

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-sm shadow-sm`}
		>
			<div className="container-custom">
				<div className="flex items-center justify-between h-20">
					<Link
						to="/"
						className="text-2xl font-serif font-semibold text-foreground"
					>
						Марія
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center gap-8">
						{navItems.map((item) => (
							<Link
								key={item.to}
								to={item.to}
								className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
							>
								{item.label}
							</Link>
						))}
						<Link to="/appointment">
							<Button variant="default" size="sm" className="rounded-full">
								Записатися
							</Button>
						</Link>
					</nav>

					{/* Mobile Menu Button */}
					<Button
						className="md:hidden text-foreground"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-label="Toggle menu"
					>
						{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</Button>
				</div>

				{/* Mobile Navigation */}
				{isMobileMenuOpen && (
					<nav className="md:hidden pb-6 animate-fade-in z-100">
						<div className="flex flex-col gap-4">
							{navItems.map((item) => (
								<Link
									key={item.to}
									to={item.to}
									className="text-base font-medium text-foreground/70 hover:text-foreground transition-colors"
									activeProps={{ className: "text-foreground font-semibold" }}
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{item.label}
								</Link>
							))}
							<Link
								to="/appointment"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								<Button
									variant="default"
									size="sm"
									className="rounded-full w-full"
								>
									Записатися
								</Button>
							</Link>
						</div>
					</nav>
				)}
			</div>
		</header>
	);
};

export default Header;
