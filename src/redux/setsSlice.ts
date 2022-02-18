import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISet } from '../types/types';

export interface setsState {
  value: ISet[]
}

const initialState: setsState = {
  value: [],
}

export const setsSlice = createSlice({
  name: 'sets',
  initialState,
  reducers: {
    initSets: (state, action: PayloadAction<ISet[]>) => {
      state.value = [...action.payload];
    },
    addSet: (state, action: PayloadAction<ISet>) => {
      state.value.push(action.payload)
    },
    deleteSet: (state, action: PayloadAction<string>) => {
      state.value = [...state.value.filter(el => action.payload !== el.id)]
    },
    clearSets: (state) => {
      state.value.length = 0;
    },
  },
})

export const { initSets, addSet, deleteSet, clearSets } = setsSlice.actions



export default setsSlice.reducer