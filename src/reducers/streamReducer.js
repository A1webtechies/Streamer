import _ from "lodash";
import {
  CREATE_STREAM,
  GET_ALL_STREAM,
  GET_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from "../actions/types";

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_STREAM:
      return {
        ...state,
        ..._.mapKeys(action.payload, "id")
      };
    case GET_STREAM:
      return {
        ...state,
        ..._.mapKeys(action.payload, "id")
      };
    case EDIT_STREAM:
      return {
        ...state,
        ..._.mapKeys(action.payload, "id")
      };
    case CREATE_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case DELETE_STREAM:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};

export default streamReducer;
