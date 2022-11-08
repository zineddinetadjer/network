import * as actionType from "../constants/actionsTypes";

const postReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    // PostShare.jsx
    case actionType.UPLOAD:
      return { ...state, posts: [action.data, ...state.posts], error: false };
    //Posts.jsx
    case actionType.RETREIVING:
      return { ...state, posts: action.data, loading: false, error: false };
    default:
      return state;
  }
};

export default postReducer;
