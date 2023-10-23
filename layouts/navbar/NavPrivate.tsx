import React from "react";

// ? External Components
import { usePathname } from "next/navigation";
import { Button, Badge } from "@nextui-org/react";
import Notification4LineIcon from "remixicon-react/Notification4LineIcon";
import Link from "next/link";

// ? Local Components
import Logo from "@src/components/logos/Logo";
import ProfileDropdown from "@src/components/profile/ProfileDropdown";
import NavItems from "@src/components/buttons/NavItems";
import { AuthMenuLinks } from "@src/utils/Constants/Links";
import CreatePostButton from "@src/components/buttons/CreatePostButton";
import ThemeSwitcher from "@src/components/buttons/ThemeSwitch";

export default function Navbar() {
  const path = usePathname();
  return (
    <nav className="max-sm:w-full max-md:w-11/12 w-10/12 rounded-md shadow-2xl max-md:px-1 px-5 py-4 f-row bg-main-text-default justify-between">
      <div id="logo" className="h-full">
        <Logo />
      </div>
      <div id="links" className="f-row h-full flex-row gap-5 max-md:hidden">
        {AuthMenuLinks.map((item) => {
          return (
            <NavItems
              key={item.name}
              icon={item.icon}
              name={item.name}
              url={item.href}
              active={path === item.href ? true : false}
            />
          );
        })}
      </div>
      <div id="menu" className="f-row gap-4 h-full">
        <ThemeSwitcher />
        <div className="f-row gap-2">
          <CreatePostButton />
          <Badge content="90" shape="circle" color="secondary" size="sm">
            <Button
              radius="full"
              isIconOnly
              aria-label="more than 99 notifications"
              variant="ghost"
              as={Link}
              href="/notifications"
              color="secondary"
            >
              <Notification4LineIcon />
            </Button>
          </Badge>
        </div>
        <ProfileDropdown/>
      </div>
    </nav>
  );
}
