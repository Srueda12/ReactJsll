import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/auth";

const rootReducer = combineReducers({
  auth: authReducer,

});

export default configureStore({
  reducer: rootReducer,
});

