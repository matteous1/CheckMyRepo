import { AppState } from '../../models/app';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState: AppState = {
  user: '',
  repo: '',  
  status: null,
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
    setStatus: (state: AppState, { payload }: PayloadAction<'failOne' | 'failTwo' | 'failThree' | 'success' | null>) => {
      state.status = payload;
    },
  },
});

export default slice.reducer;