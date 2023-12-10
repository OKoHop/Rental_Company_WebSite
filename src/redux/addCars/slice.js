import { createAction, createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
  page: 1,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const nextpage = createAction("cars/nextpage");

const sliceCars = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars.push(...action.payload);
        state.error = null;
      })
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(nextpage, (state, action) => {
        state.page = state.page + action.payload;
      });
  },
});

export const carReducer = sliceCars.reducer;
