import { proxyUrl } from "@/const";
import { useUser } from "@/context/user";
import { Avatar, Card, Code, Flex, Text } from "@radix-ui/themes";
import { Popover } from "radix-ui";
import { ThemeProvider } from "../theme-provider";
import styles from "./user-menu.module.scss";

import type { FC } from "react";

export const UserMenu: FC = () => {
	const user = useUser();

	if (!user) return null;

	return (
		<Flex align="center" gap="4">
			<Popover.Root>
				<Popover.Trigger asChild>
					<Avatar
						alt={user.username}
						src={user.avatarUrl}
						fallback={user.displayName}
						radius="full"
						size="2"
					/>
				</Popover.Trigger>
				<Popover.Portal>
					<ThemeProvider>
						<Popover.Content className={styles.PopoverContent} sideOffset={5}>
							<Card>
								<Flex direction="column" gap="1">
									<Text as="p" size="1" color="gray">
										Logged in as:
									</Text>

									<Text as="p" size="2" weight="bold" color="blue">
										{user.displayName} <Code>{user.username}</Code>
									</Text>
									{proxyUrl ? (
										<Text as="p" size="1" color="gray">
											<small>
												(Via: <Code>{proxyUrl}</Code>)
											</small>
										</Text>
									) : null}
								</Flex>
							</Card>
							<Popover.Arrow className={styles.PopoverArrow} />
						</Popover.Content>
					</ThemeProvider>
				</Popover.Portal>
			</Popover.Root>
		</Flex>
	);
};
