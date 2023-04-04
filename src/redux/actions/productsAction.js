import {
  ADED_PRODUCTS,
  DELETE_PRODUCTS,
  GET_PRODUCTS,
} from "../types/products";
import axios from "axios";

const URL = "http://localhost:3004/products";

export const adedProducts = (product) => {
  return (dispatch) => {
    axios.post(URL, product).then((response) =>
      dispatch({
        type: ADED_PRODUCTS,
        payload: response.data,
      })
    );
  };
};

export const getProducts = () => {
  return (dispatch) => {
    axios.get(URL).then((response) =>
      dispatch({
        type: GET_PRODUCTS,
        payload: response.data,
      })
    );
  };
};

export const deleteProducts = (product) => {
  return (dispatch) => {
    axios.delete(`${URL}/${product.id}`).then((response) =>
      dispatch({
        type: DELETE_PRODUCTS,
        payload: product,
      })
    );
  };
};