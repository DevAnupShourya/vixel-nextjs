"use client";
import React from "react";

// ? External Components
import { usePathname } from "next/navigation";
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { Button } from "@nextui-org/button";

import Link from "next/link";

// ? Local Components
import Logo from "@src/components/logos/Logo";
import NavItems from "@src/components/buttons/NavItems";
import ThemeSwitch from "@src/components/buttons/ThemeSwitch";
import { MenuLinks } from "@src/utils/Constants/Links";

export default function Navbar() {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="grid place-items-center w-full h-1/6 py-4">
      <Nav
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="md:w-11/12 w-10/12 rounded-md shadow-2xl bg-main-text-default"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            className="text-light-main dark:text-dark-main"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <Logo />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
            <Logo />
          </NavbarBrand>
          {MenuLinks.map((item) => {
            return (
              <NavbarItem key={item.name}>
                <NavItems
                  icon={item.icon}
                  name={item.name}
                  url={item.href}
                  active={path === item.href ? true : false}
                />
              </NavbarItem>
            );
          })}
        </NavbarContent>

        <NavbarContent justify="end">
          <div className="max-md:hidden">
            <ThemeSwitch />
          </div>
          <Button as={Link} href="/login" variant="shadow" color="secondary">
            Login
          </Button>
        </NavbarContent>

        <NavbarMenu
          className="mx-auto py-10 flex flex-col gap-10 items-center md:w-11/12 w-10/12 rounded-md shadow-2xl bg-main-text-default"
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          {MenuLinks.map((item) => {
            return (
              <NavbarMenuItem key={item.name}>
                <NavItems
                  icon={item.icon}
                  name={item.name}
                  url={item.href}
                  active={path === item.href ? true : false}
                />
              </NavbarMenuItem>
            );
          })}
        </NavbarMenu>
      </Nav>
    </div>
  );
}
