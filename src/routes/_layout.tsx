import { RootLayout } from "@/layouts";
import { useUserData, userQuery } from "@/queries";
import type { userQuery as UserQuery } from "@/utils/relay/__generated__/userQuery.graphql";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { loadQuery } from "react-relay";

export const Route = createFileRoute("/_layout")({
	component: App,
	pendingComponent: () => <div>Loading...</div>,
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

	return (
		<RootLayout user={user}>
			<Outlet />
		</RootLayout>
	);
}
