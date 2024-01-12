import React from "react";
import { useNavigate } from "react-router-dom";
import useGlobal from "../../hooks/useGlobal";
import "./style.css";

const CheckoutPage: React.FC = () => {
	const { cart, totalPrice, setCart, setTotalPrice } = useGlobal();
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(-1);
	};

	const handleRemoveItem = (index: number) => {
		const updatedCart = [...cart];
		const removedItem = updatedCart.splice(index, 1)[0];
		const updatedTotalPrice =
			totalPrice - removedItem.quantity * removedItem.price;

		setCart(updatedCart);
		setTotalPrice(updatedTotalPrice);
	};

	return (
		<div>
			<h1>Tela de Checkout</h1>

			<div>
				<h2>Itens no Carrinho:</h2>
				<table>
					<thead>
						<tr>
							<th>Título</th>
							<th>Quantidade</th>
							<th>Preço Unitário</th>
							<th>Total</th>
							<th>Ações</th>
						</tr>
					</thead>
					<tbody>
						{cart.map((item, index) => (
							<tr key={item.productId}>
								<td>{item.title}</td>
								<td>{item.quantity}</td>
								<td>R$ {item.price.toFixed(2)}</td>
								<td>R$ {(item.quantity * item.price).toFixed(2)}</td>
								<td>
									<button onClick={() => handleRemoveItem(index)}>
										Remover
									</button>
								</td>
							</tr>
						))}
					</tbody>
					<tfoot>
						<tr>
							<td colSpan={4}>Total</td>
							<td>R$ {totalPrice.toFixed(2)}</td>
						</tr>
					</tfoot>
				</table>
			</div>

			<button onClick={handleClick}>Voltar para Produtos</button>
		</div>
	);
};

export default CheckoutPage;
