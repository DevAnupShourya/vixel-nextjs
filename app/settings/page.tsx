import Head from "next/head";

import PageTitle from "@src/components/title/PageTitle";

export default async function SettingsPage() {
  return (
    <>
      <Head>
        <title>Vixel | Settings</title>
      </Head>
      <PageTitle title="settings" key={"settings_page_title"} />
    </>
  );
}
