import { Cross2Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Flex, IconButton, Section, TextField } from "@radix-ui/themes";
import { useNavigate } from "@tanstack/react-router";
import { type FC, Suspense, useEffect, useState } from "react";
import { Loading } from "../ui/loading";
import { SearchHistory } from "./search-history";
import { SearchResults } from "./search-results";

const SEARCH_DEBOUNCE_MS = 2000;

export type Props = {
	onSelect?: (path: string) => void;
};
export const SearchForm: FC<Props> = ({ onSelect }: Props) => {
	const navigate = useNavigate();
	const [query, setQuery] = useState("");
	const [debouncedQuery, setDebouncedQuery] = useState("");

	const handleSelectRepo = (path: string) => {
		navigate({ to: path });
		onSelect?.(path);
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
					placeholder="Search repository..."
					onChange={({ target: { value } }) => searchChange(value)}
					value={query}
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
								<SearchResults query={debouncedQuery} />
							</Suspense>
						)}
					</>
				) : (
					// If there's no query, we show search history
					<SearchHistory history={[]} onSelectRepo={handleSelectRepo} />
				)}
			</Flex>
		</Section>
	);
};
