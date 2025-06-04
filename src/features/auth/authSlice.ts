import { createSlice } from "@reduxjs/toolkit";
import type { IAuthState, IUser } from "./types";
import { loginAction, loginToken } from "./authAction";

const initialUser: IUser = {
  id: 0,
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  gender: "",
  accessToken: "",
  refreshToken: "",
  image: "",
};

const initialState: IAuthState = {
  user: initialUser,
  isLoading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    // создаем синхронный action
    logoutUser: (state) => {
      // затираем юзера данными из начального состояния
      state.user = initialUser;
    },
  },
  extraReducers: (builder) => {
    builder

      //* Login
      .addCase(loginAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = "";
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.user = initialUser;
        state.isLoading = false;
        state.error = action.payload as string;
      })

      //* Token
      .addCase(loginToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginToken.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = "";
      })
      .addCase(loginToken.rejected, (state, action) => {
        state.isLoading = false;
        state.user = initialUser;
        state.error = action.payload as string;
      });
  },
});

export default authSlice;

//! важно не забыть экспортировать синхронный action
export const { logoutUser } = authSlice.actions;
