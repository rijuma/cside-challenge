import { Repository } from "@/components/repository";
import { useRepository } from "@/context";
import { LoadingLayout } from "@/layouts/loading";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/$owner/$slug/_layout/")({
	component: Repo,
	pendingComponent: LoadingLayout,
});

function Repo() {
	const { owner, slug } = useRepository() || {};

	return (
		<div>
			<h1>
				Hello, {owner}, nice repo: {slug}
			</h1>

			<Repository />
		</div>
	);
}
