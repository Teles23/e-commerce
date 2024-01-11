export interface AuthContextProps {
	login: string;
	password: string;
	setLogin: React.Dispatch<React.SetStateAction<string>>;
	setPassword: React.Dispatch<React.SetStateAction<string>>;
}
