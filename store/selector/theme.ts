import { selector } from "recoil";
import { themeState } from "@src/store/atoms/theme";

export const lengthState = selector({
    key: "themeSelector",
    get: ({ get }) => {
        const theme = get(themeState);
        return theme;
    },
});