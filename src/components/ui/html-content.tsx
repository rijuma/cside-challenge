import { Text, type TextProps } from "@radix-ui/themes";
import type { FC } from "react";

export type Props = {
	html: string;
} & TextProps &
	React.RefAttributes<HTMLSpanElement>;
export const HtmlContent: FC<Props> = ({ html, ...textProps }) => (
	<Text
		color="gray"
		weight="regular"
		size="3"
		as="p"
		// biome-ignore lint/security/noDangerouslySetInnerHtml: It should be safe since it's from GitHub API
		dangerouslySetInnerHTML={{ __html: html }}
		{...textProps}
		style={{ overflow: "auto", textAlign: "left" }}
	/>
);
