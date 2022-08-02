import { AppState } from '../../models/app';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState: AppState = {
  user: 'matteous1',
  repo: 'CheckMyRepo',  
  status: null,
  statusError: '',
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
    setStatus: (state: AppState, { payload }: PayloadAction<'fail' | 'success' | null>) => {
      state.status = payload;
    },
    setStatusError: (state: AppState, { payload }: PayloadAction<string>) => {
      state.statusError = payload;
    },
  },
});

export default slice.reducer;