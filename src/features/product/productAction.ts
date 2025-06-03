import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// создание асинхронного action
export const loadProducts = createAsyncThunk(
  // уникальное имя для action
  "products/loadProducts",
  // действие которое производит action
  async (_, thunkAPI) => {
    // пробуем получить данные
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      return response.data;
      // обрабатываем ошибку если не вышло
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// запрос на продукты с лимитом
export const loadLimitProducts = createAsyncThunk("products/loadLimitProducts", async (limit: string, thunkAPI) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products?limit=${limit}`);
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
