"use client";

import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";

import reduxStore from "@src/store/redux";
import { Provider as ReduxProvider } from "react-redux";

export default function Providors({ children }: { children: React.ReactNode }) {
  console.log("*********************");
  console.log("Providors : Clients");
  console.log("*********************");

  return (
    <SessionProvider>
      <h1>SessionProvider</h1>
      <NextUIProvider>
        <h1>NextUIProvider</h1>
        <ReduxProvider store={reduxStore}>
          <h1>Redux Provider</h1>
          {children}
        </ReduxProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
