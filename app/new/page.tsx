import Head from "next/head";
import PageTitle from "@src/components/title/PageTitle";

export default async function NewpostPage() {
  return (
    <>
      <Head>
        <title>Vixel | New Post</title>
      </Head>
      <PageTitle title="new post" key={"new_post_page_title"} />
    </>
  );
}
