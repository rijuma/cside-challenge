import type { issueCommentsPaginatedFragment$key } from "@/utils/relay/__generated__/issueCommentsPaginatedFragment.graphql";

export type Issue = {
	url: string;
	number: number;
	title: string;
	author: {
		username: string;
		avatarUrl: string;
	};
	descriptionHTML: string;
	commentCount: number;
	tags: {
		color: string;
		description: string;
		name: string;
	}[];
};
