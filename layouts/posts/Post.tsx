import {BsShare, BsSuitHeart} from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineBarChart } from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";

import Link from "next/link";

import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { User } from "@nextui-org/user";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Link as LinkBtn } from "@nextui-org/link";

export default function Post() {
  return (
    <Card className="w-full bg-main-text-default">
      <CardHeader className="f-row justify-between">
        <User
          name="Junior Garcia"
          description={
            <LinkBtn href="/jrgarciadev" size="sm">
              @jrgarciadev
            </LinkBtn>
          }
          avatarProps={{
            src: "https://avatars.githubusercontent.com/u/30373425?v=4",
          }}
        />
        <Dropdown backdrop="opaque">
          <DropdownTrigger>
            <Button variant="light" isIconOnly color="default">
              <CiMenuKebab />
              {/* <RiMenu5Fill /> */}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            variant="bordered"
            aria-label="Post Actions"
            className="bg-all"
          >
            <DropdownItem key="new">Share It</DropdownItem>
            <DropdownItem key="copy">Not Intrested</DropdownItem>
            <DropdownItem key="edit">Report</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
              Follow @jrgarciadev
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </CardHeader>
      <Link href={"#"}>
        <CardBody className=" ">
          Content 1. Short Text + Img 2. Blog / Long Text + Imgs 3. Video (Long
          + Short)
        </CardBody>
      </Link>
      <Divider />
      <CardFooter>
        <ButtonGroup fullWidth radius="none">
          <Button
            variant="light"
            color="danger"
            className="text-light-default dark:text-dark-default hover:text-light-main hover:dark:text-dark-main transition-colors"
          >
            <BsSuitHeart />
          </Button>
          <Button
            variant="light"
            color="success"
            className="text-light-default dark:text-dark-default hover:text-light-main hover:dark:text-dark-main transition-colors"
          >
            <BiCommentDetail />
          </Button>
          <Button
            variant="light"
            color="warning"
            className="text-light-default dark:text-dark-default hover:text-light-main hover:dark:text-dark-main transition-colors"
          >
            <BsShare />
          </Button>
          <Button
            variant="light"
            color="default"
            className="text-light-default dark:text-dark-default hover:text-light-main hover:dark:text-dark-main transition-colors"
          >
            <AiOutlineBarChart />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
