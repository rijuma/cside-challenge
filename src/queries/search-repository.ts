import { graphql } from "relay-runtime";

export const searchRepositoryQuery = graphql`
  query searchRepositoryQuery($query: String!, $skip: Boolean!) {
		search(type: REPOSITORY, query: $query, first: 10) @skip(if: $skip) {
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
