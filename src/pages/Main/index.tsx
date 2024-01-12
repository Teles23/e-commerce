import { useEffect } from "react";
import api from "../../services/api";
import "./style.css";

import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import useGlobal from "../../hooks/useGlobal";
import { Product } from "../../types/product";

function Main() {
	const { setProducts, products, cart, setCart, setTotalPrice, totalPrice } =
		useGlobal();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await api.get<Product[]>("products");
				setProducts(response.data);
			} catch (err) {
				console.log(err);
			}
		};

		fetchData();
	}, [setProducts]);

	const addToCart = (productId: number) => {
		const productToAdd = products.find((product) => product.id === productId);

		if (productToAdd) {
			const existingItem = cart.find(
				(item) => item.productId === productToAdd.id
			);

			if (existingItem) {
				const updatedCart = cart.map((item) =>
					item.productId === productToAdd.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
				setCart(updatedCart);
			} else {
				setCart([
					...cart,
					{
						productId: productToAdd.id,
						price: productToAdd.price,
						title: productToAdd.title,
						quantity: 1,
					},
				]);
			}
		}
	};

	const removeFromCart = (productId: number) => {
		const updatedCart = cart.map((item) =>
			item.productId === productId
				? { ...item, quantity: item.quantity - 1 }
				: item
		);
		setCart(updatedCart.filter((item) => item.quantity > 0));
	};

	useEffect(() => {
		const totalPrice = cart.reduce((acc, item) => {
			const product = products.find((p) => p.id === item.productId);
			if (product) {
				return acc + product.price * item.quantity;
			}
			return acc;
		}, 0);
		setTotalPrice(totalPrice);
	}, [cart, products, setTotalPrice]);

	return (
		<div>
			<header>
				<div className="header">
					<h1>Tela de Produtos</h1>
					<p>Total: R$ {totalPrice.toFixed(2)}</p>
				</div>
			</header>
			<div className="products-page">
				{products.length > 0 ? (
					<>
						<div className="product-list">
							{products.map((product) => (
								<ProductCard
									key={product.id}
									product={product}
									onAddToCart={addToCart}
									onRemoveFromCart={removeFromCart}
								/>
							))}
						</div>
						<div className="cart-summary">
							<h2>Resumo do Carrinho</h2>
							<p>Total: R$ {totalPrice.toFixed(2)}</p>
							<Link to="/checkout">
								{" "}
								<button>Checkout</button>
							</Link>
						</div>
					</>
				) : (
					<p>Carregando...</p>
				)}
			</div>
		</div>
	);
}

export default Main;
