"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setOutlookEmails } from "../store/Features/emailsDataSlice";
const Main = ({ children }) => {
  // const [emails, setEmails] = useState(null);

  useEffect(() => {
    const getQueryParamValue = (key, url) => {
      const queryString = url.split("?")[1];
      if (!queryString) return null;

      const params = new URLSearchParams(queryString);
      return params.get(key);
    };
    const keyName = "access_token";
    const paramValue = getQueryParamValue(keyName, window.location.search);
    if (paramValue) {
      localStorage.setItem(keyName, paramValue);
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
    if (window.location.search) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setEmails(sampleEmail));
  // }, [dispatch]);
  return <>{children}</>;
};

export default Main;
