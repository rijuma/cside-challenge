import { issueCommentsPerPage } from "@/const";
import { useRepository } from "@/context";
import { useRepositoryIssuesData } from "@/queries";
import type { Issue } from "@/types";
import {
	Avatar,
	Badge,
	Blockquote,
	Box,
	Button,
	Em,
	Flex,
	Heading,
	Separator,
	Text,
} from "@radix-ui/themes";
import { type FC, type PropsWithChildren, useState } from "react";
import styles from "./issues.module.scss";

type LayoutProps = PropsWithChildren<{
	count?: number;
}>;
const Layout: FC<LayoutProps> = ({ children, count }) => (
	<Box>
		<Heading as="h3" size="2" mt="4">
			Issues
			{count !== undefined ? (
				<Badge color="gold" ml="2">
					{count}
				</Badge>
			) : null}
		</Heading>
		{children}
	</Box>
);

export const Issues: FC = () => {
	const repo = useRepository();
	const handler = useRepositoryIssuesData();
	const [selected, setSelected] = useState<Issue | null>(null);

	const issueCount = repo?.data?.issueCount || 0;

	if (!issueCount)
		return (
			<Layout>
				<Blockquote size="1" mt="2">
					This repository has no issues.
				</Blockquote>
			</Layout>
		);

	const { issues, hasNext, loadNext, isLoadingNext } = handler;

	return (
		<Layout count={issueCount}>
			<Flex direction="column" gap="2" mt="2">
				{issues?.map((issue) => (
					<Button
						key={issue.number}
						type="button"
						onClick={() => setSelected(issue)}
						variant="surface"
						className={styles.IssueItem}
						color="bronze"
					>
						<Flex gap="2" align="start" mt="1" mb="1">
							<Avatar
								src={issue.author.avatarUrl}
								fallback={issue.author.username}
								title={issue.author.username}
								size="3"
								radius="full"
							/>
							<Flex direction="column" align="start">
								<Text asChild align="left">
									<Heading as="h5" size="3">
										{issue.title}
									</Heading>
								</Text>
								<Flex gap="2" align="center">
									<Text size="1">
										<Em>#{issue.number}</Em>
									</Text>
									<Separator orientation="vertical" />
									<Text>
										{issue.commentCount}{" "}
										{issue.commentCount === 1 ? "comment" : "comments"}
									</Text>
								</Flex>
							</Flex>
						</Flex>
					</Button>
				))}
				{hasNext ? (
					<Button
						type="button"
						onClick={() => loadNext(issueCommentsPerPage)}
						loading={isLoadingNext}
						mt="4"
						mb="8"
						className={styles.IssueMore}
						size="3"
					>
						Load more...
					</Button>
				) : null}
			</Flex>
		</Layout>
	);
};
