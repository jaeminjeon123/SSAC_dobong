import React, { useState, useEffect, useRef } from 'react';
import '../App.css'; 

function RandomMathQuiz() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState('+');
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const userAnswerRef = useRef(null);

  useEffect(() => {
    generateQuiz();
  }, []);

  const generateQuiz = () => {
    const operations = ['+', '-', '*'];
    const randomNumber1 = Math.floor(Math.random() * 11);
    const randomNumber2 = Math.floor(Math.random() * 11);
    const randomOperator = operations[Math.floor(Math.random() * operations.length)];

    setNum1(randomNumber1);
    setNum2(randomNumber2);
    setOperator(randomOperator);

    calculateCorrectAnswer(randomNumber1, randomNumber2, randomOperator);
  };

  const calculateCorrectAnswer = (num1, num2, operator) => {
    let answer;
    switch (operator) {
      case '+':
        answer = num1 + num2;
        break;
      case '-':
        answer = num1 - num2;
        break;
      case '*':
        answer = num1 * num2;
        break;
      default:
        answer = 0;
    }
    setCorrectAnswer(answer);
  };

  const handleSubmit = () => {
    if (parseInt(userAnswerRef.current.value) === correctAnswer) {
      alert('정답입니다!');
    } else {
      alert('오답입니다. 다시 시도해보세요.');
    }
    userAnswerRef.current.value = ""; 
    userAnswerRef.current.focus(); 
  };

  return (
    <div className="quiz-container">
      <h2>{num1} {operator} {num2}</h2>
      <input
        type="number"
        ref={userAnswerRef}
        className="answer-input"
    
      />
      <br />
      <button onClick={handleSubmit} className="submit-button">정답 제출</button>
    </div>
  );
}

export default RandomMathQuiz;
