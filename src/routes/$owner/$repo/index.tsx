import { repositoryQuery, useRepositoryData } from "@/queries";
import { createFileRoute } from "@tanstack/react-router";
import { loadQuery } from "react-relay";

import { RepositoryProvider } from "@/context/repository";
import type { repositoryQuery as RepositoryQuery } from "@/utils/relay/__generated__/repositoryQuery.graphql";

export const Route = createFileRoute("/$owner/$repo/")({
	component: Repo,
	pendingComponent: () => <div>Loading...</div>,
	loader: async ({ params, context: { relayEnvironment } }) => {
		const { owner, repo } = params;

		const preloadedQuery = await loadQuery<RepositoryQuery>(
			relayEnvironment,
			repositoryQuery,
			{ owner, repo },
			{ fetchPolicy: "store-and-network" },
		);

		return { owner, repo, preloadedQuery };
	},
});

function Repo() {
	const { owner, repo, preloadedQuery } = Route.useLoaderData();
	const repositoryData = useRepositoryData(preloadedQuery);

	return (
		<RepositoryProvider value={repositoryData}>
			<div>
				<h1>
					Hello, {owner}, nice repo: {repo}
				</h1>
			</div>
		</RepositoryProvider>
	);
}
