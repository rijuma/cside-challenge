import type { User } from "@/types/user";
import { Avatar, Box, Card, Code, Em, Flex, Text } from "@radix-ui/themes";
import { SearchToggle } from "./search-toggle";
import styles from "./site-header.module.scss";

export type Props = {
	user?: User;
};

export const SiteHeader = ({ user }: Props) => (
	<Card variant="surface" className={styles.heading}>
		<Flex justify="between" align="center">
			<Flex align="center" gap="4">
				<Flex gap="3" align="center">
					{user ? (
						<>
							<Avatar
								alt={user.username}
								src={user.avatarUrl}
								fallback={user.displayName}
								radius="full"
								size="2"
							/>
							<Text size="2" weight="bold">
								{user.displayName} <Code>{user.username}</Code>
							</Text>
						</>
					) : (
						<>
							<Avatar radius="full" size="2" fallback="NN" />
							<Text size="2" color="red">
								<Em>Missing / wrong token.</Em>
							</Text>
						</>
					)}
				</Flex>
			</Flex>
			<Box>
				<SearchToggle />
			</Box>
		</Flex>
	</Card>
);
