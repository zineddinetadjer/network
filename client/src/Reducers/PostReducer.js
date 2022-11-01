import * as actionType from "../constants/actionsTypes";

const postReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case actionType.UPLOAD:
      return { ...state, posts: [action.data, ...state.posts], error: false };
    default:
      return state;
  }
};

export default postReducer;
