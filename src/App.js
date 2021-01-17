import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";
import Overview from "./components/Overview";
import SelectProduct from "./components/SelectProduct";
import ConfirmPurchase from "./components/ConfirmPurchase";
import PurchaseComplete from "./components/PurchaseComplete";

import "./App.css";

const App = () => (
  <ReduxProvider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={Overview} />
        <Route path="/select-product" component={SelectProduct} />
        <Route path="/confirm-purchase" component={ConfirmPurchase} />
        <Route path="/purchase-complete" component={PurchaseComplete} />
      </Switch>
    </Router>
  </ReduxProvider>
);

export default App;
