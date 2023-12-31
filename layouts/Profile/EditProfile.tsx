import React, { FormEvent } from "react";
import { HiPhoto } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";

import Countries from "@src/utils/Constants/country_list";

import { useSession } from "next-auth/react";

// ? Redux
import { useDispatch } from "react-redux";
import { showAlert } from "@src/store/alert/alertSlice";

import { useRouter } from "next/navigation";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Input, Textarea } from "@nextui-org/input";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/select";
import { Divider } from "@nextui-org/divider";
import { Image as ImageComponent } from "@nextui-org/image";

export default function ProfileEditPage({ onClose, data }) {
  // ? User Session
  const userSession = useSession();

  // ? Redux
  const dispatch = useDispatch();

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
    username: data.username,
    bio: data.bio,
    avatarSrc: data.avatarImgSrc,
    coverSrc: data.coverImgSrc,
    name: data.name,
    country: data.country,
    gender: data.gender,
    email: userSession.data?.user?.email,
  });

  const [submitBtnLoading, setSubmitBtnLoading] = React.useState(false);
  const [usernameErrorMsg, setUsernameErrorMsg] = React.useState<null | string>(
    null
  );
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUsernameErrorMsg(null);
    setSubmitBtnLoading(true);

    const validRegex = /^[\w]+$/;
    if (!validRegex.test(formData.username)) {
      setUsernameErrorMsg(
        "Your username must not contain spaces or special characters."
      );
      return;
    }

    try {
      dispatch(
        showAlert({
          show: true,
          type: "success",
          msg: "Plese Wait ! Updating your account...",
        })
      );

      const response = await fetch("/api/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        dispatch(
          showAlert({
            show: true,
            type: "success",
            msg: "Successfully Updated Your Account",
          })
        );
        onClose();
        router.push(`/${formData.username}`);
      } else if (response.status === 400) {
        setUsernameErrorMsg("This Username is not available");
      } else if (response.status === 401) {
        dispatch(
          showAlert({
            show: true,
            type: "warning",
            msg: "You are Not Authorized to do this action",
          })
        );
      } else {
        dispatch(
          showAlert({
            show: true,
            type: "danger",
            msg: "Error! Check Your Inputs Again..",
          })
        );
      }
    } catch (error: any) {
      dispatch(
        showAlert({
          show: true,
          type: "danger",
          msg: `Error : ${error.message}`,
        })
      );
    }
    setSubmitBtnLoading(false);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Card className="max-w-lg bg-main-text-default">
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
            required
            label="Your Gender"
            fullWidth
            name="gender"
            onChange={(e) => {
              setFormData({ ...formData, gender: e.target.value });
            }}
            value={formData.gender}
            defaultSelectedKeys={[`${formData.gender}`]}
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
            required
            label="Select Your Country"
            fullWidth
            name="country"
            onChange={(e) => {
              setFormData({ ...formData, country: e.target.value });
            }}
            value={formData.country}
            defaultSelectedKeys={[`${formData.country}`]}
          >
            {Countries.map((country) => (
              <SelectItem
                className="bg-main-text-default"
                key={country}
                value={country}
                defaultChecked={formData.country}
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
