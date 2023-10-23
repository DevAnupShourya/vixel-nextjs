"use client";

import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth/core/types";
import { RecoilRoot } from "recoil";

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
      {/* // ? Recoil Providor */}
      <RecoilRoot>{children}</RecoilRoot>
    </SessionProvider>
  );
}
