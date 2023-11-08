import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";

import {RiCheckboxCircleFill} from "react-icons/ri";
import {AiFillCloseCircle} from "react-icons/ai";
import {MdErrorOutline} from "react-icons/md";
import {BiSolidErrorAlt} from "react-icons/bi";
import {BiError} from "react-icons/bi";

// ? Redux
import type { RootState } from "@src/types/index";
import { useSelector, useDispatch } from "react-redux";
import { showAlert } from "@src/store/alert/alertSlice";

import HideNotification from "./HideNotification";

export default function Notification() {
  const notification = useSelector((state: RootState) => state.alert);
  const dispatch = useDispatch();

  if (notification.show === false) {
    return null;
  }

  const hideAlert = () => {
    dispatch(showAlert({ show: false, type: null, msg: null }));
  };

  return (
    <>
      <HideNotification />
      <div
        className={`fixed bottom-2 left-0 max-md:bottom-16 z-50 w-screen px-2 grid max-md:place-items-center transition-all`}
      >
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
                <BiSolidErrorAlt />
              ) : notification.type === "success" ? (
                <RiCheckboxCircleFill />
              ) : notification.type === "warning" ? (
                <MdErrorOutline />
              ) : (
                <BiError />
              )}
            </Button>
            <Button
              type="button"
              color="danger"
              isIconOnly
              variant="light"
              aria-label="Close"
              size="md"
              onClick={hideAlert}
            >
              <AiFillCloseCircle />
            </Button>
          </CardHeader>
          <Divider />
          <CardBody className="text-base capitalize tracking-tighter">
            {notification.msg}.
          </CardBody>
        </Card>
      </div>
    </>
  );
}
