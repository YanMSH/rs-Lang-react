import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthed: boolean;
  name?: string;
  userId?: string;
  token?: string;
  refreshToken?: string;
}

const initialState: AuthState = {
  isAuthed: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<AuthState>) {
      // state.isAuthed = action.payload.isAuthed;
      // state.name = action.payload.name;
      // state.userId = action.payload.userId;
      // state.token = action.payload.token;
      // state.refreshToken = action.payload.refreshToken;
      state = action.payload;
    },
    logOut(state, action: PayloadAction<AuthState>) {
      state.isAuthed = false;
      state.name = undefined;
      state.userId = undefined;
      state.token = undefined;
      state.refreshToken = undefined;
    },
  },
});

export default authSlice.reducer;
