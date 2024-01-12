// ProductDetailPage.tsx

import { useNavigate } from "react-router-dom";
import ProductDetails from "../../components/ProductDetails";
import "./style.css";

function ProductDetailPage() {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		<div className="product-detail-page-container">
			<button className="back-button" onClick={handleGoBack}>
				&#8592; Voltar
			</button>
			<ProductDetails />
		</div>
	);
}

export default ProductDetailPage;
