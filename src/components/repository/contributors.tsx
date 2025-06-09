import { useRepository } from "@/context";
import { Avatar, Blockquote, Flex, Text } from "@radix-ui/themes";
import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import { DetailSection } from "../ui/detail-section";

export const Contributors: FC = () => {
	const repo = useRepository();

	const contributors = repo?.data.contributors;

	if (!contributors?.length)
		return (
			<DetailSection title="Contributors">
				<Blockquote color="crimson" size="1" mt="2">
					You don't have permissions to see the contributors list on this
					repository.
				</Blockquote>
			</DetailSection>
		);

	return (
		<DetailSection title="Contributors" badge={`${contributors.length}`}>
			<Flex gap="2" wrap="wrap" mt="2">
				{contributors.map(({ url, avatarUrl, username, name }) => (
					<Link
						key={url}
						to={url}
						target="_blank"
						rel="noopener noreferrer"
						title={name}
					>
						<Flex direction="column" align="center">
							<Avatar
								key={url}
								fallback={username}
								src={avatarUrl}
								radius="full"
								size="2"
							/>
							<Text size="2">{username}</Text>
						</Flex>
					</Link>
				))}
			</Flex>
		</DetailSection>
	);
};
