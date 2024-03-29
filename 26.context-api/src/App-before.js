import { useState } from "react";
import Box from "./components/Box";
import Profile from "./components/Profile";
import { ThemeContext } from "./contexts/ThemeContext";
import {AgeContext} from "./contexts/AgeContext";
import {UserContext} from "./contexts/UserContext"

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(20);

  return (
    <div className="App">
      <p>상태관리1 context API</p>

      <ThemeContext.Provider value={"dark"}>
        <Box />
      </ThemeContext.Provider>

      {/* AgeContext.Provider를 UserContext.Provider 안에 넣고, Profile을 그 안에 위치시킵니다. */}
      <UserContext.Provider value={{ name, setName }}>
        <AgeContext.Provider value={{ age, setAge }}>
          <Profile />
        </AgeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
