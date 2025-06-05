import { Box, Container, Flex } from "@radix-ui/themes";
import type { FC, PropsWithChildren } from "react";

import { SiteHeader } from "@/components/site-header";
import type { User } from "@/types/user";

interface Props extends PropsWithChildren {
	user: User;
}

export const RootLayout: FC<Props> = ({ user, children }) => (
	<Flex direction="column">
		<SiteHeader user={user} />
		<Container flexGrow="1">{children}</Container>
		<Box>Footer</Box>
	</Flex>
);
