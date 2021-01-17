import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadProducts } from "../api";

const SelectProduct = () => {
  const selectedProduct = useSelector((state) => state.selectedProduct);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const products = loadProducts();

    dispatch({
      type: "products-loaded",
      payload: products,
    });
  }, []);

  const handleProductClick = (product) => {
    dispatch({
      type: "product-selected",
      payload: product,
    });
  };

  const handleBuyNow = () => {
    history.push("/confirm-purchase");
  };

  const handleBack = () => {
    history.goBack();
  };

  return (
    <>
      <h1>Select Product</h1>
      {products && (
        <ul className="product-list">
          {products.map((product) => (
            <li
              key={product.id}
              className={`product ${
                product === selectedProduct ? "selected" : ""
              }`}
              onClick={() => handleProductClick(product)}
            >
              {product.name} <strong>{product.price}$</strong>
            </li>
          ))}
        </ul>
      )}
      <div className="button-container">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleBuyNow} disabled={!selectedProduct}>
          Buy Now
        </button>
      </div>
    </>
  );
};

export default SelectProduct;
