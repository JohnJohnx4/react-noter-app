import { USER_AUTH, USER_UNAUTH, AUTH_ERR, CHECK_IF_AUTH, USER_REGISTERING, USER_REGISTERED } from "../actions";


const initialState = {
  authenticated: false,
  registering: false,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTERING:
      return { ...state, registering: true };
    case USER_REGISTERED:
      return { ...state, registering: false };
    case USER_AUTH:
      return { ...state, authenticated: true };
    case USER_UNAUTH:
      return { ...state, authenticated: false };
    case AUTH_ERR:
      return { ...state, error: action.payload };
    case CHECK_IF_AUTH:
      return { ...state };
    default:
      return state;
  }
};
