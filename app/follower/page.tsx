import Head from "next/head";

import PageTitle from "@src/components/title/PageTitle";

export default async function FollowerPage() {
  return (
    <>
      <Head>
        <title>Vixel | Followers</title>
      </Head>
      <PageTitle title="followers" key={"follow_page_title"} />
    </>
  );
}
