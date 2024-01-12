import { useContext } from "react";
import { AuthContextProps } from "../types/globalProps";
import AuthContext from "../contexts/AuthContext";

const useAuth = (): AuthContextProps => {
	return useContext(AuthContext) as AuthContextProps;
};

export default useAuth;
