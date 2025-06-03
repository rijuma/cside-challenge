import type { RepoQuery } from "@/utils/relay/__generated__/RepoQuery.graphql";
import { createFileRoute } from "@tanstack/react-router";
import { graphql, loadQuery, usePreloadedQuery } from "react-relay";

const REPO_QUERY = graphql`
  query RepoQuery($owner: String!, $repo: String!) {
    repository(owner: $owner, name: $repo) {
      name,
      description,
      stargazerCount,
      forkCount,
      defaultBranchRef {
        name,
        target {
          ... on Commit {
            history {
              totalCount
            }
          }
        }
      }
      collaborators {
        nodes {
          avatarUrl,
          name
        }
      }
    }
  }
`;

export const Route = createFileRoute("/$owner/$repo/")({
	component: Repo,
	pendingComponent: () => <div>Loading...</div>,
	loader: async ({ params, context: { relayEnvironment } }) => {
		const { owner, repo } = params;

		const preloadedData = await loadQuery<RepoQuery>(
			relayEnvironment,
			REPO_QUERY,
			{ owner, repo },
			{ fetchPolicy: "store-and-network" },
		);

		return { owner, repo, preloadedData };
	},
});

function Repo() {
	const { owner, repo, preloadedData } = Route.useLoaderData();
	const data = usePreloadedQuery<RepoQuery>(REPO_QUERY, preloadedData);

	return (
		<div>
			<h1>
				Hello, {owner}, nice repo: {repo}
			</h1>

			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
}
