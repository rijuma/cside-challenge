export type RepositorySearchResult = {
	total: number;
	nodes: RepositoryResult[];
};

export type RepositoryResult = {
	name: string;
	owner: string;
	ownerAvatar: string;
	path: string;
	url: string;
	descriptionHTML: string;
};
