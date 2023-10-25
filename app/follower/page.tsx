import Head from "next/head";

import PageTitle from "@src/components/title/PageTitle";
import FirstTimeUserOnboardingStatus from "@src/components/UserStatus/newUser";

export default async function FollowerPage() {
  return (
    <>
      <Head>
        <title>Vixel | Followers</title>
      </Head>
      <FirstTimeUserOnboardingStatus />
      <PageTitle title="followers" key={"follow_page_title"} />
    </>
  );
}
