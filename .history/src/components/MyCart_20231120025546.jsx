import { useSelector } from "react-redux";
import BillCard from "./BillCard";
import CartItem from "./CartItem";

const MyCart = () => {
  const cartItems = useSelector((state) => state.carts);
  console.log(cartItems);
  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">{}</div>
          <div>
            <BillCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyCart;
