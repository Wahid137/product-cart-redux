import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const Products = () => {
  const products = useSelector((state) => state.products);
  return (
    <div className="productContainer" id="lws-productContainer">
      {}
    </div>
  );
};

export default Products;
