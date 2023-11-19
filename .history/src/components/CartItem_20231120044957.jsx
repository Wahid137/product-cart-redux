import { useDispatch } from "react-redux";
import { increaseQuantity, removeCart } from "../redux/carts/actions";
import { addQuantity, removeQuantity } from "../redux/products/actions";

const CartItem = ({ singleCart }) => {
  const dispatch = useDispatch();
  const { id, img, price, productCategory, productName, quantity, productId } =
    singleCart;

  const handleRemove = () => {
    dispatch(removeCart(id));
    dispatch(addQuantity(productId, quantity));
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(id));
    dispatch(removeQuantity(productId));
  };
  const handleDecreaseQuantity = () => {
    dispatch(increaseQuantity(id));
    dispatch(removeQuantity(productId));
  };

  return (
    <div>
      <div className="cartCard">
        <div className="flex items-center col-span-6 space-x-6">
          <img className="lws-cartImage" src={img} alt="product" />

          <div className="space-y-2">
            <h4 className="lws-cartName">{productName}</h4>
            <p className="lws-cartCategory">{productCategory}</p>
            <p>
              BDT <span className="lws-cartPrice">{price}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleIncreaseQuantity}
              className="lws-incrementQuantity"
            >
              <i className="text-lg fa-solid fa-plus"></i>
            </button>
            <span className="lws-cartQuantity">{quantity}</span>
            <button className="lws-decrementQuantity">
              <i className="text-lg fa-solid fa-minus"></i>
            </button>
          </div>

          <p className="text-lg font-bold">
            BDT <span className="lws-calculatedPrice">{quantity * price}</span>
          </p>
        </div>

        <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
          <button
            onClick={() => handleRemove(id)}
            className="lws-removeFromCart"
          >
            <i className="text-lg text-red-400 fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
