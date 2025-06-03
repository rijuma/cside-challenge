import { type PreloadedQuery, usePreloadedQuery } from "react-relay";
import { graphql } from "relay-runtime";

import type { Repository } from "@/types/repository";
import type { repositoryQuery as RepositoryQuery } from "@/utils/relay/__generated__/repositoryQuery.graphql";

export const repositoryQuery = graphql`
  query repositoryQuery($owner: String!, $repo: String!) {
    repository(owner: $owner, name: $repo) {
      name,
      description,
      stargazerCount,
      forkCount,
      refs(refPrefix:"refs/heads/") {
        totalCount
      }
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

export const useRepositoryData = (
	preloadedQuery: PreloadedQuery<RepositoryQuery>,
): Repository => {
	const { repository } = usePreloadedQuery<RepositoryQuery>(
		repositoryQuery,
		preloadedQuery,
	);

	if (!repository) throw new Error("Missing repository data");

	const {
		name,
		description,
		stargazerCount: starCount,
		refs,
		forkCount,
		defaultBranchRef,
		collaborators,
	} = repository;

	const mainBranch = defaultBranchRef?.name || "master";
	const branchCount = refs?.totalCount || 0;
	const commitCount = defaultBranchRef?.target?.history?.totalCount || 0;

	const contributors =
		collaborators?.nodes?.filter(Boolean).map((c) => ({
			avatarUrl: c?.avatarUrl || "",
			name: c?.name || "(unknown)",
		})) || [];

	return {
		name,
		mainBranch,
		description: description || undefined,
		starCount,
		forkCount,
		branchCount,
		commitCount,
		contributors,
	} satisfies Repository;
};
