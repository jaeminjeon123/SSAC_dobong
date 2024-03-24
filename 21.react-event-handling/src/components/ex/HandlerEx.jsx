import React, { useState } from 'react';

function Select() {
  const [fruit, setFruit] = useState('apple');
  const [bgColor, setBgColor] = useState('white');
  const [textColor, setTextColor] = useState('black');
  const [inputText, setInputText] = useState(''); 
  const [displayText, setDisplayText] = useState('text'); 

  const fruitImages = {
    apple: './public/apple.jpg', 
    banana: './public/banana.jpg',
    peach: './public/peach.jpg',
    orange: './public/orange.jpg',
  };

  const handleFruitChange = (e) => {
    setFruit(e.target.value);
  };

  const handleBgColorChange = (e) => {
    setBgColor(e.target.value);
  };

  const handleTextColorChange = (e) => {
    setTextColor(e.target.value);
  };

  const handleInputTextChange = (e) => { 
    setInputText(e.target.value);
    setDisplayText(e.target.value);
  };

  return (
    <>
      과일 :
      <select value={fruit} onChange={handleFruitChange}>
      <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="peach">복숭아</option>
        <option value="orange">오렌지</option>
      </select>
      <img src={fruitImages[fruit]} alt={fruit} />
      배경색 :
      <select value={bgColor} onChange={handleBgColorChange}>
      <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
      글자색 :
      <select value={textColor} onChange={handleTextColorChange}>
      <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
      <br />
      <input 
        type="text" 
        placeholder="내용을 입력하세요" 
        value={inputText} 
        onChange={handleInputTextChange} 
      />
      <div style={{ backgroundColor: bgColor, color: textColor }}>
        {displayText} {}
      </div>
    </>
  );
}

export default Select;
