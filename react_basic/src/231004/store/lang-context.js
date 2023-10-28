import { createContext } from "react";

// 초기값 선언 X, 타입 설정 O (선택 사항)
const MyContext = createContext({
  language: "",
  setLanguage: () => {},
});

export default MyContext;
