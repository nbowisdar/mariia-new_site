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
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
						TanStackQueryDevtools,
					]}
				/>

				<Toaster />
				<Scripts />
			</body>
		</html>
	);
}