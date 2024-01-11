import { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../types/produto";
import "./style.css";

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: number) => void;
  onRemoveFromCart: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onRemoveFromCart,
}) => {
  const { id, title, price, description, image } = product;
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    onAddToCart(id);
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const handleRemoveFromCart = () => {
    if (quantity > 0) {
      onRemoveFromCart(id);
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img src={image} alt={title} className="product-image" />
      </Link>
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <div className="actions">
          <p className="product-price">R$ {price}</p>
          <div className="cart-actions">
            <button
              className="minus-btn"
              onClick={handleRemoveFromCart}
              disabled={quantity === 0}
            >
              -
            </button>
            <span className="quantity">{quantity}</span>
            <button className="quantity-btn" onClick={handleAddToCart}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
