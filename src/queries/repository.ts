import { type PreloadedQuery, usePreloadedQuery } from "react-relay";
import { graphql } from "relay-runtime";

import type { Repository } from "@/types/repository";
import type { repositoryQuery as RepositoryQuery } from "@/utils/relay/__generated__/repositoryQuery.graphql";

export const repositoryQuery = graphql`
  query repositoryQuery($owner: String!, $slug: String!) {
    repository(owner: $owner, name: $slug) {
      id,
      name,
      owner {
        login
      }
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
      issueCount:issues {
        totalCount
      }
      collaborators {
        nodes {
          avatarUrl,
          name
        }
      }
      ...issuesPaginatedFragment
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
		id,
		owner: { login: owner },
		name: slug,
		description,
		branches,
		collaborators,
		defaultBranchRef,
		forkCount,
		stargazerCount: starCount,
		issueCount: issues,
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
		id,
		owner,
		slug,
		description: description || undefined,
		branchCount,
		commitCount,
		contributors,
		forkCount,
		issueCount,
		mainBranch,
		starCount,
		_ref: repository,
	} satisfies Repository;
};
