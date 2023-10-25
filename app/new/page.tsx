import Head from "next/head";
import PageTitle from "@src/components/title/PageTitle";
import FirstTimeUserOnboardingStatus from "@src/components/UserStatus/newUser";

export default async function NewpostPage() {
  return (
    <>
      <Head>
        <title>Vixel | New Post</title>
      </Head>
      <FirstTimeUserOnboardingStatus />
      <PageTitle title="new post" key={"new_post_page_title"} />
    </>
  );
}
