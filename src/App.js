import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";
import Overview from "./components/Overview";
import SelectProduct from "./components/SelectProduct";
import ConfirmPurchase from "./components/ConfirmPurchase";
import PurchaseComplete from "./components/PurchaseComplete";
import RoutesContainer from "./components/RoutesContainer";

import "./App.css";

const App = () => (
  <div className="app">
    <ReduxProvider store={store}>
      <Router>
        <RoutesContainer>
          <Switch>
            <Route path="/" exact component={Overview} />
            <Route path="/select-product" component={SelectProduct} />
            <Route path="/confirm-purchase" component={ConfirmPurchase} />
            <Route path="/purchase-complete" component={PurchaseComplete} />
          </Switch>
        </RoutesContainer>
      </Router>
    </ReduxProvider>
  </div>
);

export default App;
