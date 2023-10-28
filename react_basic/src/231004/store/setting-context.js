import { createContext } from "react";

const SettingContext = createContext({
  language: "",
  setLanguage: () => {},
  theme: "",
  setTheme: () => {},
});

export default SettingContext;
