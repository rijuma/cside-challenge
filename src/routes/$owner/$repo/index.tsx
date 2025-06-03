import { repositoryQuery, useRepositoryData } from "@/queries";
import { createFileRoute } from "@tanstack/react-router";
import { loadQuery } from "react-relay";

import { Repository } from "@/components/repository";
import { RepositoryProvider } from "@/context/repository";
import { RootLayout } from "@/layouts";
import type { repositoryQuery as RepositoryQuery } from "@/utils/relay/__generated__/repositoryQuery.graphql";

export const Route = createFileRoute("/$owner/$repo/")({
	component: Repo,
	pendingComponent: () => <div>Loading...</div>,
	loader: async ({ params, context: { relayEnvironment } }) => {
		const { owner, repo } = params;

		const queryRef = await loadQuery<RepositoryQuery>(
			relayEnvironment,
			repositoryQuery,
			{ owner, repo },
			{ fetchPolicy: "store-and-network" },
		);

		return { owner, repo, queryRef };
	},
});

function Repo() {
	const { owner, repo, queryRef } = Route.useLoaderData();
	const repositoryData = useRepositoryData(queryRef);

	return (
		<RepositoryProvider value={repositoryData}>
			<RootLayout>
				<div>
					<h1>
						Hello, {owner}, nice repo: {repo}
					</h1>
					<Repository />
				</div>
			</RootLayout>
		</RepositoryProvider>
	);
}
