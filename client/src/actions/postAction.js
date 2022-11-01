import { RETREIVING } from "../constants/actionsTypes";

export const getTimelinePosts = (id) => async (dispatch) => {
  try {
    const { data } = await PostApi.getTimelinePosts(id);
    dispatch({ type: RETREIVING, data: data });
  } catch (error) {
    console.log(error);
  }
};
