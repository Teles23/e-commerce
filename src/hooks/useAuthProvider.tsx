import { useState } from "react";

const useLogin = () => {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	return {
		login,
		password,
		setLogin,
		setPassword,
	};
};

export default useLogin;
