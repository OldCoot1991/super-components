import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fontSize: parseInt(localStorage.getItem("fontSize") || "16"),
};

export const fontSizeSlice = createSlice({
  name: "text",
  initialState: initialState,
  reducers: {
    incrementFontSize: (state) => {
      state.fontSize += 1;
      localStorage.setItem("fontSize", state.fontSize.toString());
    },
    deIncrementFontSize: (state) => {
      state.fontSize -= 1;
      localStorage.setItem("fontSize", state.fontSize.toString());
    },
  },
});

export const { incrementFontSize, deIncrementFontSize } = fontSizeSlice.actions;

export default fontSizeSlice.reducer;