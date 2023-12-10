import { createAction, createReducer } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  cars: [],
};

export const addToFavorite = createAction("cars/addTo");
export const removeFromFavorite = createAction("cars/removeFrom");
const favorite = createReducer(initialState, (builder) =>
  builder
    .addCase(addToFavorite, (state, action) => {
      state.cars.push(action.payload);
    })
    .addCase(removeFromFavorite, (state, action) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload.id);
    })
);

const persistConfig = {
  key: "root",
  storage,
};

export const persistedReducer = persistReducer(persistConfig, favorite);
