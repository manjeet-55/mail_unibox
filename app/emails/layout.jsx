"use client";
import React from "react";
import Sidebar from "../components/Sidebar";
import { Box } from "@mui/material";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Main from "./Main";
const EmailsPageLayout = ({ children }) => {
  return (
    <Provider store={store}>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1 }}>
          <Main children={children}></Main>
        </Box>
      </Box>
    </Provider>
  );
};

export default EmailsPageLayout;
