import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import MyCart from "./components/MyCart";
import { useState } from "react";
import { Provider } from "react-redux";

function App() {
  const [isCart, setIsCart] = useState(false);

  const toggleCart = (status) => {
    if (status) {
      setIsCart(true);
    } else {
      setIsCart(false);
    }
  };

  return (
    <Provider>
      <div>
        <Navbar toggle={toggleCart} />
        <main className="py-16">{isCart ? <MyCart /> : <Home />}</main>
      </div>
    </Provider>
  );
}

export default App;
