import { atom } from "recoil";
import { alertInterface } from "@src/types/index";
export const notificationState = atom({
    key: "notificationState",
    default: {
        show: false,
        type: null,
        msg: null,
    } as alertInterface,
});
