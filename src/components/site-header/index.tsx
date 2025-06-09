import type { User } from "@/types";
import { Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import { SearchToggle } from "../search/search-toggle";
import { CSideLogo } from "../ui/cside-logo";
import styles from "./site-header.module.scss";
import { UserMenu } from "./user-menu";

export type Props = {
	user?: User;
};

export const SiteHeader: FC = () => (
	<Card variant="surface" className={styles.heading}>
		<Flex justify="between" align="center">
			<UserMenu />
			<Link to="/">
				<Button type="button" variant="ghost">
					<Box width="1.4rem">
						<CSideLogo />
					</Box>
					<Text weight="bold" wrap="nowrap">
						Git it!
					</Text>
				</Button>
			</Link>
			<SearchToggle />
		</Flex>
	</Card>
);
