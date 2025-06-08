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
