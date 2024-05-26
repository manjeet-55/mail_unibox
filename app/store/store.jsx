import { configureStore } from "@reduxjs/toolkit";
import emailsDataReducer from "./Features/emailsDataSlice";
export const store = configureStore({
  reducer: {
    emailsData: emailsDataReducer,
  },
});
