import { useState } from "react";
import { useLocalStorage } from "react-use";
import { Product } from "../types/product";
import { CartItem } from "../types/globalProps";

function useGlobalProvider() {
	const [token, setToken, removeToken] = useLocalStorage("token", "");
	const [products, setProducts] = useState<Product[]>([]);
	const [cart, setCart] = useState<CartItem[]>([]);
	const [totalPrice, setTotalPrice] = useState(0);

	return {
		token: token || "",
		setToken,
		removeToken,
		products,
		setProducts,
		cart,
		setCart,
		totalPrice,
		setTotalPrice,
	};
}

export default useGlobalProvider;
