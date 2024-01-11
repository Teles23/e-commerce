import React from "react";
import { AuthContextProps } from "../../types/authContextProps";

const LoginForm: React.FC<AuthContextProps> = ({
	login,
	password,
	setLogin,
	setPassword,
}) => {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	};

	const isFormValid = login.includes("@") && password.length >= 8;

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Email:
				<input
					type="email"
					value={login}
					onChange={(e) => setLogin(e.target.value)}
				/>
			</label>
			<br />
			<label>
				Password:
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</label>
			<br />
			<button type="submit" disabled={!isFormValid}>
				Login
			</button>
		</form>
	);
};

export default LoginForm;
