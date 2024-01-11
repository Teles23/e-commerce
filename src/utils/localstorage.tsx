import { useLocalStorage } from "react-use";

const LocalToken = () => {
  const [getToken, setToken, clearToken] = useLocalStorage("token", "false");

  return {
    getToken,
    setToken,
    clearToken,
  };
};

export default LocalToken;
