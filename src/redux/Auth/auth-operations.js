import { createAsyncThunk } from "@reduxjs/toolkit";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import { Alert } from "@mui/material";

import * as api from "../api";

export const signupUser = createAsyncThunk(
  'auth/signup',
  async (data, {rejectWithValue}) => {
    try {
      const result = await api.signup(data);
      toast(<Alert severity="success">You've signed up successfully!</Alert>, {containerId: 'login'});
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = { status, message: data.keyValue.email };
      toast(<Alert severity="error">Email {error.message} is already in use!</Alert>, {containerId: 'reg'});
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (data, {rejectWithValue}) => {
    try {
      const result = await api.login(data);
      toast(<Alert severity="success">You logged in successfully!</Alert>, {containerId: 'login'});
      return result;
    } catch ({ response }) {
      const { status } = response;
      const error = { status };
      toast(<Alert severity="error">Invalid email or password! Please Try Again.</Alert>, {containerId: 'login'});
      return rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, {rejectWithValue}) => {
    try {
      const result = await api.logout();
      return result;
    } catch ({ response }) {
      const { status } = response;
      const error = { status };
      return rejectWithValue(error);
    }
  }
);

export const currentUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.getCurrent(auth.token);
      return result;
    } catch ({ response }) {
      const { status } = response;
      const error = { status };
      return rejectWithValue(error);
    }
  }
);