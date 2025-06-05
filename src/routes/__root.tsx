import relayEnvironment from "@/utils/relay/environment";
import { Theme } from "@radix-ui/themes";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { RelayEnvironmentProvider } from "react-relay";

export const Route = createRootRouteWithContext<{
	relayEnvironment: typeof relayEnvironment;
}>()({
	component: () => (
		<Theme
			hasBackground
			accentColor="indigo"
			grayColor="slate"
			appearance="dark"
		>
			<RelayEnvironmentProvider environment={relayEnvironment}>
				<Outlet />
				<TanStackRouterDevtools />
			</RelayEnvironmentProvider>
		</Theme>
	),
});
