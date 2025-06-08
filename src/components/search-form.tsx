import { Cross2Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
	Box,
	Button,
	Flex,
	Heading,
	Section,
	TextField,
} from "@radix-ui/themes";
import { useNavigate } from "@tanstack/react-router";
import { type FC, useState } from "react";

export type Props = {
	onSelect?: (path: string) => void;
};
export const SearchForm: FC<Props> = ({ onSelect }: Props) => {
	const navigate = useNavigate();
	const [results, setResults] = useState([]);

	const handleSelectRepo = (path: string) => {
		navigate({ to: path });
		onSelect?.(path);
	};

	const handleSubmit = () => {};

	return (
		<Section p="0">
			<Flex direction="column" gap="3">
				<form>
					<TextField.Root placeholder="Search repository...">
						<TextField.Slot>
							<MagnifyingGlassIcon height="16" width="16" />
						</TextField.Slot>
					</TextField.Root>
				</form>

				{!results?.length ? (
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
										onClick={() => handleSelectRepo("/rijuma/rigoli.dev")}
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
										onClick={() => handleSelectRepo("/rijuma/rigoli.dev")}
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
				) : (
					<div>Search Results</div>
				)}
			</Flex>
		</Section>
	);
};
