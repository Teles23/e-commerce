import React, { ReactNode } from "react";
import useLogin from "../../hooks/HookLogin/useAuthValues";
import AuthContext from "./AuthContext";

interface AuthProviderProps {
	children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	return (
		<AuthContext.Provider value={useLogin()}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
