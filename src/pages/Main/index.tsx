import { useEffect, useState } from "react";
import api from "../../services/api";
import "./style.css";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../types/produto";

function Main() {
  const [products, setProducts] = useState<Product[]>([]);

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
  }, []);

  return (
    <div className="product">
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Main;
