import { createContext } from "react";
import useLogin from "../hooks/useAuthProvider";
import { AuthContextProps, GlobalChildren } from "../types/globalProps";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<GlobalChildren> = ({ children }) => {
	const data = useLogin();
	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContext;
