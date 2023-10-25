import Head from "next/head";

import PageTitle from "@src/components/title/PageTitle";
import FirstTimeUserOnboardingStatus from "@src/components/UserStatus/newUser";

export default async function ChatsPage() {
  return (
    <>
      <Head>
        <title>Vixel | Chats</title>
      </Head>
      <FirstTimeUserOnboardingStatus />
      <PageTitle title="chats" key={"chats_page_title"} />
    </>
  );
}
