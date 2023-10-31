"use client";

import React from "react";
import { Tooltip } from "@nextui-org/tooltip";
import { Image } from "@nextui-org/image";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Spinner } from "@nextui-org/spinner";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";

import { AiFillEdit } from "react-icons/ai";
import { useRouter, usePathname } from "next/navigation";

import { useSession } from "next-auth/react";

import NotFound from "@src/components/error/NotFound";
import ProfileEditPage from "@src/layouts/Profile/EditProfile";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { username: string };
}) {
  const router = useRouter();
  const pathname = usePathname();

  // ? Edit PRofile Modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [userSearchStatus, setuserSearchStatus] = React.useState<
    null | true | false
  >(null);

  //

  const [data, setData] = React.useState({
    name: "",
    username: params.username,
    posts: "",
    folowers: "",
    following: "",
    bio: "",
    gender: "",
    country: "",
    joining: new Date(),
    coverImgSrc: "",
    avatarImgSrc: "",
    editor: false,
  });
  const userMail = useSession().data?.user?.email;

  React.useEffect(() => {
    const fetchUserData = async () => {
      setuserSearchStatus(null);
      try {
        const response = await fetch(`/api/users`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            username: data.username,
          },
        });

        if (response.ok) {
          setuserSearchStatus(true);
          const userData = await response.json();
          setData({
            name: userData.name,
            username: userData.username,
            posts: userData.posts || "0",
            folowers: userData.followers,
            following: userData.following,
            bio: userData.bio,
            gender: userData.gender,
            country: userData.country,
            joining: userData.createdAt,
            coverImgSrc: userData.coverUrl,
            avatarImgSrc: userData.avatarUrl,
            editor: userMail === userData.email ? true : false,
          });
        } else {
          setuserSearchStatus(false);
          console.error("Unable to get user data!!", response.text);
          return;
        }
      } catch (error: any) {
        console.error("Error while getting user data!!", error.message);
      }
    };

    fetchUserData();
  }, [data.username, userMail]);

  return userSearchStatus === null ? (
    <Spinner
      label="Searching User......."
      color="danger"
      labelColor="danger"
      className="w-full h-full grid place-items-center"
    />
  ) : userSearchStatus === false ? (
    <>
      <NotFound type="User" />
    </>
  ) : (
    <>
      <Card className="bg-main-text-main">
        {/* Background and profile */}
        <CardHeader
          className="relative flex h-56 max-md:h-36 w-full justify-center bg-cover"
          style={{ backgroundImage: `url('${data.coverImgSrc}')` }}
        >
          <Avatar
            size="lg"
            isBordered
            src={data.avatarImgSrc}
            alt={`${data.name}`}
            className="absolute -bottom-12 max-md:-bottom-8 h-[100px] w-[100px] max-md:h-[70px] max-md:w-[70px]"
          />
          {data.editor === true ? (
            <Tooltip
              content="Edit Your Profile"
              className="bg-main-text-default"
            >
              <Button
                isIconOnly
                color="warning"
                variant="flat"
                aria-label="Edit Profile"
                className="absolute -bottom-14 right-5"
                onPress={onOpen}
              >
                <AiFillEdit className="w-2/3 h-auto" />
              </Button>
            </Tooltip>
          ) : null}
        </CardHeader>

        {/* Name and position */}
        <CardBody className="mt-12 flex flex-col items-center">
          <h4 className="text-xl font-bold text-light-main dark:text-dark-main capitalize flex flex-row items-center gap-2">
            {data.name}
            <Tooltip
              content={`I Love My Country ${data.country}`}
              className="bg-def"
            >
              <Image
                width={20}
                height={40}
                alt={data.country}
                src={`https://flagsapi.com/IN/flat/64.png`}
              />
            </Tooltip>
          </h4>
          <h5 className="text-base font-normal text-primary lowercase">
            @{data.username}
          </h5>
        </CardBody>

        {/* Bio and Dat */}
        <CardBody className="text-center w-10/12 mx-auto">
          <p className="text-lg font-normal capitalize text-light-default dark:text-dark-default">
            {data.bio}
          </p>
          <p className="text-lg font-bold capitalize text-light-default dark:text-dark-default">
            Joined on {new Date(data.joining).toDateString()}
          </p>
          <p className="text-lg font-bold capitalize text-light-default dark:text-dark-default">
            From {data.country}
          </p>
          <p className="text-lg font-bold capitalize text-light-default dark:text-dark-default">
            Gender {data.gender}
          </p>
        </CardBody>

        {/* Post followers */}
        <CardFooter className="flex flex-row gap-10 justify-center">
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-2xl font-bold text-light-main  dark:text-dark-main">
              {data.posts}
            </h4>
            <p className="text-sm font-normal text-light-default  dark:text-dark-default">
              Posts
            </p>
          </div>
          <Divider orientation="vertical" className="h-10" />
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-2xl font-bold text-light-main  dark:text-dark-main">
              {data.folowers}
            </h4>
            <p className="text-sm font-normal text-light-default  dark:text-dark-default">
              Followers
            </p>
          </div>
          <Divider orientation="vertical" className="h-10" />
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-2xl font-bold text-light-main  dark:text-dark-main">
              {data.following}
            </h4>
            <p className="text-sm font-normal text-light-default dark:text-dark-default">
              Following
            </p>
          </div>
        </CardFooter>
      </Card>
      <Card className="bg-main-text-main my-5">
        <CardBody>
          <ScrollShadow className="w-full h-full">
            <div className="flex flex-row justify-around items-center w-full">
              <Button
                size="md"
                href="/"
                variant="light"
                fullWidth
                radius="none"
                className={`${
                  pathname === `/${data.username}`
                    ? "border-b-2 border-primary font-bold text-light-main dark:text-dark-main"
                    : "text-light-default dark:text-dark-default"
                } `}
                onClick={() => {
                  router.push(`/${data.username}`, { scroll: false });
                }}
              >
                Posts
              </Button>
              <Button
                size="md"
                href="/"
                variant="light"
                fullWidth
                radius="none"
                className={`${
                  pathname === `/${data.username}/comments`
                    ? "border-b-2 border-primary font-bold text-light-main dark:text-dark-main"
                    : "text-light-default dark:text-dark-default"
                } `}
                onClick={() => {
                  router.push(`/${data.username}/comments`, { scroll: false });
                }}
              >
                Comments
              </Button>
              <Button
                size="md"
                href="/"
                variant="light"
                fullWidth
                radius="none"
                className={`${
                  pathname === `/${data.username}/stories`
                    ? "border-b-2 border-primary font-bold text-light-main dark:text-dark-main"
                    : "text-light-default dark:text-dark-default"
                } `}
                onClick={() => {
                  router.push(`/${data.username}/stories`, { scroll: false });
                }}
              >
                Stories
              </Button>
              <Button
                size="md"
                href="/"
                variant="light"
                fullWidth
                radius="none"
                className={`${
                  pathname === `/${data.username}/likes`
                    ? "border-b-2 border-primary font-bold text-light-main dark:text-dark-main"
                    : "text-light-default dark:text-dark-default"
                } `}
                onClick={() => {
                  router.push(`/${data.username}/likes`, { scroll: false });
                }}
              >
                Likes
              </Button>
              <Button
                size="md"
                href="/"
                variant="light"
                fullWidth
                radius="none"
                className={`${
                  pathname === `/${data.username}/media`
                    ? "border-b-2 border-primary font-bold text-light-main dark:text-dark-main"
                    : "text-light-default dark:text-dark-default"
                } `}
                onClick={() => {
                  router.push(`/${data.username}/media`, { scroll: false });
                }}
              >
                Media
              </Button>
              <Button
                size="md"
                href="/"
                variant="light"
                fullWidth
                radius="none"
                className={`${
                  pathname === `/${data.username}/media`
                    ? "border-b-2 border-primary font-bold text-light-main dark:text-dark-main"
                    : "text-light-default dark:text-dark-default"
                } `}
                onClick={() => {
                  router.push(`/${data.username}/settings`, { scroll: false });
                }}
              >
                Settings
              </Button>
            </div>
          </ScrollShadow>
        </CardBody>
      </Card>
      <section className="mb-5 py-5">{children}</section>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        backdrop="blur"
        className="bg-main-text-main"
        scrollBehavior="inside"
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Profile
                <p className="text-sm mt-1 leading-6 ">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </ModalHeader>
              <ModalBody>
                <ScrollShadow hideScrollBar>
                  <ProfileEditPage onClose={onClose} data={data} />
                </ScrollShadow>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
