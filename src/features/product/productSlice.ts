import { createSlice } from "@reduxjs/toolkit";

import { loadProducts, loadLimitProducts } from "./productAction";
import type { IProductState } from "./types";

// создаем начальное состояние
const initialState: IProductState = {
  products: [],
  isLoading: false,
  error: "",
};

export const productSlice = createSlice({
  // уникальное имя slice
  name: "productSlice",
  // передаем начальное состояние
  initialState,
  // описание синхронных actions
  reducers: {},
  // описание асинхронных actions
  extraReducers: (builder) => {
    builder
      // ожидание данных
      .addCase(loadProducts.pending, (state) => {
        state.isLoading = true;
      })
      // получение данных
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      // данные не получены
      .addCase(loadProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.products = [];
        state.error = action.payload as string;
      })

      // Limited
      .addCase(loadLimitProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadLimitProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(loadLimitProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.products = [];
        state.error = action.payload as string;
      });
  },
});

export default productSlice;
// export const {} = productSlice.actions;
