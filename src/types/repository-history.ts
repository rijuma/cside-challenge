import type { RepositoryResult } from "./repository-search-result";

export type RepositoryHistory = Pick<RepositoryResult, "owner" | "slug">;
