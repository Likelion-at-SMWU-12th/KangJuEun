import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
// 나 콘텍스트 사용할래 ~ 선언

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    console.log("테마 변경: ", theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* useTheme 훅을 통해 접근 및 사용가능 한 값들 ^^^^ */}
      {children}
    </ThemeContext.Provider>
  );
};
//프로바이더 컴포넌트

export const useTheme = () => useContext(ThemeContext);
// 커스텀훅
