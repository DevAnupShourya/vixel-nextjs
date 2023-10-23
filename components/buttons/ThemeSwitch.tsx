"use client";

import { Switch } from "@nextui-org/react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

// ? Recoil
import { useRecoilState } from "recoil";
import { themeState } from "@src/store/atoms/theme";

const ThemeSwitch = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Switch
      defaultSelected={theme === "dark" ? true : false}
      size="lg"
      color="primary"
      className="text-light-main dark:text-dark-main"
      startContent={<BsFillMoonStarsFill />}
      endContent={<BsFillSunFill />}
      onClick={handleThemeChange}
    />
  );
};

export default function ThemeSwitcher() {
  return <ThemeSwitch />;
}
