import SettingContext from "./store/setting-context";

export default function ThemeSelector() {
  // useEffect 적용하여 테마에 따라 css 바꾸기
  // useEffect(() => {
  //   document.body.className = theme;
  // }, [theme]);
  return (
    <SettingContext.Consumer>
      {(value) => {
        return (
          <>
            {value.theme === "light" ? (
              <div>
                <h2>현재 선택된 테마 : {value.theme}</h2>
                <select
                  value={value.theme}
                  onChange={(e) => value.setTheme(e.target.value)}
                >
                  <option value="light">light</option>
                  <option value="dark">dark</option>
                </select>
              </div>
            ) : (
              <div style={{ backgroundColor: "black" }}>
                <h2 style={{ color: "white" }}>
                  현재 선택된 테마 : {value.theme}
                </h2>
                <select
                  value={value.theme}
                  onChange={(e) => value.setTheme(e.target.value)}
                >
                  <option value="light">light</option>
                  <option value="dark">dark</option>
                </select>
              </div>
            )}
          </>
        );
      }}
    </SettingContext.Consumer>
  );
}
