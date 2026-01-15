import type { AuthState, User } from "../../types";
import { authenticateUser } from "../../data/dummyData";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
    },
    loginFails: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
      state.user = null;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const { login, loginSuccess, loginFails, logout } = authSlice.actions;


 // Thunk-like  action creator for login

export const performLogin =
  (email: string, password: string) =>
  (dispatch: any) => {
    dispatch(login());
    setTimeout(() => {
      const user = authenticateUser(email, password);
      if (user) {
        dispatch(loginSuccess(user));
      } else {
        dispatch(loginFails("Invalid email or password"));
      }
    }, 500);
  };

export default authSlice.reducer;
