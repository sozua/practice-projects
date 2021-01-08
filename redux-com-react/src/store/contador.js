import { createSlice } from "@reduxjs/toolkit";

const slicer = createSlice({
  name: "contador",
  initialState: {
    total: 0,
  },
  reducers: {
    incrementar(state) {
      // Dentro do createSlice já vem com o immer, ou seja, é possível mutar o estado diretamente
      state.total++;

      // Mas, se for preferível, pode ser feito da forma tradicional (com o estado imutável)
      // return { ...state, total: state.total + 1 };
    },
    reduzir(state) {
      state.total--;
    },
  },
});

export const { incrementar, reduzir } = slicer.actions;

export default slicer.reducer;
