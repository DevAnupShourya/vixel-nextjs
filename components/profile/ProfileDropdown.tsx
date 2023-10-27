import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Avatar,
  User,
  Link as LinkButton,
  Select,
  SelectItem,
  Button,
} from "@nextui-org/react";
import AddCircleLineIcon from "remixicon-react/AddCircleLineIcon";

import Link from "next/link";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

// ? Redux
import { useDispatch } from "react-redux";
import { showAlert } from "@src/store/alert/alertSlice";

export default function ProfileDropdown() {
  // ? Redux States
  const dispatch = useDispatch();
  const route = useRouter();
  const userMail = useSession().data?.user?.email;

  const [userData, setUserData] = React.useState({
    profileImgUrl: "",
    profileUsername: "",
    profileName: "",
  });

  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/users`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            email: userMail as string,
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setUserData({
            profileImgUrl: userData.avatarUrl,
            profileUsername: userData.username,
            profileName: userData.name,
          });
        } else {
          console.error("Unable to get user data!!", response.text);
        }
      } catch (error: any) {
        console.error("Error while getting user data!!", error.message);
      }
    };

    fetchUserData();
  }, [userMail]);

  const handleLogout = async () => {
    const singout = await signOut({ redirect: true });

    if (singout) {
      dispatch(
        showAlert({
          show: true,
          type: "danger",
          msg: "Logout failed! Try After Some Time.",
        })
      );
    } else {
      dispatch(
        showAlert({
          show: true,
          type: "success",
          msg: "Logout Successfuly! Come Back Soon.",
        })
      );
      route.push("/login");
    }
  };
  return (
    <Dropdown
      radius="sm"
      className=""
      classNames={{
        base: "p-0 border-small border-divider bg-light-main dark:bg-dark-main",
      }}
    >
      <DropdownTrigger className="cursor-pointer">
        <Avatar
          showFallback
          radius="full"
          size="lg"
          src={userData.profileImgUrl}
        />
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Custom item styles"
        disabledKeys={["profile"]}
        className="p-3"
        itemClasses={{
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        }}
      >
        <DropdownSection aria-label="Profile & Actions" showDivider>
          <DropdownItem
            isReadOnly
            key="profile"
            className="h-14 gap-2 opacity-100"
          >
            <User
              name={userData.profileName}
              description={`@${userData.profileUsername}`}
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              avatarProps={{
                size: "sm",
                src: userData.profileImgUrl,
              }}
            />
          </DropdownItem>
          <DropdownItem key="dashboard">
            <LinkButton as={Link} href={`/${userData.profileUsername}`} color="foreground">
              Dashboard
            </LinkButton>
          </DropdownItem>
          <DropdownItem key="settings">
            <LinkButton as={Link} href="/settings" color="foreground">
              Settings
            </LinkButton>
          </DropdownItem>
          <DropdownItem
            key="new_post"
            endContent={<AddCircleLineIcon className="text-large" />}
          >
            <LinkButton as={Link} href="/new" color="foreground">
              New Project
            </LinkButton>
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Preferences" showDivider>
          <DropdownItem key="quick_search" shortcut="⌘K">
            <LinkButton as={Link} href="/search" color="foreground">
              Quick search
            </LinkButton>
          </DropdownItem>
          <DropdownItem
            isReadOnly
            key="language"
            className="cursor-default"
            endContent={
              <Select
                label="Language"
                placeholder="Select Language"
                defaultSelectedKeys={["en"]}
                className="z-10 w-1/2 py-1 rounded-md text-tiny text-light-main dark:text-dark-main"
              >
                <SelectItem key="en" value="en">
                  {"EN"}
                </SelectItem>
                <SelectItem key="hin" value="hin">
                  {"HIN"}
                </SelectItem>
              </Select>
            }
          >
            Language
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Help & Feedback">
          <DropdownItem key="help_and_feedback">
            <LinkButton as={Link} href="/contact" color="foreground">
              Help & Feedback
            </LinkButton>
          </DropdownItem>
          <DropdownItem key="logout">
            <Button onClick={handleLogout} color="danger">
              Log Out
            </Button>
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
