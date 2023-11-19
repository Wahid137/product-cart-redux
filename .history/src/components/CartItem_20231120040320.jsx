const CartItem = ({ singleCart }) => {
  return (
    <div>
      <div className="cartCard">
        <div className="flex items-center col-span-6 space-x-6">
          <img className="lws-cartImage" src={cartImg} alt="product" />

          <div className="space-y-2">
            <h4 className="lws-cartName">{cartName}</h4>
            <p className="lws-cartCategory">{cartCategory}</p>
            <p>
              BDT <span className="lws-cartPrice">{cartPrice}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
          <div className="flex items-center space-x-4">
            <button className="lws-incrementQuantity">
              <i className="text-lg fa-solid fa-plus"></i>
            </button>
            <span className="lws-cartQuantity">{cartQuantity}</span>
            <button className="lws-decrementQuantity">
              <i className="text-lg fa-solid fa-minus"></i>
            </button>
          </div>

          <p className="text-lg font-bold">
            BDT <span className="lws-calculatedPrice">{calculatedPrice}</span>
          </p>
        </div>

        <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
          <button className="lws-removeFromCart">
            <i className="text-lg text-red-400 fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
