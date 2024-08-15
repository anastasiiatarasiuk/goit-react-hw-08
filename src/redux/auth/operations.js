import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsApi, setToken, clearToken } from "../../config/contactsApi";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await contactsApi.post("/users/signup", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await contactsApi.post("users/login", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await contactsApi.post("users/logout");
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const refreshUser = createAsyncThunk(
//   "auth/refresh",
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue("Unable to fetch user");
//     }

//     try {
//       setToken(persistedToken);
//       const res = await contactsApi.get("/users/me");
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
