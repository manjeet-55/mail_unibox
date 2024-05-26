"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setEmails } from "../store/Features/emailsDataSlice";
import { sampleEmail } from "../components/EmailsView/sampleData";
const Main = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setEmails(sampleEmail));
  }, [dispatch]);
  return <>{children}</>;
};

export default Main;
