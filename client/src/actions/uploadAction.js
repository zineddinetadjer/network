import * as UploadApi from "../Api/UploadRequest";
import { UPLOAD } from "../constants/actionsTypes";

export const uploadImage = (data) => async (dispatch) => {
  try {
    await UploadApi.uploadImage(data);
  } catch (error) {
    console.log(error);
  }
};

export const uploadPost = (data) => async (dispatch) => {
  try {
    const newPost = await UploadApi.uploadPost(data);
    dispatch({ type: UPLOAD, data: newPost.data });
  } catch (error) {
    console.log(error);
  }
};
