import type { IssueComment } from "@/types";
import type { issueCommentsPaginatedFragment$key } from "@/utils/relay/__generated__/issueCommentsPaginatedFragment.graphql";
import { usePaginationFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { useRepositoryIssuesData } from "./repository-issues";

export const issueCommentsFragmentQuery = graphql`
  fragment issueCommentsPaginatedFragment on Issue
    @argumentDefinitions(
      cursor: { type: "String" }
      count: { type: "Int", defaultValue: 10 }
    )
    @refetchable(queryName: "IssueCommentsPaginationQuery")  {
    comments(first: $count, after: $cursor, orderBy: { field: UPDATED_AT, direction: DESC })
    @connection(key: "Issue_comments") {
      edges {
        node {
          id
          bodyHTML
					updatedAt
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

export const useIssueCommentsData = (issueId: number | null) => {
	const repositoryIssuesData = useRepositoryIssuesData();
	const issue = repositoryIssuesData?._ref?.find(
		(i) => i?.node?.number === issueId,
	)?.node;
	const handlers = usePaginationFragment(
		issueCommentsFragmentQuery,
		issue as issueCommentsPaginatedFragment$key,
	);

	const { data, ...rest } = handlers;

	const comments = (data?.comments?.edges
		?.map((edge) => {
			const data = edge?.node;
			if (!data) return null;
			return {
				id: data.id,
				username: data.author?.login || "(unknown)",
				updatedAt: new Date(data.updatedAt),
				avatarUrl: data.author?.avatarUrl || "",
				url: data.author?.avatarUrl || "",
				detailsHTML: data.bodyHTML || "",
			};
		})
		.filter(Boolean) || []) as IssueComment[];
	return { comments, ...rest };
};
