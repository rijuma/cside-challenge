import { Repository } from "@/components/repository";
import { LoadingLayout } from "@/layouts/loading";
import { Section } from "@radix-ui/themes";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/$owner/$slug/_layout/")({
	component: Repo,
	pendingComponent: LoadingLayout,
	loader: async ({ context: { repoQueryRef } }) => {
		return { repoQueryRef };
	},
});

function Repo() {
	return (
		<Section pb="0">
			<Repository />
		</Section>
	);
}
