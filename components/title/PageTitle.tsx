"use client";

import { Divider } from "@nextui-org/react";

export default function PageTitle({title} : {title : string}) {
  return (
    <div className="md:my-4 my-2">
      <h1 className="capitalize text-2xl tracking-widest font-bold text-light-main dark:text-dark-main md:my-1">
        {title}
      </h1>
      <Divider />
    </div>
  );
}
