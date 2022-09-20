import { createSlice } from "@reduxjs/toolkit";

import { signupUser, loginUser, logoutUser } from "./auth-operations";

const initialState = {
  user: {},
  isLogin: false,
  token: '',
  loading: false,
  error: null,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // SIGNUP REDUCERS:
    [signupUser.pending]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [signupUser.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
      store.error = null;
    },
    [signupUser.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    // LOGIN REDUCERS:
    [loginUser.pending]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [loginUser.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
      store.error = null;
    },
    [loginUser.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    // LOGOUT REDUCERS:
    [logoutUser.pending]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [logoutUser.fulfilled]: (store) => {
      store.loading = false;
      store.user = {};
      store.token = '';
      store.isLogin = false;
      store.error = null;
    },
    [logoutUser.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  }
});

export default AuthSlice.reducer;