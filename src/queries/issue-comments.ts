import type { Comment } from "@/types";
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

export const useIssueCommentsData = (issueId: number | null) => {
	const repositoryIssuesData = useRepositoryIssuesData();
	const issue = repositoryIssuesData?._ref?.find(
		(i) => i?.node?.number === issueId,
	)?.node;
	const handlers = usePaginationFragment(
		issueCommentsFragmentQuery,
		issue as issueCommentsPaginatedFragment$key,
	);

	console.log({ handlers });

	const { data, ...rest } = handlers;

	const comments = (data?.comments?.edges
		?.map((edge) => {
			const data = edge?.node;
			if (!data) return null;
			return {
				id: data.id,
				author: data.author?.login || "(unknown)",
				avatarUrl: data.author?.avatarUrl || "",
				url: data.author?.avatarUrl || "",
				details: data.contents || "",
			};
		})
		.filter(Boolean) || []) as Comment[];
	return { comments, ...rest };
};
