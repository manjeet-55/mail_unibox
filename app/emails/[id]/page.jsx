"use client";

import React from "react";
import EmailDetailView from "../../components/EmailDetailView";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { selectEmailById } from "../../store/Features/emailsDataSlice";
const EmailDetail = () => {
  const params = useParams();
  const encodedId = params?.id;
  const id = decodeURIComponent(encodedId);
  let email = useSelector((state) => selectEmailById(state, id));
  

  return <EmailDetailView email={email} />;
};

export default EmailDetail;
