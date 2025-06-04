import { Container } from "@radix-ui/themes";
import type { FC, PropsWithChildren } from "react";

import styles from "./root.module.scss";

import { CSideLogo } from "@/components/ui/cside-logo";

export const RootLayout: FC<PropsWithChildren> = ({ children }) => (
	<div>
		<h1 className={styles.test}>
			<CSideLogo />
			Hello
		</h1>
		<Container>{children}</Container>
	</div>
);
