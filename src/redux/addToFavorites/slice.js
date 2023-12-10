import { createAction, createReducer } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  cars: [],
};

// const favoriteSlice = createSlice({
//   name: "favorite",
//   initialState,
//   reducer: {
//     addToFavorite: (state, action) => {
//       state.favorites.push(action.payload);
//     },
//     removeFromFavorite: (state, action) => {
//       state.favorites.filter((car) => car.id !== action.payload);
//     },
//   },
// });
export const addToFavorite = createAction("cars/addTo");
export const removeFromFavorite = createAction("cars/removeFrom");
const favorite = createReducer(initialState, (builder) =>
  builder
    .addCase(addToFavorite, (state, action) => {
      state.cars.push(action.payload);
    })
    .addCase(removeFromFavorite, (state, action) => {
      console.log(action.payload.id);
      state.cars = state.cars.filter((car) => car.id !== action.payload.id);
    })
);

// const favoriteReducer = favoriteSlice.reducer;

const persistConfig = {
  key: "root",
  storage,
};

export const persistedReducer = persistReducer(persistConfig, favorite);

// export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
