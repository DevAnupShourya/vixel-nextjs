import Head from "next/head";

import Feed from "@src/screens/Private/Feed/Feed";

export default async function FeedPage() {

  return (
    <>
      <Head>
        <title>Vixel | Feed</title>
      </Head>
      <Feed />
    </>
  );
}
