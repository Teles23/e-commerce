import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextProps } from "../../types/authContextProps";
import "./style.css";

const LoginForm: React.FC<AuthContextProps> = ({
	login,
	password,
	setLogin,
	setPassword,
}) => {
	const navigate = useNavigate();
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (isFormValid) {
			navigate("/products");
		}
	};

	const isFormValid = login.includes("@") && password.length >= 8;

	return (
		<div className="form-container">
			<h1 className="form-title">Login</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Email:
					<input
						className="form-input"
						type="email"
						value={login}
						onChange={(e) => setLogin(e.target.value)}
					/>
				</label>
				<br />
				<label>
					Password:
					<input
						className="form-input"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<br />
				<button className="form-button" type="submit" disabled={!isFormValid}>
					Login
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
