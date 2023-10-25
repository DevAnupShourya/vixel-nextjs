import { Switch } from "@nextui-org/react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

// ? Redux
import type { RootState } from '@src/store/redux';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '@src/store/theme/themeSlice';

const ThemeSwitch = () => {
  const theme = useSelector((state: RootState) => state.theme.mode)
  const dispatch = useDispatch()

  return (
    <Switch
      defaultSelected={theme === "dark" ? true : false}
      size="lg"
      color="primary"
      className="text-light-main dark:text-dark-main"
      startContent={<BsFillMoonStarsFill />}
      endContent={<BsFillSunFill />}
      onClick={() => dispatch(toggleTheme())}
    />
  );
};

export default function ThemeSwitcher() {
  return <ThemeSwitch />;
}
