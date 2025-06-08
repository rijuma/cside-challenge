import { SearchForm } from "@/components/search";
import { RootLayout } from "@/layouts";
import { Box, Heading, Text } from "@radix-ui/themes";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<RootLayout>
			<Box p="5">
				<Heading as="h1" mb="3">
					Search GitHub repository
				</Heading>
				<SearchForm />
			</Box>
		</RootLayout>
	);
}
