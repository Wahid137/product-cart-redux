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
        <div class="billDetailsCard">
          <h4 class="mt-2 mb-8 text-xl font-bold text-center">Bill Details</h4>
          <div class="space-y-4">
            <!-- sub total -->
            <div class="flex items-center justify-between">
              <p>Sub Total</p>
              <p>BDT <span class="lws-subtotal">8800</span></p>
            </div>
            <!-- Discount -->
            <div class="flex items-center justify-between">
              <p>Discount</p>
              <p>BDT <span class="lws-discount">0</span></p>
            </div>
            <!-- VAT -->
            <div class="flex items-center justify-between">
              <p>VAT</p>
              <p>BDT <span class="vat">0</span></p>
            </div>
            <!-- Total -->
            <div class="flex items-center justify-between pb-4">
              <p class="font-bold">TOTAL</p>
              <p class="font-bold">BDT <span class="lws-total">8800</span></p>
            </div>
            <button class="placeOrderbtn">place order</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>;
};

export default MyCart;
