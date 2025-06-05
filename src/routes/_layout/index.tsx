import { RootLayout } from "@/layouts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<RootLayout>
			<div>Hello "/Index"!</div>
		</RootLayout>
	);
}
