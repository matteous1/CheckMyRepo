import { AppState } from '../../models/app';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState: AppState = {
  user: '',
  repo: '',  
  status: 0,
};

export const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setDefaultState: () => initialState,
    setUser: (state: AppState, { payload }: PayloadAction<string>) => {
      state.user = payload;
    },
    setRepo: (state: AppState, { payload }: PayloadAction<string>) => {
      state.repo = payload;
    },
    setStatus: (state: AppState, { payload }: PayloadAction<AppState['status']>) => {
      state.status = payload;
    },
  },
});

export default slice.reducer