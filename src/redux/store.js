import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsReducer";
import basketReducer from "./reducers/basketReducer";
import { loaderReducer } from "./reducers/loaderReducer";

export default configureStore({
  reducer: {
    products: productsReducer,
    basket: basketReducer,
    loader: loaderReducer,
  },
});
