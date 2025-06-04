import { createFileRoute } from "@tanstack/react-router";

import { Repository } from "@/components/repository";
import { useRepository } from "@/context/repository";
import { RootLayout } from "@/layouts";

export const Route = createFileRoute("/$owner/$slug/_repo/")({
	component: Repo,
	pendingComponent: () => <div>Loading...</div>,
});

function Repo() {
	const { owner, slug } = useRepository() || {};

	return (
		<RootLayout>
			<div>
				<h1>
					Hello, {owner}, nice repo: {slug}
				</h1>
				<Repository />
			</div>
		</RootLayout>
	);
}
