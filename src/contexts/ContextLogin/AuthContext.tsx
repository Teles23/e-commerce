import { createContext } from "react";
import { AuthContextProps } from "../../types/authContextProps";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export default AuthContext;
