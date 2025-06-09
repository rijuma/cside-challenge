import { useRepository } from "@/context";
import type { Issue } from "@/types";
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
    issues(first: $count, after: $cursor, states: OPEN, orderBy: { field: UPDATED_AT, direction: DESC } )
    @connection(key: "Repository_issues") {
      edges {
        node {
          number
          url
          title
          createdAt
          author {
            avatarUrl
            username: login
          }
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
          bodyHTML
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

	const issues = data.issues.edges?.map((i) => ({
		url: i?.node?.url,
		title: i?.node?.title,
		number: i?.node?.number,
		author: i?.node?.author,
		tags: i?.node?.tags?.nodes,
		descriptionHTML: i?.node?.bodyHTML,
		commentCount: i?.node?.commentCount.totalCount,
	})) as Issue[];

	return { issues, _ref: data.issues.edges, ...rest };
};
