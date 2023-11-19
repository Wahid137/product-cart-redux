import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import MyCart from "./components/MyCart";

function App() {
  return (
    <div>
      <Navbar />
      <main className="py-16">
        <MyCart />
      </main>
    </div>
  );
}

export default App;
