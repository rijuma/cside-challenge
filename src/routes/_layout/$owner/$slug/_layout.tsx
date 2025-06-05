import { RepositoryProvider } from "@/context";
import {
	repositoryQuery,
	useRepositoryData,
	useRepositoryIssuesData,
} from "@/queries";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { loadQuery } from "react-relay";

import { RootLayout } from "@/layouts";
import { LoadingLayout } from "@/layouts/loading";
import type { repositoryQuery as RepositoryQuery } from "@/utils/relay/__generated__/repositoryQuery.graphql";

export const Route = createFileRoute("/_layout/$owner/$slug/_layout")({
	component: RepoLayout,
	pendingComponent: LoadingLayout,
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
			<RootLayout>
				<Outlet />
			</RootLayout>
		</RepositoryProvider>
	);
}
