import type { repositoryIssuesPaginatedFragment$key } from "@/utils/relay/__generated__/repositoryIssuesPaginatedFragment.graphql";
import type { repositoryQuery } from "@/utils/relay/__generated__/repositoryQuery.graphql";
import { type PreloadedQuery, usePaginationFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { useRepositoryData } from "./repository";

export const repositoryIssuesFragmentQuery = graphql`
  fragment repositoryIssuesPaginatedFragment on Repository
    @argumentDefinitions(
      cursor: { type: "String" }
      count: { type: "Int", defaultValue: 10 }
    )
    @refetchable(queryName: "RepositoryIssuesPaginationQuery")  {
    issues(first: $count, after: $cursor)
    @connection(key: "Repository_issues") {
      edges {
        node {
          url
          title
          createdAt
          tags:labels(first:99) {
            nodes {
              color
              name
              description
            }
          }
        }
      }
    }
  }
`;

export const useRepositoryIssuesData = (
	queryRef: PreloadedQuery<repositoryQuery>,
) => {
	const repoData = useRepositoryData(queryRef);
	const handlers = usePaginationFragment(
		repositoryIssuesFragmentQuery,
		repoData._ref as repositoryIssuesPaginatedFragment$key,
	);

	const { data, ...rest } = handlers;

	const issue = {
		...data,
		_ref: data.issues,
	};
	return { issue, ...rest };
};
