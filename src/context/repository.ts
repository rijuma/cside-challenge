import { createContext, useContext } from "react";

import type { Repository } from "@/types/repository";

const RepositoryContext = createContext<Repository | undefined>(undefined);

export const RepositoryProvider = RepositoryContext.Provider;

export const useRepository = () =>
	useContext<Repository | undefined>(RepositoryContext);
