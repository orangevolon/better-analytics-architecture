import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const ConfirmPurchase = () => {
  const selectedProduct = useSelector((state) => state.selectedProduct);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleConfirm = () => {
    dispatch({
      type: "product-purchased",
      payload: selectedProduct,
    });

    history.push("/purchase-complete");
  };

  const handleBack = () => {
    history.goBack();
  };

  return (
    <>
      <h1>Confirm Purchase</h1>
      <p>Selected Product: <strong>{selectedProduct.name}</strong></p>
      <div className="button-container">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleConfirm}>Confirm</button>
      </div>
    </>
  );
};

export default ConfirmPurchase;
