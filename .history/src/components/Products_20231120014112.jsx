import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const Products = () => {
  const products = useSelector((state) => state.products);
  const productsNumber = products.length;
  return (
    <div className="productContainer" id="lws-productContainer">
      {productsNumber}
    </div>
  );
};

export default Products;
