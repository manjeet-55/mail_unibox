"use client";

import React, { useEffect } from "react";

import { SessionProvider } from "next-auth/react";

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
