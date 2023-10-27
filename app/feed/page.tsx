"use client";

import Head from "next/head";

import Feed from "@src/screens/Private/Feed/Feed";
import FirstTimeUserOnboardingStatus from "@src/components/UserStatus/newUser";

import { motion, AnimatePresence } from "framer-motion";

export default function FeedPage() {
  return (
    <>
      <Head>
        <title>Vixel | Feed</title>
      </Head>
      <FirstTimeUserOnboardingStatus />
      {/* <motion.div
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{ duration: 1 }}
        className="w-full h-28 bg-red-300"
      ></motion.div> */}
      <Feed />
    </>
  );
}
