import { useRepository } from "@/context";
import {
	Avatar,
	Badge,
	Blockquote,
	Box,
	Flex,
	Heading,
	Text,
} from "@radix-ui/themes";
import { Link } from "@tanstack/react-router";
import { type FC, type PropsWithChildren, useState } from "react";

type LayoutProps = PropsWithChildren<{
	count?: number;
}>;
const Layout: FC<LayoutProps> = ({ children, count }) => (
	<Box>
		<Heading as="h3" size="2" mt="4">
			Contributors
			{count !== undefined ? (
				<Badge color="gold" ml="2">
					{count}
				</Badge>
			) : null}
		</Heading>
		{children}
	</Box>
);

export const Contributors: FC = () => {
	const [expanded, setExpanded] = useState(false);
	const repo = useRepository();

	const contributors = repo?.data.contributors;

	if (!contributors)
		return (
			<Layout>
				<Blockquote color="crimson" size="1" mt="2">
					You don't have permissions to see the contributors list on this
					repository.
				</Blockquote>
			</Layout>
		);

	return (
		<Layout count={contributors.length}>
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
		</Layout>
	);
};
