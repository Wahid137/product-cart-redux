import AddProduct from "./AddProduct";
import Products from "./Products";

const Home = () => {
  return (
    <div className="productWrapper">
      <Products />
      <AddProduct />
    </div>
  );
};

export default Home;
