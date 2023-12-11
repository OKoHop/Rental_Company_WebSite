import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6572361dd61ba6fcc0148a62.mockapi.io";

export const getBrands = createAsyncThunk(
  "filters/getBrands",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/filters");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
