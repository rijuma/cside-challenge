import { ThemeProvider } from "@/components/theme-provider";
import relayEnvironment from "@/utils/relay/environment";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { RelayEnvironmentProvider } from "react-relay";

export const Route = createRootRouteWithContext<{
	relayEnvironment: typeof relayEnvironment;
}>()({
	component: () => (
		<ThemeProvider>
			<RelayEnvironmentProvider environment={relayEnvironment}>
				<Outlet />
				<TanStackRouterDevtools />
			</RelayEnvironmentProvider>
		</ThemeProvider>
	),
});
