import { Cross2Icon } from "@radix-ui/react-icons";
import { Box, Button, Heading } from "@radix-ui/themes";
import type { FC } from "react";

export type Props = {
	history: string[];
	onSelectRepo: (url: string) => void;
};

export const SearchHistory: FC<Props> = ({ history, onSelectRepo }) => (
	<Box>
		<Heading color="gray" size="1" as="h2" weight="regular">
			Recent repositories
		</Heading>
		<Box pl="3">
			<ul className="inert column">
				<li>
					<Button
						type="button"
						variant="ghost"
						onClick={() => onSelectRepo?.("/rijuma/rigoli.dev")}
					>
						rijuma/rigoli.dev
					</Button>{" "}
					<Button
						type="button"
						variant="ghost"
						ml="5"
						aria-label="Delete this entry"
					>
						<Cross2Icon />
					</Button>
				</li>
				<li>
					<Button
						type="button"
						variant="ghost"
						onClick={() => onSelectRepo?.("/rijuma/rigoli.dev")}
					>
						rijuma/rigoli.dev
					</Button>
					<Button type="button" variant="ghost" ml="5">
						<Cross2Icon />
					</Button>
				</li>
			</ul>
		</Box>
	</Box>
);
