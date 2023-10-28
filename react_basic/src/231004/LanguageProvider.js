import { useState } from "react";
import SettingContext from "./store/setting-context";

export default function LanguageProvider(props) {
  const [language, setLanguage] = useState("Korean");

  return (
    <SettingContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </SettingContext.Provider>
  );
}
