import { createContext, useContext } from "react";

import type { User } from "@/types";

const UserContext = createContext<User | undefined>(undefined);

export const UserProvider = UserContext.Provider;

export const useUser = () => useContext<User | undefined>(UserContext);
