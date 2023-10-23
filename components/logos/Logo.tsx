import "./style.scss";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";

export default function Logo() {
  return (
    <Tooltip
      showArrow={true}
      placement="bottom"
      content="Vixel"
      classNames={{
        base: "bg-main-text-main title-3",
        arrow: "bg-main-text-main",
      }}
    >
      <Link href="/" className="text-5xl max-sm:text-3xl text-secondary p-2 ">
        {/* VIXEL */}
        <span
          className="font-tesla"
          // className="font-tesla bg-gradient-to-tr from-purple-700 to-primary"
        >
          X
        </span>
      </Link>
    </Tooltip>
  );
}
