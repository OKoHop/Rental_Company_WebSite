import { createSlice } from "@reduxjs/toolkit";
import { getBrands } from "./operation";

const initialState = {
  brands: [],
};

const filters = createSlice({
  name: "filters",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBrands.pending)
      .addCase(getBrands.fulfilled, (state, action) => {
        state.brands.push(...action.payload);
      })
      .addCase(getBrands.rejected);
  },
});

export const filterReducer = filters.reducer;
