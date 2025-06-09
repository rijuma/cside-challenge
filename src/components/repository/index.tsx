import { useRepository } from "@/context";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Box, Flex, Heading, Separator, Text } from "@radix-ui/themes";
import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import styles from "./index.module.scss";

/*
	const issues = useRepositoryIssuesData();
	const comments = useIssueCommentsData(1);
	console.log({ issues, comments });
	*/

export const Repository: FC = () => {
	const repository = useRepository();

	if (!repository) return null;

	const { owner, slug, url, starCount, forkCount, branchCount, commitCount } =
		repository.data;

	return (
		<div className={styles.RepositoryHeader}>
			<Heading as="h1">
				{owner}/{slug}
			</Heading>
			<Flex gap="2" wrap="wrap">
				<Link
					to={url}
					target="_blank"
					className={styles.RepoLink}
					rel="noreferrer noopener"
				>
					{url} <ExternalLinkIcon className="icon" />
				</Link>
				|
				<Link
					to={url.replace("github.com", "github.dev")}
					target="_blank"
					className={styles.RepoLink}
					rel="noreferrer noopener"
				>
					Open in Editor
				</Link>
			</Flex>
			<Text asChild color="gold" size="2">
				<Flex gap="2" wrap="wrap" align="center" mt="2">
					<Box>{starCount} Stars</Box>
					<Separator orientation="vertical" />
					<Box>{forkCount} Forks</Box>
					<Separator orientation="vertical" />
					<Box>{branchCount} Branches</Box>
					<Separator orientation="vertical" />
					<Box>{commitCount} Commits</Box>
				</Flex>
			</Text>
		</div>
	);
};
