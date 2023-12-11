import { configureStore } from "@reduxjs/toolkit";
import { carReducer } from "./addCars/slice";
import { persistedReducer } from "./addToFavorites/slice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
import { filterReducer } from "./filters/slice";

export const store = configureStore({
  reducer: {
    cars: carReducer,
    favorite: persistedReducer,
    filters: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
