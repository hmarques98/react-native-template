import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Observable } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { RootStoreType } from '../rootReducer';

type ExampleReducer = {
  globalValue: 'PING' | 'PONG';
};

const initialState: ExampleReducer = {
  globalValue: 'PING',
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    ping: (state) => {
      state.globalValue = 'PING';
    },
    pong: (state) => {
      state.globalValue = 'PONG';
    },
  },
});

export const exampleReducer = exampleSlice.reducer;
export const exampleActions = exampleSlice.actions;
