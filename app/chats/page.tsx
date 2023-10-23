import Head from "next/head";

import PageTitle from "@src/components/title/PageTitle";

export default async function ChatsPage() {
  return (
    <>
      <Head>
        <title>Vixel | Chats</title>
      </Head>
      <PageTitle title="chats" key={"chats_page_title"} />
    </>
  );
}
