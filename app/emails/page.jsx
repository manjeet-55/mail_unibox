"use client";
import React from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/EmailBox';
import { CssBaseline, Box, Toolbar } from '@mui/material';

const GmailPage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      <Sidebar />
      <Box
        // component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', background:'red' }}
      >
        {/* <Toolbar /> */}
        <MainContent />
      </Box>
    </Box>
  );
};

export default GmailPage;
