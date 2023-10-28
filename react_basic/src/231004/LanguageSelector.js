import SettingContext from "./store/setting-context";

export default function LanguageSelector() {
  return (
    <SettingContext.Consumer>
      {(value) => {
        return (
          <div>
            <h2>현재 선택된 언어 : {value.language}</h2>
            <select
              value={value.language}
              onChange={(e) => value.setLanguage(e.target.value)}
            >
              <option value="Korean">한국어</option>
              <option value="English">영어</option>
            </select>
          </div>
        );
      }}
    </SettingContext.Consumer>
  );
}
