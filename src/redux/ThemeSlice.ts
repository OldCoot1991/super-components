import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dark: localStorage.getItem("theme") === "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    setDark: (state) => {
      const newDark = !state.dark;
      
      localStorage.setItem("theme", newDark ? "dark" : "light");
      
      state.dark = newDark;
    },
  },
});

export const { setDark } = themeSlice.actions;

export default themeSlice.reducer;
