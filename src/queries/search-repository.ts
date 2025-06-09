import type { searchRepositoryQuery as SearchRepositoryQuery } from "@/utils/relay/__generated__/searchRepositoryQuery.graphql";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "relay-runtime";

export const searchRepositoryQuery = graphql`
  query searchRepositoryQuery($query: String!) {
		search(type: REPOSITORY, query: $query, first: 10) {
			nodes {
				... on Repository {
					name
					nameWithOwner
					description
					url
					owner {
						login
					}
				}
			}
		}
	}
`;

export const useSearchRepositoryData = (query: string) => {
	const searchResults = useLazyLoadQuery<SearchRepositoryQuery>(
		searchRepositoryQuery,
		{ query },
		{ fetchPolicy: "network-only" },
	);

	if (!query) return [];

	const results = searchResults?.search?.nodes?.map((result) => ({
		name: result?.name || "",
		owner: result?.owner?.login,
		path: result?.nameWithOwner,
		url: result?.url,
	}));

	return results;
};
