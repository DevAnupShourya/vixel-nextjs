import Head from "next/head";

import PageTitle from "@src/components/title/PageTitle";

export default async function TreadningPage() {
  return (
    <>
      <Head>
        <title>Vixel | Trending</title>
      </Head>
      <PageTitle title="trending posts" key={"trending_page_title"} />
    </>
  );
}
