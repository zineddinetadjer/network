import * as UserApi from "../Api/UserRequest";
import { UPDATE, FOLLOW, UNFOLLOW } from "../constants/actionsTypes";

export const updateUser = (id, formData) => async (dispatch) => {
  try {
    const { data } = await UserApi.updateUser(id, formData);
    dispatch({ type: UPDATE, data: data });
  } catch (error) {
    console.log("error");
  }
};

export const followUser = (id, data) => async (dispatch) => {
  dispatch({ type: FOLLOW });
  UserApi.followUser(id, data);
};

export const unFollowUser = (id, data) => async (dispatch) => {
  dispatch({ type: UNFOLLOW });
  UserApi.unFollowUser(id, data);
};
