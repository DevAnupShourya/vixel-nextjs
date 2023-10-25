import Head from "next/head";

import PageTitle from "@src/components/title/PageTitle";
import FirstTimeUserOnboardingStatus from "@src/components/UserStatus/newUser";

export default async function NotificationsPage() {
  return (
    <>
      <Head>
        <title>Vixel | Notifications</title>
      </Head>
      <FirstTimeUserOnboardingStatus />
      <PageTitle title="notifications" key={"notifications_page_title"} />
    </>
  );
}
