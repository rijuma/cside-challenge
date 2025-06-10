import { issuesPerPage } from "@/const";
import { useRepository } from "@/context";
import { useRepositoryIssuesData } from "@/queries";
import type { Issue } from "@/types";
import { transition } from "@/utils/transitions";
import { Blockquote, Button, Flex } from "@radix-ui/themes";
import { type FC, useRef, useState } from "react";
import { DetailSection } from "../ui/detail-section";
import { IssueComments } from "./issue-comments";
import { IssueItem } from "./issue-item";
import { IssueItemDetails } from "./issue-item-details";
import styles from "./issues.module.scss";

export const Issues: FC = () => {
	const detailsRef = useRef<HTMLDivElement>(null);
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
				{selected ? (
					<div ref={detailsRef}>
						<IssueItemDetails
							issue={selected}
							onClose={() => transition(() => setSelected(null))}
						/>
					</div>
				) : (
					issues.map((issue) => (
						<IssueItem
							key={issue.number}
							issue={issue}
							onClick={async () => {
								await transition(() => setSelected(issue));
								detailsRef.current?.scrollIntoView({
									block: "start",
									behavior: "smooth",
								});
							}}
						/>
					))
				)}
				{!selected && hasNext ? (
					<Button
						type="button"
						onClick={() => loadNext(issuesPerPage)}
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
