import { searchHistoryEntries } from "@/const";
import type { RepositoryHistory } from "@/types";
import { Cross2Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Flex, IconButton, Section, TextField } from "@radix-ui/themes";
import { useNavigate } from "@tanstack/react-router";
import { useLocalStorage } from "@uidotdev/usehooks";
import { type FC, Suspense, useEffect, useRef, useState } from "react";
import { Loading } from "../ui/loading";
import { SearchHistory } from "./search-history";
import { SearchResults } from "./search-results";

const SEARCH_DEBOUNCE_MS = 500;

export type Props = {
	onSelect?: (path: RepositoryHistory) => void;
};
export const SearchForm: FC<Props> = ({ onSelect }: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();
	const [query, setQuery] = useState("");
	const [debouncedQuery, setDebouncedQuery] = useState("");
	const [searchHistory, setSearchHistory] = useLocalStorage<
		RepositoryHistory[]
	>("repository-search-history", []);

	const handleSelectRepo = (repo: RepositoryHistory) => {
		const newHistory = [...new Set([repo, ...searchHistory])].slice(
			0,
			searchHistoryEntries, // Limit entries.
		);
		setSearchHistory(newHistory);
		navigate({ to: `/${repo.owner}/${repo.slug}` });
		onSelect?.(repo);
	};

	const handleRemoveRepo = (repo: RepositoryHistory) => {
		const newHistory = searchHistory.filter(
			({ owner, slug }) => owner !== repo.owner || slug !== repo.slug,
		);
		setSearchHistory(newHistory);
		inputRef.current?.focus();
	};

	// Debaunce search
	useEffect(() => {
		// If the search is cleared, we clear immediately.
		if (!query) {
			setDebouncedQuery("");
			return;
		}

		// Ohterwise we debounce a search.
		const debounceHndlr = setTimeout(
			() => setDebouncedQuery(query),
			SEARCH_DEBOUNCE_MS,
		);

		return () => clearTimeout(debounceHndlr);
	}, [query]);

	const searchChange = (query: string) => {
		setQuery(query);
		setDebouncedQuery("");
	};

	return (
		<Section p="0">
			<Flex direction="column" gap="3">
				<TextField.Root
					ref={inputRef}
					placeholder="Search repository..."
					onChange={({ target: { value } }) => searchChange(value)}
					value={query}
					autoFocus
				>
					<TextField.Slot>
						<MagnifyingGlassIcon height="16" width="16" />
					</TextField.Slot>
					{query ? (
						<TextField.Slot pr="3">
							<IconButton
								size="2"
								variant="ghost"
								onClick={() => setQuery("")}
								aria-label="Clear current search"
							>
								<Cross2Icon height="16" width="16" />
							</IconButton>
						</TextField.Slot>
					) : null}
				</TextField.Root>
				{query ? ( // If there's a query fetching...
					<>
						{!debouncedQuery ? (
							// This first loading is a lie (debounce)...
							<Loading />
						) : (
							<Suspense fallback={<Loading />}>
								<SearchResults
									query={debouncedQuery}
									onSelectRepo={handleSelectRepo}
								/>
							</Suspense>
						)}
					</>
				) : (
					// If there's no query, we show search history
					<SearchHistory
						history={searchHistory}
						onSelectRepo={handleSelectRepo}
						onRemoveRepo={handleRemoveRepo}
					/>
				)}
			</Flex>
		</Section>
	);
};
