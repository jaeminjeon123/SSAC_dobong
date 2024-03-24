import React, { useState } from 'react';

function ChangeObj({ objArr }) {
  const [currentIndex, setCurrentIndex] = useState(0); 

 
  const handleChangeObj = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % objArr.length); 
  };

  return (
    <div>
      <h2>이름: {objArr[currentIndex].name}</h2>
      <h2>나이: {objArr[currentIndex].age}</h2>
      <h2>별명: {objArr[currentIndex].nickName}</h2>
      <button onClick={handleChangeObj}>멤버 바꾸기</button>
    </div>
  );
}

export default ChangeObj;
