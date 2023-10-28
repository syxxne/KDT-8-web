import { useState } from "react";
import SettingContext from "./store/setting-context";

export default function ThemeProvider(props) {
  const [theme, setTheme] = useState("light");

  return (
    <SettingContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </SettingContext.Provider>
  );
}
