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
      branches:refs(refPrefix:"refs/heads/") {
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
      issues {
        totalCount
      }
    }
  }
`;

export const useRepositoryData = (
	queryRef: PreloadedQuery<RepositoryQuery>,
): Repository => {
	const { repository } = usePreloadedQuery<RepositoryQuery>(
		repositoryQuery,
		queryRef,
	);

	if (!repository) throw new Error("Missing repository data");

	const {
		name,
		description,
		branches,
		collaborators,
		defaultBranchRef,
		forkCount,
		stargazerCount: starCount,
		issues,
	} = repository;

	const mainBranch = defaultBranchRef?.name || "master";
	const branchCount = branches?.totalCount || 0;
	const issueCount = issues?.totalCount || 0;
	const commitCount = defaultBranchRef?.target?.history?.totalCount || 0;

	const contributors =
		collaborators?.nodes?.filter(Boolean).map((c) => ({
			avatarUrl: c?.avatarUrl || "",
			name: c?.name || "(unknown)",
		})) || null; // Null means insufficient permissions

	return {
		name,
		description: description || undefined,
		branchCount,
		commitCount,
		contributors,
		forkCount,
		issueCount,
		mainBranch,
		starCount,
	} satisfies Repository;
};
