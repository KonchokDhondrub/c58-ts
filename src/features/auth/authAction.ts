import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAction = createAsyncThunk(
  "loginAction", //
  async (userData: { username: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", userData);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
