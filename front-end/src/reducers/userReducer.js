import {
  RECEIVE_USER_DATA,
  REQUEST_USER_DATA,
  FETCHING_FINISH,
  RECEIVE_INTERCEPTOR_DATA,
  LOG_OUT,
} from "../actions/userActions";

import Store from "../stores/userStore";

export const initialState = Store;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USER_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_USER_DATA:
      return {
        ...state,
        isFetching: false,
        token: action.payload.token ? action.payload.token : state.token,
        user: action.payload.user ? action.payload.user : state.user,
      };
    case RECEIVE_INTERCEPTOR_DATA:
      return {
        ...state,
        isFetching: false,
        interceptorId: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        user: {},
        token: null,
      };
    case FETCHING_FINISH:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default userReducer;
