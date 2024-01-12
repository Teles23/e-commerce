import { ReactNode } from "react";

export interface AuthContextProps {
	login: string;
	password: string;
	setLogin: React.Dispatch<React.SetStateAction<string>>;
	setPassword: React.Dispatch<React.SetStateAction<string>>;
}
export interface GlobalChildren {
	children: ReactNode;
}

export interface CartItem {
	productId: number;
	quantity: number;
	price: number;
	title: string;
}
