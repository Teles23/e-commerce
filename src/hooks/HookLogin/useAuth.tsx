import { useContext } from "react";
import { AuthContextProps } from "../../types/authContextProps";
import AuthContext from "../../contexts/ContextLogin/AuthContext";

const useAuth = (): AuthContextProps => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth deve ser usado dentro de um AuthProvider");
	}
	return context;
};

export default useAuth;
