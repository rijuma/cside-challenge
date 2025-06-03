export type Repository = {
	name: string;
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
};
