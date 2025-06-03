export type Repository = {
	name: string;
	description?: string;
	mainBranch: string;
	forkCount: number;
	starCount: number;
	branchCount: number;
	commitCount: number;
	contributors: {
		avatarUrl: string;
		name: string;
	}[];
};
