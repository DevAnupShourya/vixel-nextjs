import Head from "next/head";

import PageTitle from "@src/components/title/PageTitle";
import FirstTimeUserOnboardingStatus from "@src/components/UserStatus/newUser";

export default async function TreadningPage() {
  return (
    <>
      <Head>
        <title>Vixel | Trending</title>
      </Head>
      <FirstTimeUserOnboardingStatus />
      <PageTitle title="trending posts" key={"trending_page_title"} />
    </>
  );
}
