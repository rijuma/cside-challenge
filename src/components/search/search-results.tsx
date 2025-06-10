import { useSearchRepositoryData } from "@/queries/search-repository";
import { Avatar, Button, Flex, Heading, Text } from "@radix-ui/themes";
import styles from "./search-results.module.scss";

import type { RepositoryHistory } from "@/types";
import type { FC } from "react";
import { HtmlContent } from "../ui/html-content";

type Props = {
	query: string;
	onSelectRepo?: (repo: RepositoryHistory) => void;
};

export const SearchResults: FC<Props> = ({ query, onSelectRepo }) => {
	const { total, nodes } = useSearchRepositoryData(query);

	if (!total) return null;

	return (
		<Flex direction="column" gap="2" align="start">
			<Heading as="h2" size="1">
				Showing {nodes.length} of {total} results for "{query}":
			</Heading>
			{nodes.map(({ ownerAvatar, slug, owner, url, descriptionHTML }) => (
				<Button
					type="button"
					variant="surface"
					key={url}
					onClick={() => onSelectRepo?.({ slug, owner })}
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
								{owner}/{slug}
							</Text>
							{descriptionHTML ? (
								<HtmlContent html={descriptionHTML} />
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
