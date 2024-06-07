import { Link } from "react-router-dom";
import { Product } from "../../types/product";
import "./style.css";

interface ProductCardProps {
	product: Product;
	onAddToCart: (productId: number) => void;
	onRemoveFromCart: (productId: number) => void;
	quantity: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
	product,
	onAddToCart,
	onRemoveFromCart,
	quantity,
}) => {
	const { id, title, price, description, image } = product;

	const handleAddToCart = () => {
		onAddToCart(id);
	};
	const handleRemoveFromCart = () => {
		if (quantity > 0) {
			onRemoveFromCart(id);
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
