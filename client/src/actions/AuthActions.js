import * as AuthApi from "../Api/AuthRequest";
import { AUTH, LOGOUT } from "../constants/actionsTypes";

export const logIn = (formData) => async (dispatch) => {
  try {
    const { data } = await AuthApi.logIn(formData);

    dispatch({ type: AUTH, data });
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData) => async (dispatch) => {
  try {
    const { data } = await AuthApi.signUp(formData);

    dispatch({ type: AUTH, data });
  } catch (error) {
    console.log(error);
  }
};

export const logOut = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
