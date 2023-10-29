"use client";
import React from "react";

// ? External Packages
import { NextUIProvider } from "@nextui-org/react";

// ? Local Components
import Dashboard from "@src/screens/Private/Dashboard/Dashboard";
import Landing from "@src/screens/Public/Landing/Landing";
import { Spinner } from "@nextui-org/react";
import { type ProvidersProps } from "@src/types/index";

import Notification from "@src/components/alerts/Notification";

// ? Redux
import type { RootState } from "@src/store/redux";
import { useSelector } from "react-redux";

// ? Next Auth
import { useSession } from "next-auth/react";

export default function App({ child }: ProvidersProps) {
  // ? User Auth Session
  const userSession = useSession();
  // ? Redux States
  const themeFromState = useSelector((state: RootState) => state.theme.mode);
  const [themeToUse, setThemeToUse] = React.useState<undefined | string>(
    undefined
  );

  React.useEffect(() => {
    // ? Getting Theme Value after Page Loaded to Get localstorage API
    setThemeToUse(localStorage.getItem("vixel-theme") || themeFromState);
  }, [themeFromState]);

  return (
    <html lang="en">
      <head>
        <title>Vixel</title>
      </head>
      <body className={themeToUse}>
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
            <Landing child={child} />
          ) : (
            <Dashboard child={child} />
          )}
        </NextUIProvider>
      </body>
    </html>
  );
}
