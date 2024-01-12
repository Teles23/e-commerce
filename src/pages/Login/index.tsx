import LoginForm from "../../components/LoginForm";
import useAuth from "../../hooks/useAuth";
import "./style.css";

function LoginPage() {
	const { login, password, setLogin, setPassword } = useAuth();

	return (
		<div className="container">
			<h1>Seja bem-vindo ao E-commerce</h1>
			<LoginForm
				login={login}
				password={password}
				setLogin={setLogin}
				setPassword={setPassword}
			/>
		</div>
	);
}

export default LoginPage;
