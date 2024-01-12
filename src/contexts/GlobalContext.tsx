import { createContext } from "react";
import useGlobalProvider from "../hooks/useGlobalProvider";
import { GlobalChildren } from "../types/globalProps";

export type GlobalContextProps = ReturnType<typeof useGlobalProvider>;

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const GlobalProvider: React.FC<GlobalChildren> = ({ children }) => {
	const globalProvider = useGlobalProvider();
	return (
		<GlobalContext.Provider value={globalProvider}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContext;
