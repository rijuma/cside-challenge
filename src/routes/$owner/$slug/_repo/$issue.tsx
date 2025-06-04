import { useRepositoryIssuesData } from "@/queries/issues";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$owner/$slug/_repo/$issue")({
	component: Issue,
});

function Issue() {
	const { repo } = Route.useRouteContext();
	const res = useRepositoryIssuesData(repo as any);
	return <div>Hello "/$owner/$repo/$issue/"!</div>;
}
