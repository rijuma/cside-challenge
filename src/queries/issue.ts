import { type PreloadedQuery, usePreloadedQuery } from "react-relay";
import { graphql } from "relay-runtime";

import type { Issue } from "@/types";
import type { issueQuery as IssueQuery } from "@/utils/relay/__generated__/issueQuery.graphql";

export const issueQuery = graphql`
  query issueQuery($owner: String!, $slug: String!, $number: Int!) {
  repository(owner: $owner, name: $slug) {
    issue(number: $number) {
      number
      title
      commentCount: comments {
        totalCount
      }
      details: bodyHTML
      ...issueCommentsPaginatedFragment
    }
  }
}
`;

export const useIssueData = (queryRef: PreloadedQuery<IssueQuery>): Issue => {
	const result = usePreloadedQuery<IssueQuery>(issueQuery, queryRef);

	const issue = result?.repository?.issue;

	if (!issue) throw new Error("Issue does not exists.");

	const {
		number,
		title,
		details,
		commentCount: { totalCount: commentCount },
	} = issue;

	return {
		number,
		title,
		details,
		commentCount,
		_ref: issue,
	} satisfies Issue;
};
