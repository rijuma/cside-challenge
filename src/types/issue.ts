import type { issueCommentsPaginatedFragment$key } from "@/utils/relay/__generated__/issueCommentsPaginatedFragment.graphql";

export type Issue = {
	number: number;
	title: string;
	details: string;
	commentCount: number;
	_ref: issueCommentsPaginatedFragment$key;
};
