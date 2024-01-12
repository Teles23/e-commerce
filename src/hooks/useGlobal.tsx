import { useContext } from "react";
import GlobalContext, { GlobalContextProps } from "../contexts/GlobalContext";

const useGlobal = (): GlobalContextProps => {
	return useContext(GlobalContext) as GlobalContextProps;
};

export default useGlobal;
