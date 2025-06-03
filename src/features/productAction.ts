import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { IProducts } from "../components/products/types";

// создание асинхронного action
export const loadProducts = createAsyncThunk<IProducts[], number, { rejectValue: string }>(
  // уникальное имя для action
  "products/loadProducts",
  // действие которое производит action
  async (limit, thunkAPI) => {
    // пробуем получить данные
    try {
      const response = await axios.get(`https://fakestoreapi.com/products?limit=${limit}`);
      return response.data;
      // обрабатываем ошибку если не вышло
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
