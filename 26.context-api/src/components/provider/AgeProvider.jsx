import { useState } from "react";
import { AgeContext } from "../../contexts/AgeContext";

export default function AgeProvider({ children }) { // 구조 분해 할당을 사용하여 props에서 children을 직접 추출
  const [age, setAge] = useState(20);

  return (
    <AgeContext.Provider value={{ age, setAge }}>
      {children} 
    </AgeContext.Provider>
  );
}
