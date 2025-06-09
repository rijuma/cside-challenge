import { createContext, useContext } from "react";

import type { Repository } from "@/types";
import type { repositoryQuery } from "@/utils/relay/__generated__/repositoryQuery.graphql";
import type { PreloadedQuery } from "react-relay";

export type RepositoryContext = {
	data: Repository;
	queryRef: PreloadedQuery<repositoryQuery>;
};

const RepositoryContext = createContext<RepositoryContext | undefined>(
	undefined,
);

export const RepositoryProvider = RepositoryContext.Provider;

export const useRepository = () =>
	useContext<RepositoryContext | undefined>(RepositoryContext);
