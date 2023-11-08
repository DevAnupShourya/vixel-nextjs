import React from "react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

// ? Redux
import { useAppSelector, useAppDispatch } from "@src/utils/Hooks/reduxHook";
import { toggleTheme } from "@src/store/theme/themeSlice";
import { Switch } from "@nextui-org/switch";

export default function ThemeSwitcher() {
  const dispatch = useAppDispatch();
  const themeFromState = useAppSelector(state => state.theme.mode);

  const handleThemeChange = () => {
    const newTheme = themeFromState === "dark" ? "light" : "dark";
    dispatch(toggleTheme());
  };

  return (
    <Switch
      defaultSelected={themeFromState === 'dark' ? true : false}
      size="lg"
      color="primary"
      className="text-light-main dark:text-dark-main"
      startContent={<BsFillMoonStarsFill />}
      endContent={<BsFillSunFill />}
      onClick={handleThemeChange}
    />
  );
}
