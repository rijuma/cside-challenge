import type { Issue } from "@/types";
import {
	Avatar,
	Button,
	Em,
	Flex,
	Heading,
	Separator,
	Text,
} from "@radix-ui/themes";
import type { FC } from "react";
import styles from "./issue-item.module.scss";

export type Props = {
	issue: Issue;
	onClick?: (issue: Issue) => void;
};
export const IssueItem: FC<Props> = ({ issue, onClick }) => (
	<Button
		type="button"
		onClick={() => onClick?.(issue)}
		variant="surface"
		className={styles.IssueItem}
		color="bronze"
		style={
			{ "--transition-name": `issue-${issue.number}` } as React.CSSProperties
		}
	>
		<Flex gap="2" align="center" mt="1" mb="1" flexGrow="1">
			<Avatar
				src={issue.author.avatarUrl}
				fallback={issue.author.username}
				title={issue.author.username}
				size="3"
				radius="full"
			/>
			<Flex direction="column" align="start" flexGrow="1">
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
					<Text wrap="nowrap">
						{issue.commentCount}{" "}
						{issue.commentCount === 1 ? "comment" : "comments"}
					</Text>
					<Separator orientation="vertical" />
					<Text color="bronze" size="1" wrap="nowrap">
						{issue.author.username} at {issue.createdAt.toLocaleString("en-US")}
					</Text>
				</Flex>
			</Flex>
		</Flex>
	</Button>
);
