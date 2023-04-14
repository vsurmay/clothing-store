import axios from "axios";
import { ADED_PRODUCT_BASKET, GET_PRODUCTS_BASKET } from "../types/basket";

const URL = "http://localhost:3004/basket";

export const adedProductBasket = (product) => {
  return (dispatch) => {
    axios.post(URL, product).then((response) =>
      dispatch({
        type: ADED_PRODUCT_BASKET,
        payload: response.data,
      })
    );
  };
};

export const GetProductsBasket = () => {
  return (dispatch) => {
    axios.get(URL).then((response) =>
      dispatch({
        type: GET_PRODUCTS_BASKET,
        payload: response.data,
      })
    );
  };
};
