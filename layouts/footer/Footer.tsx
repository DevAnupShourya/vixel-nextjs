import Link from "next/link";
import { Link as LinkBtn } from "@nextui-org/react";
import { FooterItems } from "@src/utils/Constants/Links";

export default function Footer() {
  return (
    <footer className="md:w-11/12 w-10/12 mx-auto max-md:mt-10 rounded-md shadow-2xl bg-main-text-default">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div className="text-center">
          <h2 className="mb-6 text-sm font-semibold uppercase text-light-main dark:text-dark-main">
            Company
          </h2>
          <ul className="font-medium">
            {FooterItems.CompanyItems.map((item, index) => {
              return (
                <li className="mb-4" key={index}>
                  <LinkBtn
                    className="text-light-default dark:text-dark-default"
                    as={Link}
                    href={item.href}
                    underline="hover"
                  >
                    {item.name}
                  </LinkBtn>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="text-center">
          <h2 className="mb-6 text-sm font-semibold uppercase  text-light-main dark:text-dark-main">
            Help center
          </h2>
          <ul className="font-medium">
            {FooterItems.Help_center.map((item, index) => {
              return (
                <li className="mb-4" key={index}>
                  <LinkBtn
                    className="text-light-default dark:text-dark-default"
                    as={Link}
                    href={item.href}
                    underline="hover"
                    isExternal
                    {...(index < 3 ? { showAnchorIcon: true } : null)}
                  >
                    {item.name}
                  </LinkBtn>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="text-center">
          <h2 className="mb-6 text-sm font-semibold uppercase text-light-main dark:text-dark-main">
            Legal
          </h2>
          <ul className="font-medium">
            {FooterItems.Legal.map((item, index) => {
              return (
                <li className="mb-4" key={index}>
                  <LinkBtn
                    className="text-light-default dark:text-dark-default"
                    as={Link}
                    href={item.href}
                    underline="hover"
                  >
                    {item.name}
                  </LinkBtn>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="text-center">
          <h2 className="mb-6 text-sm font-semibold uppercase text-light-main dark:text-dark-main">
            Download
          </h2>
          <ul className="font-medium">
            {FooterItems.Download.map((item, index) => {
              return (
                <li className="mb-4" key={index}>
                  <LinkBtn
                    className="text-light-default dark:text-dark-default"
                    as={Link}
                    href={item.href}
                    underline="hover"
                    isExternal
                    showAnchorIcon
                  >
                    {item.name}
                  </LinkBtn>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="py-6 border-t-1 text-center">
        <span className="text-sm">
          &copy; 2023{" "}
          <LinkBtn as={Link} href="/">
            Vixel
          </LinkBtn>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
