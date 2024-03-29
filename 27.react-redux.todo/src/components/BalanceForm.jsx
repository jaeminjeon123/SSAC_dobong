import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deposit, withdraw } from '../store/store';

export const BalanceForm = () => {
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  const handleDeposit = () => {
    dispatch(deposit(Number(amount) || 0));
    setAmount('');
  };

  const handleWithdraw = () => {
    dispatch(withdraw(Number(amount) || 0));
    setAmount('');
  };

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="금액을 입력하세요"
      />
      <button onClick={handleDeposit}>입금</button>
      <button onClick={handleWithdraw}>출금</button>
    </div>
  );
};
