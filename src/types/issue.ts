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
	createdAt: Date;
};
