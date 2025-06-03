import { useRepository } from "@/context/repository";

export const Repository = () => {
	const data = useRepository();

	return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
