import { useSearchRepositoryData } from "@/queries/search-repository";
import { Avatar, Button, Flex, Heading, Text } from "@radix-ui/themes";
import styles from "./search-results.module.scss";

import type { FC } from "react";

type Props = {
	query: string;
	onSelectRepo?: (url: string) => void;
};

export const SearchResults: FC<Props> = ({ query, onSelectRepo }) => {
	const { total, nodes } = useSearchRepositoryData(query);

	if (!total) return null;

	return (
		<Flex direction="column" gap="2" align="start">
			<Heading as="h2" size="1">
				Showing {nodes.length} of {total} results for "{query}":
			</Heading>
			{nodes.map(({ ownerAvatar, owner, path, url, descriptionHTML }) => (
				<Button
					type="button"
					variant="surface"
					key={url}
					onClick={() => path && onSelectRepo?.(path)}
					className={styles.SearchResult}
				>
					<Flex gap="2">
						<Avatar
							title={owner}
							src={ownerAvatar}
							fallback={owner}
							size="1"
							radius="full"
							mt="1"
						/>
						<Flex direction="column" align="start">
							<Text weight="bold" as="p" color="blue">
								{path}
							</Text>
							{descriptionHTML ? (
								<Text
									color="gray"
									weight="regular"
									size="1"
									// biome-ignore lint/security/noDangerouslySetInnerHtml: It should be safe since it's from GitHub API
									dangerouslySetInnerHTML={{ __html: descriptionHTML }}
								/>
							) : (
								<Text color="gray" weight="regular" size="1">
									<i>(No description)</i>
								</Text>
							)}
						</Flex>
					</Flex>
				</Button>
			))}
		</Flex>
	);
};
