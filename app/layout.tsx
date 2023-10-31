// ? Global Provider
import Providors from "./providors";
import type { Session } from "next-auth/core/types";

// ? Css
import "@src/styles/globals.css";

// ? Root Component
import App from "./App";

// ? Meta tags
// TODO : Change Title as Page Name
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Vixel : Social Media Platfrom",
  description:
    "Welcome to Vixel, the social media platform for connecting and sharing with friends.",
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <Providors session={session}>
      <App>{children}</App>
    </Providors>
  );
}
