import { useRepository } from "@/context";
import type { repositoryIssuesPaginatedFragment$key } from "@/utils/relay/__generated__/repositoryIssuesPaginatedFragment.graphql";
import { usePaginationFragment } from "react-relay";
import { graphql } from "relay-runtime";

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
          number
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
          commentCount: comments {
            totalCount
          }
          details: bodyHTML
          ...issueCommentsPaginatedFragment
        }
      }
    }
  }
`;

export const useRepositoryIssuesData = () => {
	const repo = useRepository();
	const handlers = usePaginationFragment(
		repositoryIssuesFragmentQuery,
		repo?.data._ref as repositoryIssuesPaginatedFragment$key,
	);

	const { data, ...rest } = handlers;

	const issues = data.issues.edges;

	return { issues, _ref: data.issues.edges, ...rest };
};
