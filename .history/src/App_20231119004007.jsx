import Navbar from "./components/Navbar";
import "./App.css";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <main className="py-16">
        <div className="productWrapper">
          <Home />
        </div>
      </main>
    </div>
  );
}

export default App;
