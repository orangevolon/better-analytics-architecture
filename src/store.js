import { createStore, applyMiddleware } from "redux";
import { subject } from "./analytics";

const initialState = {
  products: undefined,
  selectedProduct: undefined,
  purchasedProduct: undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "products-loaded":
      return {
        ...state,
        products: action.payload,
      };

    case "product-selected":
      return {
        ...state,
        selectedProduct: action.payload,
      };

    case "product-purchased":
      return {
        ...state,
        purchasedProduct: action.payload,
      };

    default:
      return state;
  }
};

const analyticsMiddleware = (store) => (next) => (action) => {
  subject.next({ topic: "store", state: store.getState(), action });
  next(action);
};

const store = createStore(reducer, applyMiddleware(analyticsMiddleware));

export default store;
