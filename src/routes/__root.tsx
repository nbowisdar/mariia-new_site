import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { Toaster } from "@/components/ui/sonner";
import Header from "../components/Header";
import defaultCss from "../default.css?url";
import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";
import appCss from "../styles.css?url";

interface MyRouterContext {
	queryClient: QueryClient;
}

// Simple placeholder NotFound component (customize this!)
function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
			<h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
			<p className="text-xl text-gray-600 mb-8">Page not found.</p>
			<a
				href="/"
				className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
			>
				Go Home
			</a>
		</div>
	);
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => ({
		meta: [
			{
				charSet: "UTF-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1.0",
			},
			{
				title: "Марія - Психолог | Професійна психологічна допомога",
			},
			{
				name: "description",
				content:
					"Професійна психологічна допомога від досвідченого психолога Марії. Індивідуальні та парні консультації онлайн та офлайн.",
			},
			{
				name: "author",
				content: "Марія - Психолог",
			},
			{
				property: "og:image",
				content:
					"https://scontent-iev1-1.cdninstagram.com/v/t51.29350-15/371748469_677811687208577_4656536669844714365_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4MTYzMS5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=scontent-iev1-1.cdninstagram.com&_nc_cat=105&_nc_oc=Q6cZ2QEdWWiYHjJXo4-nvr_UDDAKeMDKBDIoxdPrl811SFvQviSAUkMYXk3ko54B6s5QQuo&_nc_ohc=8XWIjWhl6h0Q7kNvwFcEs9F&_nc_gid=NVh9vBgJaPw1OZBF6y_7aw&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzE3OTQ5MDM2NDE4ODIxNzY4MQ%3D%3D.3-ccb7-5&oh=00_Afgi6HW2H1Qtz3RsG1IJ1EvjXZKCyn-cI4OyjZZNs1QejA&oe=691EC35B&_nc_sid=7a9f4b",
			},
			{
				property: "og:title",
				content: "Марія - Психолог | Професійна психологічна допомога",
			},
			{
				property: "og:description",
				content:
					"Професійна психологічна допомога від досвідченого психолога Марії. Індивідуальні та парні консультації.",
			},
			{
				property: "og:type",
				content: "website",
			},
			{
				name: "twitter:card",
				content: "summary_large_image",
			},
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com",
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap",
			},
			{
				rel: "stylesheet",
				href: appCss,
			},
			{
				rel: "stylesheet",
				href: defaultCss,
			},
		],
	}),

	// Add this: Custom notFoundComponent to handle 404s
	notFoundComponent: NotFound,

	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="uk-UA">
			<head>
				<HeadContent />
			</head>
			<body>
				<Header />
				{children}
				<Toaster />
				<Scripts />
			</body>
		</html>
	);
}
