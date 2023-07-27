import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT_SUCCESS,
} from "./userTypesConstants";

export const userReducer = (
  initialState = {
    message: "",
    email: "",
    isSucesss: false,
  },
  action
) => {
  switch (action.type) {
    /** Login Action */
    case USER_LOGIN_START:
      return {
        ...initialState,
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...initialState,
        message: action.payload.message,
        email: action.payload.email,
        isSucesss: true,
      };

    case USER_LOGIN_FAILED:
      return {
        ...initialState,
        message: action.payload.message,
        isSucesss: false,
      };

    /** Logout Action */
    case USER_LOGOUT_SUCCESS:
      return {
        user: {
          email: "",
        },
      };

    default:
      return initialState;
  }
};
