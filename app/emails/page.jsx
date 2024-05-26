"use client";
import React from "react";
import Sidebar from "../components/Sidebar";
import Emails from "../components/EmailsView";
import { CssBaseline, Box, Toolbar } from "@mui/material";
import SendEmailModal from "../components/SendEmail";

const GmailPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Emails />
      </Box>
    </Box>
  );
};

export default GmailPage;
