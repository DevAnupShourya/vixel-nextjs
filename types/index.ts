import { ThemeProviderProps } from "next-themes/dist/types";

export interface ProvidersProps {
    child: React.ReactNode;
    themeProps?: ThemeProviderProps;
}

export interface alertInterface {
    show: boolean,
    type: "success" | "danger" | "warning" | null,
    msg: string | null,
};