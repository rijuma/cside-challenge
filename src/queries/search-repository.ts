import type { RepositoryResult, RepositorySearchResult } from "@/types";
import type { searchRepositoryQuery as SearchRepositoryQuery } from "@/utils/relay/__generated__/searchRepositoryQuery.graphql";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "relay-runtime";

export const searchRepositoryQuery = graphql`
  query searchRepositoryQuery($query: String!) {
		search(type: REPOSITORY, query: $query, first: 20) {
			repositoryCount
			nodes {
				... on Repository {
					name
					nameWithOwner
					shortDescriptionHTML
					url
					owner {
						login
						avatarUrl
					}
				}
			}
		}
	}
`;

export const useSearchRepositoryData = (
	query: string,
): RepositorySearchResult => {
	const searchResults = useLazyLoadQuery<SearchRepositoryQuery>(
		searchRepositoryQuery,
		{ query },
		{ fetchPolicy: "network-only" },
	);

	if (!query)
		return {
			total: 0,
			nodes: [],
		};

	const nodes = searchResults?.search?.nodes
		?.filter((item) => Boolean(item))
		.map((result) => ({
			name: result?.name || "",
			owner: result?.owner?.login,
			ownerAvatar: result?.owner?.avatarUrl,
			descriptionHTML: result?.shortDescriptionHTML,
			path: result?.nameWithOwner,
			url: result?.url,
		})) as RepositoryResult[];

	const results = {
		total: searchResults?.search.repositoryCount || 0,
		nodes,
	};

	return results;
};
