import { useRepository } from "@/context";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Box, Flex, Heading, Separator, Text } from "@radix-ui/themes";
import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import { Contributors } from "./contributors";
import styles from "./index.module.scss";
import { Issues } from "./issues";

export const Repository: FC = () => {
	const repository = useRepository();

	if (!repository) return null;

	const {
		owner,
		slug,
		url,
		starCount,
		forkCount,
		branchCount,
		commitCount,
		descriptionHTML,
	} = repository.data;

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
					aria-label="Open repository in GitHub on a new tab."
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

			<Heading as="h3" size="2" mt="4">
				Description
			</Heading>
			{!descriptionHTML ? (
				<Text
					color="gray"
					weight="regular"
					size="3"
					as="p"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: It should be safe since it's from GitHub API
					dangerouslySetInnerHTML={{ __html: descriptionHTML }}
				/>
			) : (
				<Text color="gray" weight="regular" size="2" as="p">
					<i>(No repository description.)</i>
				</Text>
			)}
			<Contributors />
			<Issues />
		</div>
	);
};
