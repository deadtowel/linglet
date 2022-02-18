import { configureStore } from '@reduxjs/toolkit';
import setsSlice from './setsSlice';

export const store = configureStore({
  reducer: {
    sets: setsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch