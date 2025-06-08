import { Theme } from "@radix-ui/themes";
import type { FC, PropsWithChildren } from "react";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
	<Theme hasBackground accentColor="indigo" grayColor="slate" appearance="dark">
		{children}{" "}
	</Theme>
);
