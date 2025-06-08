import { useRepository } from "@/context";
import { useUser } from "@/context/user";
import type { User } from "@/types";
import { Avatar, Box, Card, Code, Em, Flex, Text } from "@radix-ui/themes";
import type { FC } from "react";
import { SearchToggle } from "../search/search-toggle";
import styles from "./site-header.module.scss";
import { UserMenu } from "./user-menu";

export type Props = {
	user?: User;
};

export const SiteHeader: FC = () => {
	const repo = useRepository();

	return (
		<Card variant="surface" className={styles.heading}>
			<Flex justify="between" align="center">
				<UserMenu />
				{repo ? (
					<Box>
						<SearchToggle />
					</Box>
				) : null}
			</Flex>
		</Card>
	);
};
