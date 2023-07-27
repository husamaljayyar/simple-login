import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./User/userReducer";

const reducers = combineReducers({
  user: userReducer,
});

const userFromLocalStorage = JSON.parse(localStorage.getItem("user")) || "";

const initialState = {
  user: {
    email: userFromLocalStorage,
  },
};

const middlewares = [thunk];

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares)
);

export default store;
