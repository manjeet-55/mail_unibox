"use client";

import React, { useEffect } from "react";

import { SessionProvider } from "next-auth/react";

import Inbox from "./gmail/page";
import LoginPage from "./components/LoginPage";

export default function Main({ session, children }) {
  const token = session?.accessToken;
  useEffect(() => {
    localStorage.setItem("token", token + "");
  }, [token]);

  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}
