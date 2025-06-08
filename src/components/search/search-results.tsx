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
		{ query, skip: !query }, // If there's no query, we skip it.
		{ fetchPolicy: "network-only" },
	);

	return <pre>{JSON.stringify(searchResults, null, 2)}</pre>;
};
