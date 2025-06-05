import { Flex, Link, Text } from "@radix-ui/themes";
import type { FC } from "react";

export const SiteFooter: FC = () => (
	<Flex justify="center" align="center" p="2">
		<Text color="gray" size="1">
			Made by{" "}
			<Link href="https://rigoli.dev" target="_blank" rel="noopener nofollow">
				Marcos Rigoli
			</Link>
		</Text>
	</Flex>
);
