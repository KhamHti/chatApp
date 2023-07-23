import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./reducers/userAuthReducer";

const store = configureStore({
  reducer: {
    user: userAuthReducer,
  },
});

export default store;
