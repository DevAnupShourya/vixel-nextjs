import { selector } from "recoil";
import { notificationState } from "@src/store/atoms/notification";

export const lengthState = selector({
    key: "notificationSelector",
    get: ({ get }) => {
        const theme = get(notificationState);
        return theme;
    },
});