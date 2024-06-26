import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import "./style.css";

const ProductDetails: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [product, setProduct] = useState<any>(null);

	useEffect(() => {
		const fetchProductDetails = async () => {
			try {
				const response = await api.get(`/products/${id}`);
				setProduct(response.data);
			} catch (error) {
				console.error("Error :", error);
			}
		};

		fetchProductDetails();
	}, [id]);

	return (
		<div className="product-details-container">
			{product ? (
				<>
					<img
						src={product.image}
						alt={product.title}
						className="product-image-detail"
					/>
					<h2 className="product-title-detail">{product.title}</h2>
					<p className="product-description-detail">{product.description}</p>
					<p className="product-price-detail">Valor: R$ {product.price}</p>
					<p className="product-rating">Avaliação: {product.rating.rate}</p>
				</>
			) : (
				<p>Carregando...</p>
			)}
		</div>
	);
};

export default ProductDetails;
