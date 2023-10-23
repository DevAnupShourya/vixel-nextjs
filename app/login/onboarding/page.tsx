"use client";

import React, { FormEvent } from "react";
// ? Comonents
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Divider,
  Input,
  Textarea,
  Button,
  Image as ImageComponent,
  Select,
  SelectItem,
} from "@nextui-org/react";

import { HiPhoto } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";

import Countries from "@src/utils/Constants/country_list";

import { useSession } from "next-auth/react";

// ? Recoil
import { useSetRecoilState } from "recoil";
import { notificationState } from "@src/store/atoms/notification";

import { useRouter } from "next/navigation";

export default function OnboardingPage() {
  // ? Session
  const userSession = useSession();
  // ? Alert
  const setNotification = useSetRecoilState(notificationState);

  const router = useRouter();

  // ? Avatar
  const avatarInput = React.useRef<HTMLInputElement | null>(null);
  function clickAvatarInput() {
    avatarInput.current?.click();
  }
  function handleAvatarChange() {
    if (avatarInput.current?.files?.[0]) {
      const file = avatarInput.current.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        setFormData({ ...formData, avatarSrc: event.target?.result as string });
      };
      reader.onerror = (event) => {
        console.warn(event.target + " Got Error!!!");
      };

      reader.readAsDataURL(file);
    }
  }

  // ? Cover Photo
  const [showCoverPic, setShowCoverPic] = React.useState(false);
  const inputCoverPic = React.useRef<HTMLInputElement | null>(null);
  function handleCoverPicChangeBtn() {
    inputCoverPic.current?.click();
  }
  function handleCoverPicChange() {
    setShowCoverPic(true);
    if (inputCoverPic.current?.files?.[0]) {
      const file = inputCoverPic.current.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        setFormData({ ...formData, coverSrc: event.target?.result as string });
      };
      reader.onerror = (event) => {
        console.warn(event.target + " Got Error!!!");
      };

      reader.readAsDataURL(file);
    }
  }

  const [formData, setFormData] = React.useState({
    username: "",
    bio: "",
    avatarSrc: "",
    coverSrc: "",
    name: "",
    country: "",
    gender: "",
    email: userSession.data?.user?.email,
  });

  const [submitBtnLoading, setSubmitBtnLoading] = React.useState(false);
  const [usernameErrorMsg, setUsernameErrorMsg] = React.useState<null | string>(
    null
  );
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setUsernameErrorMsg(null);
    e.preventDefault();
    setSubmitBtnLoading(true);

    try {
      setNotification({
        show: true,
        type: "success",
        msg: "Trying to create your account...",
      });

      const response = await fetch("/api/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {

        setNotification({
          show: true,
          type: "success",
          msg: 'Successfully Created Your Account , "Kidly Reload The Page Now" ',
        });
          router.push('/feed', undefined, { shallow: false });

      } else if (response.status === 400) {

        setUsernameErrorMsg("This Username is not available");

      } else if (response.status === 401) {

        setNotification({
          show: true,
          type: "warning",
          msg: "You are Not Authorized to do this action",
        });

      } else {

        setNotification({
          show: true,
          type: "danger",
          msg: "Error! Check Your Inputs Again..",
        });
      }

    } catch (error) {

      setNotification({
        show: true,
        type: "danger",
        msg: `Error : ${error}`,
      });
    }
    setSubmitBtnLoading(false);
    
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Card className="max-w-lg bg-main-text-default mx-auto">
        <CardHeader className="block">
          <p className="title-3 leading-7">Profile</p>
          <p className="text-sm mt-1 leading-6 ">
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </CardHeader>
        <Divider />
        <CardBody className="gap-4">
          {/* USERNAME */}
          <Input
            required
            name="username"
            type="text"
            label="Username"
            placeholder="@elonmusk"
            labelPlacement="outside"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-primary text-small">vixel.com/</span>
              </div>
            }
            onChange={(e) => {
              setFormData({ ...formData, username: e.target.value });
            }}
            value={formData.username}
            min={5}
            max={50}
            errorMessage={usernameErrorMsg}
          />

          {/* BIO */}
          <Textarea
            required
            name="bio"
            label="Bio"
            labelPlacement="outside"
            placeholder="I Am A Freak and I Own X."
            className="max-w-md"
            description=" Write a few sentences about yourself."
            onChange={(e) => {
              setFormData({ ...formData, bio: e.target.value });
            }}
            value={formData.bio}
            min={10}
            max={100}
          />

          {/* AVATAR */}
          <div id="AvatarPicker">
            <p>Avatar Pic</p>
            <div className="flex flex-row gap-2 items-center ">
              <Avatar
                showFallback
                src={formData.avatarSrc}
                size="lg"
                fallback={
                  <CgProfile
                    className="animate-pulse w-6 h-6 text-default-500"
                    fill="currentColor"
                  />
                }
              />
              <Button
                type="button"
                variant="bordered"
                onClick={clickAvatarInput}
              >
                Change Avatar
              </Button>
              <input
                type="file"
                ref={avatarInput}
                name="avatarSrc"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleAvatarChange}
              />
            </div>
            <p className="text-sm text-default-400">Less than 1MB</p>
          </div>

          {/* COVER */}
          <div id="CoverPicker" className="flex flex-col gap-2">
            <p>Cover Pic</p>
            <div
              className={`w-full h-48 flex flex-col items-center justify-center ${
                showCoverPic === true ? "border-none" : "border"
              }  border-dashed rounded-md overflow-hidden`}
            >
              <HiPhoto
                className={`${
                  showCoverPic === true ? "hidden" : ""
                } h-12 w-12 text-primary`}
                aria-hidden="true"
              />
              <p
                className={`${
                  showCoverPic === true ? "hidden" : ""
                }  text-sm text-default-400`}
              >
                or drag and drop PNG, JPG, GIF up to 2MB
              </p>
              <ImageComponent
                isZoomed
                isBlurred
                className="w-full h-auto border"
                src={formData.coverSrc}
                alt="Profie Cover Image 1 "
              />
            </div>
            <Button
              type="button"
              variant="bordered"
              onClick={handleCoverPicChangeBtn}
            >
              Change Cover
            </Button>
            <input
              type="file"
              ref={inputCoverPic}
              accept="image/*"
              onChange={handleCoverPicChange}
              style={{ display: "none" }}
              name="coverSrc"
            />
          </div>

          {/* NAME */}
          <Input
            required
            type="text"
            label="Name"
            placeholder="Elon Musk"
            labelPlacement="outside"
            name="name"
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
            value={formData.name}
            min={3}
            max={40}
          />

          {/* GENDER  */}
          <Select
            label="Your Gender"
            fullWidth
            name="gender"
            onChange={(e) => {
              setFormData({ ...formData, gender: e.target.value });
            }}
            value={formData.gender}
          >
            <SelectItem className="bg-def" key="male" value="male">
              Male
            </SelectItem>
            <SelectItem className="bg-def" key="female" value="female">
              Female
            </SelectItem>
            <SelectItem
              className="bg-def"
              key="transgender"
              value="transgender"
            >
              Transgender
            </SelectItem>
          </Select>

          {/* COUNTRY  */}
          <Select
            label="Select Your Country"
            fullWidth
            name="country"
            onChange={(e) => {
              setFormData({ ...formData, country: e.target.value });
            }}
            value={formData.country}
          >
            {Countries.map((country) => (
              <SelectItem
                className="bg-main-text-default"
                key={country}
                value={country}
              >
                {country}
              </SelectItem>
            ))}
          </Select>
        </CardBody>
        <Divider />

        <CardFooter>
          <Button
            fullWidth
            variant="solid"
            color="primary"
            type="submit"
            isLoading={submitBtnLoading}
          >
            Save and Continue
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

/**
 * name
 * username
 * bio
 * avatar
 * coverPic
 * gender
 */
