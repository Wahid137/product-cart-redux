import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/products/actions";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [productInfo, setProductInfo] = useState({});

  const handleAddProduct = (event) => {
    event.preventDefault();
    dispatch(addProduct({ ...productInfo }));
  };

  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newProduct = { ...productInfo };
    newProduct[field] = value;
    setProductInfo(newProduct);
  };

  return (
    <div>
      <div className="htmlFormContainer">
        <h4 className="htmlFormTitle">Add New Product</h4>
        <form
          onSubmit={handleAddProduct}
          className="space-y-4 text-[#534F4F]"
          id="lws-addProducthtmlForm"
        >
          <div className="space-y-2">
            <label htmlFor="lws-inputName">Product Name</label>
            <input
              name="productName"
              className="addProductInput"
              id="lws-inputName"
              type="text"
              required
              onBlur={handleInputBlur}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lws-inputCategory">Category</label>
            <input
              name="productCategory"
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              required
              onBlur={handleInputBlur}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              name="img"
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              required
              onBlur={handleInputBlur}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="ws-inputPrice">Price</label>
              <input
                name="price"
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                required
                onBlur={handleInputBlur}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                name="quantity"
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                required
                onBlur={handleInputBlur}
              />
            </div>
          </div>

          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
