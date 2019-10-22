import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form";
import streamReducer from "./streamReducer";
import { combineReducers } from "redux";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
});
