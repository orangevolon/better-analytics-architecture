import { useHistory } from "react-router-dom";

const Overview = () => {
  const history = useHistory();

  const handleShowMeNow = () => {
    history.push("/select-product");
  };

  return (
    <>
      <h1>Overview</h1>
      <p>Checkout our awesome products!</p>
      <button onClick={handleShowMeNow}>Show me now</button>
    </>
  );
};

export default Overview;
