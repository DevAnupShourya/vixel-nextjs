import React from "react";

// ? Local Components
import { Spinner } from "@nextui-org/spinner";
import Dashboard from "@src/screens/Private/Dashboard/Dashboard";
import Landing from "@src/screens/Public/Landing/Landing";
import Notification from "@src/components/alerts/Notification";

// ? Global Provider
import Providors from "./providors";
import Check from "@src/components/BeClient";
import BeServer from "@src/components/BeServer";

// ? Next Auth
// import { useSession } from "next-auth/react";

import { useAppSelector } from "@src/utils/Hooks/reduxHook";

export default function App({ children }: { children: React.ReactNode }) {
  // ? User Auth Session
  // const userSession = useSession();
  const themeState = useAppSelector((state) => state.theme.mode);

  console.log("*********************");
  console.log("App");
  console.log("*********************");

  return (
    <Providors>
        <section>
          <hr />
          <Check />
          <hr />
          <BeServer />
          <hr />
          <section>
            <h1>Them : {themeState}</h1>
            {/* {children} */}
          </section>
          <hr />
        </section>
    </Providors>
  );
}

/**
 * 
      <Providors>
        <section>
 <section className={themeState}> 
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
          <h1>Hello</h1>
          {/* { children } 
        </section>
      </Providors>
 */
