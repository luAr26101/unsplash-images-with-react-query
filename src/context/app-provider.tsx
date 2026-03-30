import { useState } from "react";
import { AppContext } from "./app-context";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    const body = document.body;
    body.classList.toggle("dark-theme", newDarkTheme);
    console.log(body);
  };
  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
};
