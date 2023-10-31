"use client";
import React from "react";

// ? External Packages
import { NextUIProvider } from "@nextui-org/react";

// ? Local Components
import { Spinner } from "@nextui-org/spinner";
import Dashboard from "@src/screens/Private/Dashboard/Dashboard";
import Landing from "@src/screens/Public/Landing/Landing";
import Notification from "@src/components/alerts/Notification";

// ? Redux
import type { RootState } from "@src/store/redux";
import { useSelector } from "react-redux";

// ? Next Auth
import { useSession } from "next-auth/react";

export default function App({ children }: { children: React.ReactNode }) {
  // ? User Auth Session
  const userSession = useSession();
  // ? Redux States
  const themeFromState = useSelector((state: RootState) => state.theme.mode);

  return (
    <html lang="en">
      <head>
        <title>Vixel</title>
      </head>
      <body className={themeFromState}>
        {/* // ? Next UI Providor */}
        <NextUIProvider>
          <Notification />
          {userSession.status === "loading" ? (
            <Spinner
              label="Loading Plese Wait"
              color="primary"
              labelColor="primary"
              className="w-screen h-screen"
            />
          ) : userSession.status === "unauthenticated" ? (
            <Landing>{children}</Landing>
          ) : (
            <Dashboard>{children}</Dashboard>
          )}
        </NextUIProvider>
      </body>
    </html>
  );
}
