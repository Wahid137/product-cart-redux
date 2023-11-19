import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import MyCart from "./components/MyCart";
import { useState } from "react";

function App() {
  const [isCart, setIsCart] = useState(false);
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
