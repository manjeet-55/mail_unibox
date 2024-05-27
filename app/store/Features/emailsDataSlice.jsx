import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  googleEmails: [],
  outlookEmails: [],
};

const emailsDataSlice = createSlice({
  name: "emailsData",
  initialState,
  reducers: {
    setGoogleEmails(state, action) {
      state.googleEmails = action.payload;
    },
    setOutlookEmails(state, action) {
      state.outlookEmails = action.payload;
    },
  },
});

// export const selectAllEmails = (state) => [
//   ...state.emailsData.googleEmails,
//   ...state.emailsData.outlookEmails,
// ];

export const selectAllEmails = createSelector(
  (state) => state.emailsData.googleEmails,
  (state) => state.emailsData.outlookEmails,
  (googleEmails, outlookEmails) => {
    const allEmails = [...googleEmails, ...outlookEmails];
    return allEmails.sort((a, b) => new Date(b.lastModifiedDateTime) - new Date(a.lastModifiedDateTime));
  }
);
export const selectGoogleEmails = (state) => state.emailsData.googleEmails;
export const selectOutlookEmails = (state) => state.emailsData.outlookEmails;
export const selectEmailById = (state, emailId) => {
  console.log("state", state);
  const allEmails = [...state.emailsData.googleEmails, ...state.emailsData.outlookEmails];
  return allEmails.find((email) => email.id === emailId);
};

export const { setGoogleEmails, setOutlookEmails } = emailsDataSlice.actions;

export default emailsDataSlice.reducer;
