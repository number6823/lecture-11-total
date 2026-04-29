import GlobalStyles from "./styles/GlobalStyle.tsx";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./styles/theme.ts";
import GetRouter from "./router/GetRouter.tsx";
import { RouterProvider } from "react-router";
import { ThemeContext, type ThemeType } from "./contexts/theme/ThemeContext.ts";
import { useEffect, useState } from "react";



function App() {
    const [theme, setTheme] = useState<ThemeType>(() => {
        const saveTheme = localStorage.getItem("theme");
        return saveTheme === "dark" ? "dark" : "light";
    });
    const toggleTheme = () => {
       setTheme(prev => prev === "light" ? "dark" : "light");
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
    },[theme]);
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
                <GlobalStyles />
                <RouterProvider router={GetRouter} />
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default App;
