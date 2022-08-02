import { AppState } from '../../models/app';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState: AppState = {
  user: '',
  repo: '',  
};

export const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser: (state: AppState, { payload }: PayloadAction<string>) => {
      state.user = payload;
    },
    setRepo: (state: AppState, { payload }: PayloadAction<string>) => {
      state.repo = payload;
    },
  },
});

export default slice.reducer;