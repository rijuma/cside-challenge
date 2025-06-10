import type { Issue } from "@/types";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import {
	Avatar,
	Button,
	Card,
	Em,
	Flex,
	Heading,
	Separator,
	Text,
} from "@radix-ui/themes";
import { Link, useBlocker } from "@tanstack/react-router";
import type { FC, MouseEvent } from "react";
import { HtmlContent } from "../ui/html-content";
import styles from "./issue-item-details.module.scss";

export type Props = {
	issue: Issue;
	selected?: boolean;
	onClick?: (issue: Issue) => void;
	onClose?: () => void;
};
export const IssueItemDetails: FC<Props> = ({ issue, onClose }) => {
	useBlocker({
		shouldBlockFn: () => {
			if (!onClose) return false;

			onClose?.(); // We close the issue if the user goes back.

			return true;
		},
	});
	const handleClose = (event: MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		onClose?.();
	};
	return (
		<Card
			variant="surface"
			className={styles.IssueItemDetails}
			style={
				{ "--transition-name": `issue-${issue.number}` } as React.CSSProperties
			}
		>
			<Flex gap="2" direction="column">
				<Flex gap="2" align="start" mt="1" mb="1" flexGrow="1">
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
								{issue.title}{" "}
								<Text asChild size="2" weight="regular" ml="4">
									<Link
										to={issue.url}
										target="_blank"
										rel="noopener nofollow"
										className={styles.OpenComment}
										aria-label="Open comment in GitHub on a new tab."
									>
										Open <ExternalLinkIcon className="icon" />
									</Link>
								</Text>
							</Heading>
						</Text>
						<Flex gap="2" align="center" wrap="wrap">
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
								{issue.author.username} at{" "}
								{issue.createdAt.toLocaleString("en-US")}
							</Text>
						</Flex>
					</Flex>
					<Button onClick={handleClose} variant="solid" color="gray">
						Back
					</Button>
				</Flex>
				<HtmlContent html={issue.descriptionHTML} />
			</Flex>
		</Card>
	);
};
