import React from 'react';
import { useSelector } from 'react-redux';

export const BalanceDisplay = () => {
  const balance = useSelector((state) => state.balance);

  return <h2>현재 잔액: {balance}원</h2>;
};
