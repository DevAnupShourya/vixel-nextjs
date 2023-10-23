"use client";

import React from "react";
import { ScrollShadow } from "@nextui-org/react";

import Nav from "@src/layouts/navbar/NavPrivate";
import NavMobile from "@src/layouts/navbar/MobileNavPrivate";
import Aside from "@src/layouts/sidebar/Aside";
import Notification from "@src/components/alerts/Notification";

export default function Dashboard({ child }: { child: React.ReactNode }) {
  return (
    <>
      <Notification />
      <section id="dashboard" className={`w-screen h-screen bg-def`}>
        <div className="grid place-items-center w-full h-1/6 max-md:h-[15%] py-2 max-sm:py-0 ">
          <Nav />
        </div>
        <div className="f-row max-sm:w-full max-md:w-11/12 w-10/12 h-5/6 max-md:h-[75%] mx-auto ">
          <aside className="max-md:hidden w-1/3 h-full overflow-y-scroll noBars">
            <Aside />
          </aside>
          <main className="max-md:w-full w-2/3 h-full md:pl-10 max-md:px-2">
            <ScrollShadow hideScrollBar className="w-full h-full">
              {child}
            </ScrollShadow>
          </main>
        </div>
        <div className="md:hidden grid place-items-center w-full h-1/6 max-md:h-[10%] py-2 max-sm:py-0">
          <NavMobile />
        </div>
      </section>
    </>
  );
}
