import { createStore } from "redux";

const initialState = {
  products: undefined,
  selectedProduct: undefined,
  purchasedProduct: undefined,
};

const store = createStore((state = initialState, action) => {
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
});

export default store;
