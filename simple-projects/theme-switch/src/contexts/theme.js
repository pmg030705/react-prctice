import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// helps to notify that theme can be accessed everywhere
export const ThemeProvider = ThemeContext.Provider;

//Context passes the variables which are accessible everywhere

export default function useTheme() {
  return useContext(ThemeContext);
}
