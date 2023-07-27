import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT_SUCCESS,
} from "./userTypesConstants";

let userAceess = {
  eamil: "test@test.com",
  password: "123456",
};
export const loginAction = (values) => {
  return (dispatch) => {
    dispatch({
      type: USER_LOGIN_START,
    });

    if (
      values.email === userAceess.eamil &&
      values.password === userAceess.password
    ) {
      localStorage.setItem("user", JSON.stringify(values.email));
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: {
          message: "Success login",
          email: values.email,
          isSucesss: true,
        },
      });
    } else {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: {
          message: "The data entered is wrong",
          isSucesss: false,
        },
      });
    }
  };
};

// Logout
export const logoutAction = () => {
  return (dispatch) => {
    localStorage.removeItem("user");

    dispatch({
      type: USER_LOGOUT_SUCCESS,
      payload: {
        message: "Logout",
        isSucesss: false,
      },
    });
  };
};
