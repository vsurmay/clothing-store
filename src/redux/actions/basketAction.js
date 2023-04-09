import { ADED_PRODUCT_BASKET } from "../types/basket";

export const adedProductBasket = (product) => {
  return (dispatch) => {
    dispatch({
      type: ADED_PRODUCT_BASKET,
      payload: product,
    });
  };
};
