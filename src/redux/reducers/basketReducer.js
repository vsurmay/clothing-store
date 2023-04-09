import {
  GET_PRODUCTS_BASKET,
  GET_PRODUCT_BASKET,
  ADED_PRODUCT_BASKET,
  EDIT_PRODUCT_BASKET,
  DELETE_PRODUCT_BASKET,
} from "../types/basket";

const defaultValues = {
  data: [],
  item: {},
};

const basketReducer = (state = defaultValues, action) => {
  switch (action.type) {
    case GET_PRODUCTS_BASKET:
      return { ...state, data: action.payload };

    // case GET_PRODUCT_BASKET:
    //   return { ...state, item: action.payload };

    case ADED_PRODUCT_BASKET:
      return { ...state, data: [...state.data, action.payload] };

    // case EDIT_PRODUCT_BASKET:
    //   return {
    //     ...state,
    //     data: state.data.map((product) => {
    //       if (product.id === payload.id) {
    //         return payload.data;
    //       } else {
    //         return product;
    //       }
    //     }),
    //   };

    // case DELETE_PRODUCT_BASKET:
    //   return {
    //     ...state,
    //     data: state.data.filter((product) => product.id !== payload.id),
    //   };
    default:
      return state;
  }
};

export default basketReducer;
