import { UserProvider } from "@/context/user";
import { LoadingLayout } from "@/layouts/loading";
import { SiteErrorLayout } from "@/layouts/site-error";
import { useUserData, userQuery } from "@/queries";
import type { userQuery as UserQuery } from "@/utils/relay/__generated__/userQuery.graphql";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { loadQuery } from "react-relay";

export const Route = createFileRoute("/_layout")({
	component: App,
	pendingComponent: LoadingLayout,
	errorComponent: (error) => {
		console.log({ error });
		const message =
			error?.error?.name === "RelayNetwork"
				? ["Missing / wrong GitHub token.", "Check your environment variables."]
				: error.error.message || "Unknown error.";
		return <SiteErrorLayout message={message} />;
	},
	loader: async ({ context: { relayEnvironment } }) => {
		const userQueryRef = loadQuery<UserQuery>(
			relayEnvironment,
			userQuery,
			{},
			{ fetchPolicy: "store-and-network" },
		);

		return { userQueryRef };
	},
});

function App() {
	const { userQueryRef } = Route.useLoaderData();
	const user = useUserData(userQueryRef);

	console.log({ user });

	return (
		<UserProvider value={user}>
			<Outlet />
		</UserProvider>
	);
}
