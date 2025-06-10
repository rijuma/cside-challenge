import { SearchForm } from "@/components/search";
import { Box, Heading } from "@radix-ui/themes";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Box p="5">
			<Heading as="h1" mb="3">
				Search GitHub repository
			</Heading>
			<SearchForm />
		</Box>
	);
}
