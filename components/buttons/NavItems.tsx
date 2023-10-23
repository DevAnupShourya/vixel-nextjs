import { ComponentType } from "react";
import { Link as LinkButton } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";

interface nav_item {
  icon: ComponentType;
  name: string;
  url: string;
  active: boolean;
}

export default function NavItems({ icon, name, url, active }: nav_item) {
  const Icon = icon;
  return (
    <Tooltip content={name} className="bg-all shadow-2xl">
      <LinkButton
        href={url}
        as={Link}
        className={`grid place-items-center p-2 transition-colors rounded-md tracking-widest dark:hover:bg-dark-default hover:bg-light-default ${
          active ? "bg-light-default dark:bg-dark-default shadow-2xl" : null
        }`}
        title={name}
      >
        <h1
          className={`dark:text-dark-default text-light-default ${
            active ? "dark:text-dark-main text-light-main" : null
          }`}
        >
          <Icon />
        </h1>
      </LinkButton>
    </Tooltip>
  );
}
