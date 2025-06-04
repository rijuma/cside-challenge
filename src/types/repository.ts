import type { repositoryIssuesPaginatedFragment$key } from "@/utils/relay/__generated__/repositoryIssuesPaginatedFragment.graphql";

export type Repository = {
	id: string;
	slug: string;
	owner: string;
	description?: string;
	branchCount: number;
	commitCount: number;
	forkCount: number;
	issueCount: number;
	mainBranch: string;
	starCount: number;
	contributors:
		| {
				avatarUrl: string;
				name: string;
		  }[]
		| null;
	_ref: repositoryIssuesPaginatedFragment$key;
};
