import Navbar from "./components/Navbar";
import "./App.css";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <div>
      <Navbar />
      <main className="py-16">
        <div className="productWrapper">
          <Products />
          <AddProduct />
        </div>
      </main>
    </div>
  );
}

export default App;
