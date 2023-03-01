import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./authenticationReducer";

const store = configureStore({ reducer: authenticationReducer });
export default store;

