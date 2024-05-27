"use client";

import Emails from "../components/EmailsView";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOutlookEmails } from "../store/Features/emailsDataSlice";
import axios from "axios";
const EmailsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getQueryParamValue = (key, url) => {
      const queryString = url.split("?")[1];
      if (!queryString) return null;

      const params = new URLSearchParams(queryString);
      return params.get(key);
    };
    const keyName = "access_token";
    const accessToken = getQueryParamValue(keyName, window.location.search);
    const outlookEmail = getQueryParamValue("username", window.location.search);
    
    if (accessToken && outlookEmail) {
      localStorage.setItem("outlookemail", outlookEmail);
      localStorage.setItem(keyName, accessToken);
    }
    if (window.location.search) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
    const storedKey = localStorage.getItem(keyName);
    if (storedKey) {
      axios
        .get(`http://localhost:3000/inbox?access_token=${storedKey}`)
        .then((response) => {
          dispatch(setOutlookEmails(response.data));
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, []);
  return <Emails />;
};

export default EmailsPage;
