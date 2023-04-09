import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsReducer";
import basketReducer from "./reducers/basketReducer";

export default configureStore({
  reducer: { products: productsReducer, basket: basketReducer },
});
