import { ThemeProvider } from "@/components/theme-provider";
import { siteTitle } from "@/const";
import relayEnvironment from "@/utils/relay/environment";
import {
	HeadContent,
	Outlet,
	createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { RelayEnvironmentProvider } from "react-relay";

export const Route = createRootRouteWithContext<{
	relayEnvironment: typeof relayEnvironment;
}>()({
	head: () => ({
		meta: [
			{
				title: siteTitle,
			},
		],
	}),
	component: () => (
		<>
			<HeadContent />
			<ThemeProvider>
				<RelayEnvironmentProvider environment={relayEnvironment}>
					<Outlet />
					<TanStackRouterDevtools />
				</RelayEnvironmentProvider>
			</ThemeProvider>
		</>
	),
});
