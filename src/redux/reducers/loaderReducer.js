import { LOADER } from "../types/loader";

const defaultValue = {
  loader: false,
};

export const loaderReducer = (state = defaultValue, action) => {
  switch (action.type) {
    case LOADER:
      return { ...state, loader: action.payload };

    default:
      return state;
  }
};
