import type { issueCommentsPaginatedFragment$key } from "@/utils/relay/__generated__/issueCommentsPaginatedFragment.graphql";
import type { issueQuery as IssueQuery } from "@/utils/relay/__generated__/issueQuery.graphql";
import { type PreloadedQuery, usePaginationFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { useIssueData } from "./issue";

export const issueCommentsFragmentQuery = graphql`
  fragment issueCommentsPaginatedFragment on Issue
    @argumentDefinitions(
      cursor: { type: "String" }
      count: { type: "Int", defaultValue: 10 }
    )
    @refetchable(queryName: "IssueCommentsPaginationQuery")  {
    comments(first: $count, after: $cursor)
    @connection(key: "Issue_comments") {
      edges {
        node {
            id
            contents: bodyHTML
            author {
              url
              avatarUrl
              login
            }
          }
      }
    }
  }
`;

export const useRepositoryIssuesData = (
	queryRef: PreloadedQuery<IssueQuery>,
) => {
	const issueData = useIssueData(queryRef);
	const handlers = usePaginationFragment(
		issueCommentsFragmentQuery,
		issueData._ref as issueCommentsPaginatedFragment$key,
	);

	const { data, ...rest } = handlers;

	const comments = {
		...data,
	};
	return { comments, ...rest };
};
