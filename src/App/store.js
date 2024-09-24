import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "../features/slice";

export const store = configureStore({
    reducer:{
      user: useReducer,
    },
});