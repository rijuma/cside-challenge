import type { RepositoryHistory } from "@/types";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Box, Button, Heading } from "@radix-ui/themes";
import type { FC } from "react";

export type Props = {
	history: RepositoryHistory[];
	onSelectRepo: (url: RepositoryHistory) => void;
	onRemoveRepo: (url: RepositoryHistory) => void;
};

export const SearchHistory: FC<Props> = ({
	history,
	onSelectRepo,
	onRemoveRepo,
}) =>
	history?.length ? (
		<Box>
			<Heading color="gray" size="1" as="h2" weight="regular">
				Recent repositories
			</Heading>
			<Box pl="3">
				<ul className="inert column">
					{history.map((repo) => (
						<li key={`${repo.owner}-${repo.slug}`}>
							<Button
								type="button"
								variant="ghost"
								onClick={() => onSelectRepo?.(repo)}
							>
								{repo.owner}/{repo.slug}
							</Button>{" "}
							<Button
								type="button"
								variant="ghost"
								ml="5"
								aria-label="Delete this entry"
								onClick={() => onRemoveRepo?.(repo)}
							>
								<Cross2Icon />
							</Button>
						</li>
					))}
				</ul>
			</Box>
		</Box>
	) : null;
