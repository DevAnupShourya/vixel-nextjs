"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link as LinkBtn,
  Button,
  ButtonGroup,
  User,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import Heart3LineIcon from "remixicon-react/Heart3LineIcon";
import Chat1LineIcon from "remixicon-react/Chat1LineIcon";
import ShareBoxFillIcon from "remixicon-react/ShareLineIcon";
import Menu5LineIcon from "remixicon-react/Menu5LineIcon";
import BarChart2LineIcon from "remixicon-react/BarChart2LineIcon";
import Link from "next/link";
import { motion } from "framer-motion";

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
              <Menu5LineIcon />
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
            <Heart3LineIcon />
          </Button>
          <Button
            variant="light"
            color="success"
            className="text-light-default dark:text-dark-default hover:text-light-main hover:dark:text-dark-main transition-colors"
          >
            <Chat1LineIcon />
          </Button>
          <Button
            variant="light"
            color="warning"
            className="text-light-default dark:text-dark-default hover:text-light-main hover:dark:text-dark-main transition-colors"
          >
            <ShareBoxFillIcon />
          </Button>
          <Button
            variant="light"
            color="default"
            className="text-light-default dark:text-dark-default hover:text-light-main hover:dark:text-dark-main transition-colors"
          >
            <BarChart2LineIcon />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
