import Head from "next/head";

import PageTitle from "@src/components/title/PageTitle";

export default async function NotificationsPage() {
  return (
    <>
      <Head>
        <title>Vixel | Notifications</title>
      </Head>
      <PageTitle title="notifications" key={"notifications_page_title"} />
    </>
  );
}
