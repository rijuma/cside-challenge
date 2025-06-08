import { searchRepositoryQuery } from "@/queries/search-repository";
import { useLazyLoadQuery } from "react-relay";

import type { FC } from "react";

type Props = {
	query: string;
	loading?: boolean;
	onResponse?: () => void;
};

export const SearchResults: FC<Props> = ({ query }) => {
	const searchResults = useLazyLoadQuery(
		searchRepositoryQuery,
		{ query },
		{ fetchPolicy: "network-only" },
	);

	if (!query) return null;

	return <pre>{JSON.stringify(searchResults, null, 2)}</pre>;
};
