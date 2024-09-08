import { createContext, useContext, useState } from "react";

// 1. context 생성
const PartContext = createContext();

export const PartProvider = ({ children }) => {
  const [part, setPart] = useState("");

  // 2. provider 컴포넌트
  return (
    <PartContext.Provider value={{ part, setPart }}>
      {children}
    </PartContext.Provider>
  );
};

// 3. usePart 커스텀 훅
export const usePart = () => useContext(PartContext);
