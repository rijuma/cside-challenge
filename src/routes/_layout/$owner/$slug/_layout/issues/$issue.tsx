import { issueQuery, useIssueCommentsData, useIssueData } from "@/queries";
import type { issueQuery as IssueQuery } from "@/utils/relay/__generated__/issueQuery.graphql";
import { createFileRoute } from "@tanstack/react-router";
import { loadQuery } from "react-relay";

export const Route = createFileRoute("/_layout/$owner/$slug/_layout/issues/$issue")({
	component: Issue,
	beforeLoad: async ({ params, context: { relayEnvironment } }) => {
		const { owner, slug, issue } = params;

		const number = +issue;

		const issueQueryRef = await loadQuery<IssueQuery>(
			relayEnvironment,
			issueQuery,
			{ owner, slug, number },
			{ fetchPolicy: "store-and-network" },
		);

		return { issueQueryRef };
	},
	loader: async ({ context: { issueQueryRef } }) => {
		return { issueQueryRef };
	},
});

function Issue() {
	const { issueQueryRef } = Route.useRouteContext();
	const issue = useIssueData(issueQueryRef);
	const commentsHandler = useIssueCommentsData(issueQueryRef);

	console.log({ issue, commentsHandler });

	return <div>Hello "/$owner/$repo/$issue/"!</div>;
}
