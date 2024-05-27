"use client";
import React from "react";
import Sidebar from "../components/Sidebar";
import { Box } from "@mui/material";
import Main from "./Main";
const EmailsPageLayout = ({ children }) => {
  return (
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box sx={{width:'calc(100vw - 200px)' }}>
          <Main children={children}></Main>
        </Box>
      </Box>
  );
};

export default EmailsPageLayout;
