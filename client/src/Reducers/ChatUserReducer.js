import * as actiontype from "../constants/actionsTypes";

const chatReducer = (
  state = { chatUsers: [], loading: false, error: false },
  action
) => {
  switch (action.type) {
    case actiontype.SAVE_USER:
      return { ...state, chatUsers: [...state.chatUsers, action.data] };
    default:
      return state;
  }
};
export default chatReducer;
