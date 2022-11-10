import * as ChatApi from "../Api/ChatsRequest";
import { CREATE_CHAT } from "../constants/actionsTypes";

export const createChat = (data) => async (dispatch) => {
  try {
    const newChat = await ChatApi.createChat(data);
    console.log(newChat);
    dispatch({ type: CREATE_CHAT, data: newChat.data });
  } catch (error) {
    console.log(error);
  }
};
