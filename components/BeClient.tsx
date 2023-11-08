"use client";

import { useSession, signIn, signOut } from "next-auth/react"

export default function Check() {
    console.log("*********************");
    console.log("Should Be In Client");
    console.log("*********************");

  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}