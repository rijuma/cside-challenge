import { issueCommentsPerPage } from "@/const";
import { useRepository } from "@/context";
import { useRepositoryIssuesData } from "@/queries";
import type { Issue } from "@/types";
import { Blockquote, Button, Flex } from "@radix-ui/themes";
import { type FC, useState } from "react";
import { DetailSection } from "../ui/detail-section";
import { IssueComments } from "./issue-comments";
import { IssueItem } from "./issue-item";
import styles from "./issues.module.scss";

export const Issues: FC = () => {
	const repo = useRepository();
	const handler = useRepositoryIssuesData();
	const [selected, setSelected] = useState<Issue | null>(null);

	const issueCount = repo?.data?.issueCount || 0;

	if (!issueCount)
		return (
			<DetailSection title="Issues">
				<Blockquote size="1" mt="2">
					This repository has no issues.
				</Blockquote>
			</DetailSection>
		);

	const { issues, hasNext, loadNext, isLoadingNext } = handler;

	return (
		<DetailSection title="Issues" badge={`${issues.length} of ${issueCount}`}>
			<Flex direction="column" gap="2" mt="2" pb="8">
				{issues
					.filter((i) => !selected || selected.number === i.number)
					.map((issue) => (
						<IssueItem
							key={issue.number}
							issue={issue}
							onClick={() => setSelected(issue)}
							onClose={() => setSelected(null)}
							selected={selected?.number === issue.number}
						/>
					))}
				{!selected && hasNext ? (
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
				{selected ? <IssueComments issue={selected} /> : null}
			</Flex>
		</DetailSection>
	);
};
