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
import type { FC, MouseEvent } from "react";
import styles from "./issue-item.module.scss";

export type Props = {
	issue: Issue;
	selected?: boolean;
	onClick?: (issue: Issue) => void;
	onClose?: () => void;
};
export const IssueItem: FC<Props> = ({ issue, selected, onClick, onClose }) => {
	const handleClose = (event: MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		onClose?.();
	};
	return (
		<Button
			key={issue.number}
			type="button"
			onClick={() => onClick?.(issue)}
			variant={selected ? "solid" : "surface"}
			className={styles.IssueItem}
			color="bronze"
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
						<Text>
							{issue.commentCount}{" "}
							{issue.commentCount === 1 ? "comment" : "comments"}
						</Text>
					</Flex>
				</Flex>
				{selected ? (
					<Button onClick={handleClose} variant="solid" color="gray">
						Back
					</Button>
				) : null}
			</Flex>
		</Button>
	);
};
