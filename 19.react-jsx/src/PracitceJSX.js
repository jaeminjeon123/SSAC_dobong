import React from 'react';

const PracticeJSX = () => {
  
  let a = 10; 
  let b = 5;  
  const name = "jjm"; 
  const animal = "Cat"; 
  const title = "Hello World"; 

  // 조건부 메시지
  const message = 3 + 5 === 8 ? "정답입니다!" : "오답입니다!";
  const comparisonMessage = a > b ? "a가 b보다 큽니다." : "";

  return (
    <div className="app-container">
      <h1>{title}</h1>
      <h2>{message}</h2>
      {comparisonMessage && <h2>{comparisonMessage}</h2>}
      <h2>My pet's name is {name} and it is a {animal}.</h2>
      <input type="text" placeholder="ID" />
      <input type="password" placeholder="PASSWORD" />
    </div>
  );
};

export default PracticeJSX;
