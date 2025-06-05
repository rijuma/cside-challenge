import { GitHubLogoIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, Button, Dialog, Flex, Kbd } from "@radix-ui/themes";

import { type FC, useEffect, useState } from "react";
import { SearchForm } from "./search-form";
import styles from "./search-toggle.module.scss";

const SEARCH_KEY_BINDING = "/";

export const SearchToggle: FC = () => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (show) return; // Bind only when the alert is closed.

		const controller = new AbortController();
		const { signal } = controller;

		console.log({ show });

		document.addEventListener(
			"keydown",
			(event) => {
				const { key } = event;

				if (key !== SEARCH_KEY_BINDING) return;

				event.preventDefault(); // Avoid to write the Slash in the search input

				setShow(true);
			},
			{ signal },
		);

		return () => controller.abort(); // Cleanup
	}, [show]);

	return (
		<Box>
			<Button
				variant="surface"
				className={styles.SearchInput}
				type="button"
				onClick={() => setShow(true)}
				aria-label="Search Github Repository. Press Slash key to search quickly."
				aria-haspopup="dialog"
			>
				<GitHubLogoIcon height="16" width="16" />
				<MagnifyingGlassIcon height="16" width="16" />
				<Kbd>/</Kbd>
			</Button>

			<Dialog.Root open={show} onOpenChange={() => setShow(false)}>
				<Dialog.Content align="start">
					<Dialog.Title>Search GitHub Repository</Dialog.Title>
					<Dialog.Description hidden>
						This dialog provides a way to search through GitHub repositories.
					</Dialog.Description>

					<SearchForm onSelect={() => setShow(false)} />

					<Flex gap="3" mt="4" justify="end">
						<Dialog.Close>
							<Button variant="soft" color="gray">
								Close
							</Button>
						</Dialog.Close>
					</Flex>
				</Dialog.Content>
			</Dialog.Root>
		</Box>
	);
};
