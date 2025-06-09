import { siteTitle } from "@/const";
import { RepositoryProvider } from "@/context";
import { RootLayout } from "@/layouts";
import { LoadingLayout } from "@/layouts/loading";
import { repositoryQuery, useRepositoryData } from "@/queries";
import type { repositoryQuery as RepositoryQuery } from "@/utils/relay/__generated__/repositoryQuery.graphql";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { loadQuery } from "react-relay";

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
	head: ({ params: { owner, slug } }) => ({
		meta: [
			{
				title: `${siteTitle} - ${owner}/${slug}`,
			},
		],
	}),
});

function RepoLayout() {
	const { repoQueryRef } = Route.useLoaderData();
	const repositoryData = useRepositoryData(repoQueryRef);

	const context = {
		data: repositoryData,
		queryRef: repoQueryRef,
	};

	return (
		<RepositoryProvider value={context}>
			<RootLayout>
				<Outlet />
			</RootLayout>
		</RepositoryProvider>
	);
}
