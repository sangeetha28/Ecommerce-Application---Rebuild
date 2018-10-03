import { combineReducers } from "redux";
import register from "./register";
import signin from "./signin";

export const ecomm = combineReducers({
  register,
  signin
});
