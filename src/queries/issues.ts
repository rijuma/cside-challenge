import type { issuesPaginatedFragment$key } from "@/utils/relay/__generated__/issuesPaginatedFragment.graphql";
import type { repositoryQuery } from "@/utils/relay/__generated__/repositoryQuery.graphql";
import { type PreloadedQuery, usePaginationFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { useRepositoryData } from "./repository";

export const repositoryIssuesFragmentQuery = graphql`
  fragment issuesPaginatedFragment on Repository
    @argumentDefinitions(
      cursor: { type: "String" }
      count: { type: "Int", defaultValue: 10 }
    )
    @refetchable(queryName: "RepositoryIssuesPaginationQuery")  {
    issues(first: $count, after: $cursor)
    @connection(key: "Repository_issues") {
      edges {
        node {
          title
          description:body
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
		repoData._ref as issuesPaginatedFragment$key,
	);

	return { handlers };
};
