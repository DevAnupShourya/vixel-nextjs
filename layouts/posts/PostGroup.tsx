import React from "react";

export default function PostGroup({ children }: { children: React.ReactNode }) {
  return <section className="flex flex-col justify-center gap-4">{children}</section>;
}
