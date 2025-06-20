import { type PreloadedQuery, usePreloadedQuery } from "react-relay";
import { graphql } from "relay-runtime";

import type { Repository } from "@/types";
import type { repositoryQuery as RepositoryQuery } from "@/utils/relay/__generated__/repositoryQuery.graphql";

export const repositoryQuery = graphql`
  query repositoryQuery($owner: String!, $slug: String!) {
    repository(owner: $owner, name: $slug) {
      id,
      name,
      url,
      owner {
        login
      }
      descriptionHTML,
      stargazerCount,
      forkCount,
			viewerHasStarred,
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
          avatarUrl
          name
          url
					login
        }
      }
      ...repositoryIssuesPaginatedFragment
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

	if (!repository)
		throw new Error(
			"Repository does not exists or you don't have read permissions.",
		);

	const {
		id,
		url,
		owner: { login: owner },
		name: slug,
		descriptionHTML,
		branches,
		collaborators,
		defaultBranchRef,
		forkCount,
		viewerHasStarred,
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
			url: c?.url,
			username: c?.login || "(unknown)",
		})) || null; // Null means insufficient permissions

	return {
		id,
		url,
		owner,
		slug,
		descriptionHTML,
		branchCount,
		commitCount,
		contributors,
		forkCount,
		starred: viewerHasStarred,
		issueCount,
		mainBranch,
		starCount,
		_ref: repository, // This is the original unaltered payload to handle paginations
	} satisfies Repository;
};
