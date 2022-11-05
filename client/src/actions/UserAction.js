import * as UserApi from "../Api/UserRequest";
import { UPDATE } from "../constants/actionsTypes";

export const updateUser = (id, formData) => async (dispatch) => {
  try {
    const { data } = await UserApi.updateUser(id, formData);
    dispatch({ type: UPDATE, data: data });
  } catch (error) {
    console.log("error");
  }
};
