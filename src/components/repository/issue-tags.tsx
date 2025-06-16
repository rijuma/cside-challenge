import type { Issue } from "@/types";
import { Badge, Box, Flex } from "@radix-ui/themes";
import type { CSSProperties, FC } from "react";
import style from "./issue-tags.module.scss";

export type Props = {
	issue: Issue;
};

export const IssueTags: FC<Props> = ({ issue }) => {
	if (!issue.tags?.length) return null;
	return (
		<Flex gap="2" mt="2" flexGrow="1" wrap="wrap">
			{issue.tags.map((tag) => (
				<Box key={tag.name}>
					<Badge
						className={style.IssueTag}
						title={tag.description}
						style={{ "--color": `#${tag.color}` } as CSSProperties}
					>
						{tag.name}
					</Badge>
				</Box>
			))}
		</Flex>
	);
};
