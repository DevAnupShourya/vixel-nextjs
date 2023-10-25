"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// ? Redux
import { useDispatch } from "react-redux";
import { showAlert } from "@src/store/alert/alertSlice";

export default function FirstTimeUserOnboardingStatus() {
  const session = useSession();
  const route = useRouter();

  // ? Redux States
  const dispatch = useDispatch();

  const mail = session.data?.user?.email as string;

  React.useEffect(() => {
    const isUserOnboarded = async () => {
      try {
        const response = await fetch(`/api/users`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            email: mail,
          },
        });

        if (response.ok) {
          const userData = await response.json();

          if (userData.isOnboardingComplete === false) {
            dispatch(
              showAlert({
                show: true,
                type: "warning",
                msg: "Kindly Complete Your Onboarding.....",
              })
            );
            route.push("login/onboarding");
          }

        } else {
          console.error(
            "Unable to get User Onboarding Status !!",
            response.text
          );
        }
      } catch (error: any) {
        console.error(
          "Error while getting User Onboarding Status !!",
          error.message
        );
      }
    };

    isUserOnboarded();
  }, [mail, route , dispatch]);

  return false;
}
