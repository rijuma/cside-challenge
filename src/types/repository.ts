import type { repositoryIssuesPaginatedFragment$key } from "@/utils/relay/__generated__/repositoryIssuesPaginatedFragment.graphql";

export type Repository = {
	id: string;
	url: string;
	slug: string;
	owner: string;
	descriptionHTML: string;
	branchCount: number;
	commitCount: number;
	forkCount: number;
	issueCount: number;
	mainBranch: string;
	starCount: number;
	starred: boolean;
	contributors:
		| {
				username: string;
				name: string;
				avatarUrl: string;
				url: string;
		  }[]
		| null;
	_ref: repositoryIssuesPaginatedFragment$key;
};
