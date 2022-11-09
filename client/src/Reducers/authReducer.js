import * as actionType from "../constants/actionsTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, error: null };

    case actionType.LOGOUT:
      localStorage.clear();
      return {
        ...state,
        authData: null,
        loading: false,
        error: false,
        updateLoading: false,
      };

    case actionType.UPDATE:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, error: false };

    case actionType.FOLLOW:
      return {
        ...state,
        authData: {
          ...state.authData,
          user: {
            ...state.authData.user,
            following: [...state.authData.user.following, action.data],
          },
        },
      };
    case actionType.UNFOLLOW:
      return {
        ...state,
        authData: { ...state.authData },
        user: {
          ...state.authData.user,
          following: [
            ...state.authData.user.following.filter(
              (personId) => personId !== action.data
            ),
          ],
        },
      };
    default:
      return state;
  }
};

export default authReducer;
