import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TextbookState {
  group: number;
  page: number;
  isLoading: boolean;
  error: string;
}

const initialState: TextbookState = {
  group: 1,
  page: 1,
  isLoading: false,
  error: '',
};

export const textbookSlice = createSlice({
  name: 'textbook',
  initialState,
  reducers: {
    nextPage(state, action: PayloadAction<number>) {
      state.page += action.payload;
    },
    prevPage(state, action: PayloadAction<number>) {
      state.page -= action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export default textbookSlice.reducer;
