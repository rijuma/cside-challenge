import { issueCommentsPerPage } from "@/const";
import { useIssueCommentsData } from "@/queries";
import type { Issue } from "@/types";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Avatar, Blockquote, Button, Card, Flex, Text } from "@radix-ui/themes";
import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import { DetailSection } from "../ui/detail-section";
import styles from "./issue-comments.module.scss";

export type Props = {
	issue: Issue;
};

export const IssueComments: FC<Props> = ({ issue }) => {
	const handle = useIssueCommentsData(issue.number);

	if (!handle.comments)
		return (
			<DetailSection title="Comments" ml="6" mr="6">
				<Blockquote size="1" mt="2">
					This issue has no comments.
				</Blockquote>
			</DetailSection>
		);

	const { comments, hasNext, loadNext, isLoadingNext } = handle;

	return (
		<DetailSection title="Comments">
			<Flex direction="column" gap="2" mt="2" pb="8">
				{comments.map(
					({ username, avatarUrl, url, id, detailsHTML, updatedAt }) => (
						<Flex key={id} gap="4">
							<Avatar
								src={avatarUrl}
								fallback={username}
								title={username}
								size="3"
								radius="full"
							/>
							<Card style={{ width: "100%" }} className={styles.Card}>
								<Flex direction="column">
									<Flex align="start" justify="between">
										<Text color="bronze" size="1">
											{username} at {updatedAt.toLocaleString("en-US")}
										</Text>
										<Text asChild size="2">
											<Link
												to={url}
												target="_blank"
												rel="noopener nofollow"
												className={styles.OpenComment}
												aria-label="Open comment in GitHub on a new tab."
											>
												Open <ExternalLinkIcon className="icon" />
											</Link>
										</Text>
									</Flex>
									<Text
										color="gray"
										weight="regular"
										size="2"
										as="p"
										// biome-ignore lint/security/noDangerouslySetInnerHtml: It should be safe since it's from GitHub API
										dangerouslySetInnerHTML={{ __html: detailsHTML }}
									/>
								</Flex>
							</Card>
						</Flex>
					),
				)}

				{hasNext ? (
					<Button
						type="button"
						onClick={() => loadNext(issueCommentsPerPage)}
						loading={isLoadingNext}
						mt="4"
						className={styles.IssueMore}
						size="3"
					>
						Load more...
					</Button>
				) : null}
			</Flex>
		</DetailSection>
	);
};
