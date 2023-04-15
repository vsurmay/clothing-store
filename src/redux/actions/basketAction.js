import axios from "axios";
import {
  ADED_PRODUCT_BASKET,
  DELETE_PRODUCT_BASKET,
  EDIT_PRODUCT_BASKET,
  GET_PRODUCTS_BASKET,
} from "../types/basket";

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

export const getProductsBasket = () => {
  return (dispatch) => {
    axios.get(URL).then((response) =>
      dispatch({
        type: GET_PRODUCTS_BASKET,
        payload: response.data,
      })
    );
  };
};

export const deletProductBasket = (product) => {
  return (dispatch) => {
    axios.delete(`${URL}/${product.id}`).then(() =>
      dispatch({
        type: DELETE_PRODUCT_BASKET,
        payload: product.id,
      })
    );
  };
};

export const editProductBasket = (product) => {
  return (dispatch) => {
    axios.put(`${URL}/${product.id}`, product).then((response) =>
      dispatch({
        type: EDIT_PRODUCT_BASKET,
        payload: response.data,
      })
    );
  };
};
