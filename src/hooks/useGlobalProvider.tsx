import { useLocalStorage } from "react-use";

function useGlobalProvider() {
	const [token, setToken, removeToken] = useLocalStorage("token", "");

	return {
		token: token || "",
		setToken,
		removeToken,
	};
}

export default useGlobalProvider;
