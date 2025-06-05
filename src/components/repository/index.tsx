import { useRepository } from "@/context";
import type { FC } from "react";

export const Repository: FC = () => {
	const data = useRepository();

	return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
