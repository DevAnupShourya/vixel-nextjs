"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Button,
  Divider,
  Link as LinkBtn,
} from "@nextui-org/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithubAlt } from "react-icons/fa";

import Logo from "@src/components/logos/Logo";

// ? Next Auth
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <Card className="w-full max-w-lg mx-auto bg-main-text-default">
      <CardHeader className="flex justify-center mx-auto">
        <Logo />
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="title-3 text-center text-light-main dark:text-dark-main my-3 capitalize">
          Welcome ! Create An Account
        </p>
        <p className="text-base capitalize text-center my-2">
          Powered By Passwordless authentication from
          <LinkBtn
            as={Link}
            href="https://next-auth.js.org/"
            size="sm"
            color="warning"
            isExternal={true}
            className="mx-2"
          >
            nextauth.js
          </LinkBtn>
        </p>
      </CardBody>
      <Divider />
      <CardFooter className="flex flex-col gap-4">
        <Button
          onClick={() => {
            signIn("github", {
              callbackUrl: "/feed",
              redirect: true,
            });
          }}
          type="submit"
          fullWidth
          variant="ghost"
          color="default"
          size="md"
        >
          <FaGithubAlt />
          Create Account With Github
        </Button>
        <Button
          onClick={() => {
            signIn("google", {
              callbackUrl: "/feed",
              redirect: true,
            });
          }}
          type="submit"
          fullWidth
          variant="ghost"
          color="secondary"
          size="md"
        >
          <FcGoogle />
          Create Account With Google
        </Button>
      </CardFooter>
      <Divider />
      <CardFooter className="text-xs font-light justify-center">
        <p>
          Already have an account
          <LinkBtn
            as={Link}
            href="/login"
            size="sm"
            anchorIcon
            color="danger"
            className="mx-2"
          >
            Login
          </LinkBtn>
        </p>
      </CardFooter>
    </Card>
  );
}
