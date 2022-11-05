import * as actionType from "../constants/actionsTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, error: null };

    case actionType.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, error: null };

    case actionType.UPDATE:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, error: false };

    default:
      return state;
  }
};

export default authReducer;
