import {
  ADED_PRODUCTS,
  DELETE_PRODUCTS,
  EDIT_PRODUCTS,
  GET_PRODUCT,
  GET_PRODUCTS,
} from "../types/products";

const defaultValues = {
  data: [],
  item: {},
};

const productsReducer = (state = defaultValues, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, data: action.payload };

    // case GET_PRODUCT:
    //   return { ...state, item: action.payload };

    case ADED_PRODUCTS:
      return { ...state, data: [...state.data, action.payload] };

    case DELETE_PRODUCTS:
      return {
        ...state,
        data: state.data.filter((el) => el.id !== action.payload.id),
      };

    // case EDIT_PRODUCTS:
    //   return {
    //     ...state,
    //     data: state.data.map((el) => {
    //       if (el.id === payload.id) {
    //         return payload.data;
    //       } else {
    //         return el;
    //       }
    //     }),
    //   };

    default:
      return state;
  }
};

export default productsReducer;
