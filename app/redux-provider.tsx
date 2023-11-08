"use client"

import reduxStore from "@src/store/redux";
import { Provider } from "react-redux";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={reduxStore}>
      <h1>Redux Provider</h1>
      {children}
    </Provider>
  );
}
