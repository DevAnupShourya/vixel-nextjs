import React from "react";
import { motion } from "framer-motion";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

import Nav from "@src/layouts/navbar/NavPrivate";
import NavMobile from "@src/layouts/navbar/MobileNavPrivate";
import Aside from "@src/layouts/sidebar/Aside";
import Notification from "@src/components/alerts/Notification";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden">
      <Notification />
      <section id="dashboard" className={`w-screen h-screen bg-def`}>
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="grid place-items-center w-full h-1/6 max-md:h-[15%] py-2 max-sm:py-0 "
        >
          <Nav />
        </motion.div>
        <div className="f-row max-sm:w-full max-md:w-11/12 w-10/12 h-5/6 max-md:h-[75%] mx-auto ">
          <motion.aside
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="max-md:hidden w-1/3 h-full overflow-y-scroll noBars"
          >
            <Aside />
          </motion.aside>
          <main className="max-md:w-full w-2/3 h-full md:pl-10 max-md:px-2">
            <ScrollShadow hideScrollBar className="w-full h-full">
              {children}
            </ScrollShadow>
          </main>
        </div>
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="md:hidden grid place-items-center w-full h-1/6 max-md:h-[10%] py-2 max-sm:py-0"
        >
          <NavMobile />
        </motion.div>
      </section>
    </div>
  );
}
