import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAction = createAsyncThunk(
  "auth/loginAction", //
  async (userData: { username: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", userData);
      // ! кладем token в local storage
      localStorage.setItem("token", response.data.accessToken);

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginToken = createAsyncThunk(
  "auth/loginToken", //
  async (token: string, thunkAPI) => {
    try {
      // ! делаем get запрос и передаем с ним token
      const response = await axios.get("https://dummyjson.com/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
