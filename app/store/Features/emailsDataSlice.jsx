import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emails: [],
};

const emailsDataSlice = createSlice({
  name: "emailsData",
  initialState,
  reducers: {
    setEmails(state, action) {
      state.emails = action.payload;
    },
  },
});

export const selectAllEmails = (state) => state.emailsData.emails;
export const selectEmailById = (state, emailId) => {
  // console.log("state", state);
  // console.log("emailId", emailId);
  return state.emailsData.emails.value.find((email) => email.id == emailId);
};

export const { setEmails } = emailsDataSlice.actions;

export default emailsDataSlice.reducer;
