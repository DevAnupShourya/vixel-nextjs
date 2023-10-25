"use client";

import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth/core/types";

import { store } from "@src/store/redux";
import { Provider } from "react-redux";

export default function Providors({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    // ? Next Auth Providor
    <SessionProvider session={session}>
      {/* // ? Redux Providor */}
      <Provider store={store}>{children}
      </Provider>
    </SessionProvider>
  );
}
