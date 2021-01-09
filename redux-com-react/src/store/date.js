import { createSlice } from "@reduxjs/toolkit";

const dateReducer = createSlice({
  name: "date",
  initialState: {
    // partida: "",
    // retorno: "",
    formData: {},
  },
  reducers: {
    adicionarDatas(state, action) {
      // state.partida = action.payload.partida;
      // state.retorno = action.payload.retorno;
      state.formData = action.payload;
    },
  },
});

export const { adicionarDatas } = dateReducer.actions;

export default dateReducer.reducer;
