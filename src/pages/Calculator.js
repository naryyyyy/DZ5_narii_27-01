import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setNum1,
  setNum2,
  add,
  subtract,
  multiply,
  divide,
} from '../store/calculatorSlice';

function Calculator() {
  const dispatch = useDispatch();
  const { num1, num2, result, error } = useSelector((state) => state.calculator);

  const handleNum1Change = (e) => {
    dispatch(setNum1(e.target.value));
  };

  const handleNum2Change = (e) => {
    dispatch(setNum2(e.target.value));
  };

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={handleNum1Change}
        placeholder="Введите число 1"
      />
      <input
        type="number"
        value={num2}
        onChange={handleNum2Change}
        placeholder="Введите число 2"
      />
      <button onClick={() => dispatch(add())}>+</button>
      <button onClick={() => dispatch(subtract())}>-</button>
      <button onClick={() => dispatch(multiply())}>*</button>
      <button onClick={() => dispatch(divide())}>/</button>
      {error && <p>{error}</p>}
      {result !== null && <p>Результат: {result}</p>}
    </div>
  );
}

export default Calculator;
