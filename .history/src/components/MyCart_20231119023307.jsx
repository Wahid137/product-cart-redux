import BillCard from "./BillCard";
import CartItem from "./CartItem";

const MyCart = () => {
  return   <main class="py-16">
  <div class="container 2xl:px-8 px-2 mx-auto">
    <h2 class="mb-8 text-xl font-bold">Shopping Cart</h2>
    <div class="cartListContainer">
      <div class="space-y-6">
        <CartItem/>

      </div>

      <!-- Bill Details -->
      <div>
      <BillCard/>
      </div>
    </div>
  </div>
</main>;
};

export default MyCart;
