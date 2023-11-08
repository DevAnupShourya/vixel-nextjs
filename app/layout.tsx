// ? Global Provider
import Providors from "./providors";

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

import reduxStore from "@src/store/redux";
import { Provider as ReduxProvider } from "react-redux";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Vixel</title>
      </head>
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
}
