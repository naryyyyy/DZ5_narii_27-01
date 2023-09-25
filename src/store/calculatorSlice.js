import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  num1: '',
  num2: '',
  result: null,
  error: null,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setNum1: (state, action) => {
      state.num1 = action.payload;
    },
    setNum2: (state, action) => {
      state.num2 = action.payload;
    },
    add: (state) => {
      const { num1, num2 } = state;
      if (num1 === '' || num2 === '') {
        state.error = 'Оба поля должны быть заполнены';
      } else {
        state.result = parseFloat(num1) + parseFloat(num2);
        state.error = null;
      }
    },
    subtract: (state) => {
      const { num1, num2 } = state;
      if (num1 === '' || num2 === '') {
        state.error = 'Оба поля должны быть заполнены';
      } else {
        state.result = parseFloat(num1) - parseFloat(num2);
        state.error = null;
      }
    },
    multiply: (state) => {
      const { num1, num2 } = state;
      if (num1 === '' || num2 === '') {
        state.error = 'Оба поля должны быть заполнены';
      } else {
        state.result = parseFloat(num1) * parseFloat(num2);
        state.error = null;
      }
    },
    divide: (state) => {
      const { num1, num2 } = state;
      if (num1 === '' || num2 === '') {
        state.error = 'Оба поля должны быть заполнены';
      } else if (parseFloat(num2) === 0) {
        state.error = 'На ноль делить нельзя';
      } else {
        state.result = parseFloat(num1) / parseFloat(num2);
        state.error = null;
      }
    },
  },
});

export const {
  setNum1,
  setNum2,
  add,
  subtract,
  multiply,
  divide,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
