import { Link, type LinkProps } from "@tanstack/react-router";
import { forwardRef } from "react";

interface NavLinkProps extends Omit<LinkProps, "className"> {
	className?: string;
	activeClassName?: string;
	end?: boolean;
	onClick?: () => void;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
	(
		{ className, activeClassName, end, to, onClick, children, ...props },
		ref,
	) => {
		return (
			<Link
				ref={ref}
				to={to}
				onClick={onClick}
				className={className}
				activeProps={{
					className: activeClassName,
				}}
				activeOptions={{ exact: end }}
				{...props}
			>
				{children}
			</Link>
		);
	},
);

NavLink.displayName = "NavLink";

export { NavLink };
