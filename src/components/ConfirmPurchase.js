import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const ConfirmPurchase = () => {
  const selectedProduct = useSelector((state) => state.selectedProduct);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleConfirm = () => {
    dispatch({
      type: "purchase-confirmed",
    });

    history.push("/purchase-complete");
  };

  const handleBack = () => {
    history.goBack();
  };

  return (
    <>
      <h1>Confirm Purchase</h1>
      <p>Selected Product: {selectedProduct.name}</p>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleConfirm}>Confirm</button>
    </>
  );
};

export default ConfirmPurchase;
