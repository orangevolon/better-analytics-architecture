import { useSelector } from "react-redux";

const PurchaseComplete = () => {
  const selectedProduct = useSelector((state) => state.selectedProduct);

  return (
    <>
      <h1>Thank you!</h1>
      <p>You purchased {selectedProduct.name}</p>
    </>
  );
};

export default PurchaseComplete;
