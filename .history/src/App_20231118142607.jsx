import Navbar from "./components/Navbar";
import "./App.css";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <Navbar />
      <main className="py-16">
        <Products />
      </main>
    </div>
  );
}

export default App;
