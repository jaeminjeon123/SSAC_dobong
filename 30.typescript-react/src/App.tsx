import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Routes도 임포트해야 합니다.

// 가정: Home, Lecture, Practice 컴포넌트가 정의되어 있어야 합니다.
import Home from './pages/Home'; // 대문자로 시작하는 컴포넌트 이름을 사용해야 합니다.
import Lecture from './pages/Lecture';
import Practice from './pages/Practice';
// import Lecture from './Lecture';
// import Practice from './Practice';

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Routes> {/* 올바르게 Routes 컴포넌트 사용 */}
        <Route path="/" element={<Home/>} /> {/* 대문자로 시작하는 컴포넌트 */}
         <Route path="/lecture" element={<Lecture/>} />
         <Route path="/practice" element={<Practice/>} />  
      </Routes>
    </div>
  );
}

export default App;
