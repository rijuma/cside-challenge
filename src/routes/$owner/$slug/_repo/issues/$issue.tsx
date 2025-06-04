import { useRepositoryIssuesData } from "@/queries/repository-issues";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$owner/$slug/_repo/issues/$issue")({
	component: Issue,
});

function Issue() {
	const { repoQueryRef } = Route.useRouteContext();
	const res = useRepositoryIssuesData(repoQueryRef);
	return <div>Hello "/$owner/$repo/$issue/"!</div>;
}
