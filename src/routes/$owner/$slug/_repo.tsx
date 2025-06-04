import { RepositoryProvider } from "@/context/repository";
import { repositoryQuery, useRepositoryData } from "@/queries";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { loadQuery } from "react-relay";

import { useRepositoryIssuesData } from "@/queries/repository-issues";
import type { repositoryQuery as RepositoryQuery } from "@/utils/relay/__generated__/repositoryQuery.graphql";

export const Route = createFileRoute("/$owner/$slug/_repo")({
	component: RepoLayout,
	pendingComponent: () => <div>Loading...</div>,
	beforeLoad: async ({ params, context: { relayEnvironment } }) => {
		const { owner, slug } = params;

		const repoQueryRef = await loadQuery<RepositoryQuery>(
			relayEnvironment,
			repositoryQuery,
			{ owner, slug },
			{ fetchPolicy: "store-and-network" },
		);

		return { repoQueryRef };
	},
	loader: async ({ context: { repoQueryRef } }) => {
		return { repoQueryRef };
	},
});

function RepoLayout() {
	const { repoQueryRef } = Route.useLoaderData();
	const repositoryData = useRepositoryData(repoQueryRef);
	const issueData = useRepositoryIssuesData(repoQueryRef);

	console.log({ issueData });

	return (
		<RepositoryProvider value={repositoryData}>
			<Outlet />
		</RepositoryProvider>
	);
}
