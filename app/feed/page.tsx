import Head from "next/head";

import Feed from "@src/screens/Private/Feed/Feed";
import FirstTimeUserOnboardingStatus from "@src/components/UserStatus/newUser";

export default async function FeedPage() {
  return (
    <>
      <Head>
        <title>Vixel | Feed</title>
      </Head>
      <FirstTimeUserOnboardingStatus />
      <Feed />
    </>
  );
}
