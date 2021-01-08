import { createSlice } from "@reduxjs/toolkit";

const slicer = createSlice({
  name: "modal",
  initialState: false,
  reducers: {
    openModal() {
      return true;
    },
    closeModal() {
      return false;
    },
    toggleModal(state) {
      return !state;
    },
  },
});

export const { openModal, closeModal, toggleModal } = slicer.actions;
export default slicer.reducer;
