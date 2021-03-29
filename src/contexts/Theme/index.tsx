import React, { ReactNode, useCallback, useState } from 'react';

interface IColors {
    primaryColor: string;
    secondaryColor: string;
    thirdColor: string;
    backgroundPrimary: string;
    backgroundSecodary: string;
}

interface IThemeContext {
    colors: IColors;
    setMode: (mode: "light" | "dark") => void;
}

export const ThemeContext = React.createContext<IThemeContext>({} as IThemeContext);


interface IThemeProvider {
    children: ReactNode;
    mode?: "light" | "dark";
}

const light: IColors = {
    primaryColor: "#0b3d5b",
    secondaryColor: "#197fbc",
    thirdColor: "#00a5a8",
    backgroundPrimary: "#cfd5d8",
    backgroundSecodary: "#eeeeee",
};

//adicionar cores para uma futura opção dark mode
const dark: IColors = {
    primaryColor: "#0b3d5b",
    secondaryColor: "#197fbc",
    thirdColor: "#00a5a8",
    backgroundPrimary: "#cfd5d8",
    backgroundSecodary: "#eeeeee",
}

export const ThemeProvider = ({children, mode}: IThemeProvider) => {
    const [colors, setColors] = useState<IColors>(light);
    const [internMode, setMode] = useState<"light" | "dark">(mode ? mode : 'light');

    const switchColors = useCallback( () => {
        switch (internMode) {
            case 'light':
                setColors(light);
                break;
            case 'dark':
                setColors(dark);
                break;
            default:
                throw new Error("Colors mode note exists, please switch between light and dark");
        }
    }, [internMode, setColors]);

    React.useEffect( () => {
        switchColors();
    }, [switchColors]);

    return (
        <ThemeContext.Provider value={{ colors, setMode }}>
            {children}
        </ThemeContext.Provider>
    );
}
