import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  EDIT_STREAM,
  GET_ALL_STREAM,
  GET_STREAM,
  DELETE_STREAM
} from "./types";
import streamApi from "../api/stream";

// export const signIn = userId => {
//   return {
//     type: SIGN_IN,
//     payload: userId
//   };
// };
// export const signOut = () => {
//   return {
//     type: SIGN_OUT
//   };
// };
export const signIn = userId => dispatch =>
  dispatch({
    type: SIGN_IN,
    payload: userId
  });

export const signOut = () => dispatch =>
  dispatch({
    type: SIGN_OUT
  });

export const createStream = data => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const res = await streamApi.post("/streams", { ...data, userId });
    dispatch({
      type: CREATE_STREAM,
      payload: res.data
    });
  };
};

export const getAllStreams = () => {
  return async dispatch => {
    const res = await streamApi.get("/streams");
    dispatch({
      type: GET_ALL_STREAM,
      payload: res.data
    });
  };
};

export const getStream = id => async dispatch => {
  const res = await streamApi.get(`/streams/${id}`);
  dispatch({
    type: GET_STREAM,
    payload: res.data
  });
};

export const editStream = (id, data) => async dispatch => {
  const res = await streamApi.put(`/streams/${id}`, data);
  dispatch({
    type: EDIT_STREAM,
    payload: res.data
  });
};

export const deleteStream = id => async dispatch => {
  const res = await streamApi.delete(`/streams/${id}`);
  dispatch({
    type: DELETE_STREAM,
    payload: res.data
  });
};
