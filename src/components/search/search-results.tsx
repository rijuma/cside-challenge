import { useSearchRepositoryData } from "@/queries/search-repository";

import type { FC } from "react";

type Props = {
	query: string;
	loading?: boolean;
	onResponse?: () => void;
};

export const SearchResults: FC<Props> = ({ query }) => {
	const searchResults = useSearchRepositoryData(query);

	if (!query) return null;

	return <pre>{JSON.stringify(searchResults, null, 2)}</pre>;
};
