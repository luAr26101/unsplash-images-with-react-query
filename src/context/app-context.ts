import { createContext } from "react";
import { type ContextInitialValue } from "../types";

export const AppContext = createContext<ContextInitialValue>({
  isDarkTheme: false,
  toggleDarkTheme: () => {},
});
