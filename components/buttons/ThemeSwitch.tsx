import React from "react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

// ? Redux
import type { RootState } from "@src/store/redux";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@src/store/theme/themeSlice";
import { Switch } from "@nextui-org/switch";

export default function ThemeSwitcher() {
  const dispatch = useDispatch();
  const themeFromState = useSelector((state: RootState) => state.theme.mode);

  const [themeToUse, setThemeToUse] = React.useState(
    localStorage.getItem("vixel-theme") || themeFromState
  );

  const handleThemeChange = () => {
    dispatch(toggleTheme());
    localStorage.setItem(
      "vixel-theme",
      themeToUse === "dark" ? "light" : "dark"
    );
    setThemeToUse(themeToUse === "dark" ? "light" : "dark");
  };

  return (
    <Switch
      defaultSelected={themeToUse === "dark"}
      size="lg"
      color="primary"
      className="text-light-main dark:text-dark-main"
      startContent={<BsFillMoonStarsFill />}
      endContent={<BsFillSunFill />}
      onClick={handleThemeChange}
    />
  );
}
