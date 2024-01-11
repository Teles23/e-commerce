// Checkout.tsx

import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface CheckoutProps {
  cart: CartItem[];
  totalPrice: number;
}

interface CartItem {
  productId: number;
  quantity: number;
}

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();

  const handleRemoveFromCart = (productId: number) => {};

  return (
    <div>
      <h1>Tela de Checkout</h1>

      <div>
        <h2>Itens no Carrinho:</h2>
      </div>
      {/* <p>Total: R$ {totalPrice.toFixed(2)}</p> */}
      <Link to="/products">Voltar para Produtos</Link>
    </div>
  );
};

export default CheckoutPage;
