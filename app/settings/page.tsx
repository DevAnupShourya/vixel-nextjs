import Head from "next/head";

import PageTitle from "@src/components/title/PageTitle";
import FirstTimeUserOnboardingStatus from "@src/components/UserStatus/newUser";

export default async function SettingsPage() {
  return (
    <>
      <Head>
        <title>Vixel | Settings</title>
      </Head>
      <FirstTimeUserOnboardingStatus />
      <PageTitle title="settings" key={"settings_page_title"} />
    </>
  );
}
