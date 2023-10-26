import React from "react";

export default function DashboardPage({
  params,
}: {
  params: { username: string };
}) {
  return <>/[username]/page.tsx : {params.username}</>;
}
