"use client";

import { Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import React, { Dispatch, SetStateAction } from "react";
import { useRecoilState } from "recoil";

import CheckboxCircleFillIcon from "remixicon-react/CheckboxCircleFillIcon";
import CloseCircleLineIcon from "remixicon-react/CloseCircleLineIcon";
import ErrorWarningFillIcon from "remixicon-react/ErrorWarningFillIcon";
import ErrorWarningLineIcon from "remixicon-react/ErrorWarningLineIcon";
import InformationLineIcon from "remixicon-react/InformationLineIcon";

import { notificationState } from "@src/store/atoms/notification";

export default function Notification() {
  const [notification , setNotification] = useRecoilState(notificationState);

  if(notification.show === false){
    return null;
  }

  const handleClose = () => {
    setNotification({
      show: false,
      type: null,
      msg: null,
    });
  }

  return (
    <div
    className={`fixed bottom-2 left-0 max-md:bottom-16 z-20 w-screen px-2 grid max-md:place-items-center transition-all`}>
      <Card radius="lg" shadow="lg" className={`bg-all max-w-md`}>
        <CardHeader className="justify-between">
          <Button
            type="button"
            color={
              notification.type === "danger"
                ? "danger"
                : notification.type === "success"
                ? "success"
                : notification.type === "warning"
                ? "warning"
                : "default"
            }
            isIconOnly
            variant="flat"
            className="cursor-default"
            size="md"
          >
            {notification.type === "danger" ? (
              <ErrorWarningLineIcon />
            ) : notification.type === "success" ? (
              <CheckboxCircleFillIcon />
            ) : notification.type === "warning" ? (
              <ErrorWarningFillIcon />
            ) : (
              <InformationLineIcon />
            )}
          </Button>
          <Button
            type="button"
            color="danger"
            isIconOnly
            variant="light"
            aria-label="Close"
            size="md"
            onClick={handleClose}
          >
            <CloseCircleLineIcon />
          </Button>
        </CardHeader>
        <Divider />
        <CardBody className="text-base capitalize tracking-tighter">
          {notification.msg}.
        </CardBody>
      </Card>
    </div>
  );
}
