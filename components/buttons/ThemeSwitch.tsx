import React from "react";
import { Switch } from "@nextui-org/react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

// ? Redux
import type { RootState } from "@src/store/redux";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@src/store/theme/themeSlice";

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const themeFromState = useSelector((state: RootState) => state.theme.mode);
  const themeToUseRef = React.useRef<string>("");

  React.useEffect(() => {
    const themeFromLocalStorage = localStorage.getItem("vixel-theme");
    if (!themeFromLocalStorage) {
      themeToUseRef.current = themeFromState;
    } else {
      themeToUseRef.current = themeFromLocalStorage;
    }
  }, [themeFromState]);

  return (
    <Switch
      defaultSelected={themeToUseRef.current === "dark" ? true : false}
      size="lg"
      color="primary"
      className="text-light-main dark:text-dark-main"
      startContent={<BsFillMoonStarsFill />}
      endContent={<BsFillSunFill />}
      onClick={() => {
        dispatch(toggleTheme());
        localStorage.setItem(
          "vixel-theme",
          themeToUseRef.current === "dark" ? "light" : "dark"
        );
      }}
      //
    />
  );
};

export default function ThemeSwitcher() {
  return <ThemeSwitch />;
}
