export type RepositorySearchResult = {
	total: number;
	nodes: RepositoryResult[];
};

export type RepositoryResult = {
	slug: string;
	owner: string;
	ownerAvatar: string;
	url: string;
	descriptionHTML: string;
};
