import { useDispatch } from "react-redux";
import { addedCart } from "../redux/carts/actions";
import { removeQuantity } from "../redux/products/actions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { id, img, price, productCategory, productName, quantity } = product;

  const handleAddToCart = (id) => {
    dispatch(addedCart(product));
    dispatch(removeQuantity(id));
  };

  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={img} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{productName}</h4>
        <p className="lws-productCategory">{productCategory}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{quantity}</span>
          </p>
        </div>
        <button
          disabled
          onClick={() => handleAddToCart(id)}
          className="lws-btnAddToCart"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
