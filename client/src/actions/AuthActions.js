import * as AuthApi from "../Api/AuthRequest";
import { AUTH } from "../constants/actionsTypes";

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

/*
export const logIn = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.logIn(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const signUp = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};*/
