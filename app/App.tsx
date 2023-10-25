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
import { useSelector, useDispatch } from "react-redux";
import { showAlert } from "@src/store/alert/alertSlice";

// ? Next Auth
import { useSession } from "next-auth/react";

export default function App({ child }: ProvidersProps) {
  // ? User Auth Session
  const userSession = useSession();
  // ? Redux States
  const notification = useSelector((state: RootState) => state.alert);
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);

  React.useEffect(() => {
    // ? Hide The Notification Toast
    if (notification.show) {
      const hideAlertAfterFiveSeconds = setTimeout(() => {
        dispatch(showAlert({ show: false, type: null, msg: null }));
      }, 5000);

      return () => {
        clearTimeout(hideAlertAfterFiveSeconds);
      };
    }
  }, [dispatch, notification.show]);

  return (
    <html lang="en">
      <head>
        <title>Vixel</title>
      </head>
      <body className={theme}>
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

/**
 * ? Not Login
 * /about
 * /blogs
 * /contact
 * /signin
 * /singup
 *
 * ? After Login
 * /chats
 * /feed
 * /follow
 * /new
 * /notifications
 * /settings
 * /trending
 * --------------
 * /about
 * /blogs
 * /contact
 * /signin
 * /singup
 */
