import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Container, Flex } from "@radix-ui/themes";
import type { FC, PropsWithChildren } from "react";

export const RootLayout: FC<PropsWithChildren> = ({ children }) => (
	<Flex direction="column" minHeight="100dvh">
		<SiteHeader />
		<Container flexGrow="1" pl="6" pr="6">
			{children}
		</Container>
		<SiteFooter />
	</Flex>
);
