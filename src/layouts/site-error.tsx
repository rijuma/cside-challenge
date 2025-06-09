import { supportEmail } from "@/const";
import { Box, Button, Container, Flex, Heading, Text } from "@radix-ui/themes";
import { Link } from "@tanstack/react-router";
import type { FC } from "react";

interface Props {
	message?: string | string[];
}

export const SiteErrorLayout: FC<Props> = ({ message = "Unknown error" }) => {
	const lines = Array.isArray(message) ? message : [message];

	return (
		<Container width="20rem">
			<Flex
				direction="column"
				height="100dvh"
				align="center"
				justify="center"
				gap="4"
			>
				<Text size="1">Whoopsie!!!!1</Text>
				<Heading size="7" color="red">
					App error
				</Heading>
				<Box>
					{lines.map((line) => (
						<Text as="p" key={`${line}`} align="center" size="3" color="gray">
							{line}
						</Text>
					))}
				</Box>
				<Box>
					<Text as="p" align="center" size="3" color="gray">
						If the problem persists, please contact support:{" "}
						<a
							href={`mailto: ${supportEmail}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							{supportEmail}
						</a>
					</Text>
				</Box>
				<Box mt="4">
					<Link to="/">
						<Button>Back to home</Button>
					</Link>
				</Box>
			</Flex>
		</Container>
	);
};
