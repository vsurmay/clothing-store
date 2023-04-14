import {
  ADED_PRODUCTS,
  DELETE_PRODUCTS,
  EDIT_PRODUCTS,
  GET_PRODUCTS,
} from "../types/products";
import axios from "axios";
import { LOADER } from "../types/loader";

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
    dispatch({
      type: LOADER,
      payload: true,
    });
    axios
      .get(URL)
      .then((response) =>
        dispatch({
          type: GET_PRODUCTS,
          payload: response.data,
        })
      )
      .then(() =>
        dispatch({
          type: LOADER,
          payload: false,
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

export const editProducts = (product, id) => {
  return (dispatch) => {
    axios.put(`${URL}/${id}`, product).then((response) =>
      dispatch({
        type: EDIT_PRODUCTS,
        payload: {
          id,
          data: response.data,
        },
      })
    );
  };
};
