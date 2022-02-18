import { useEffect, useState } from 'react';
import { ISet } from '../types/types';
import { useAppSelector, useAppDispatch } from './useRedux'
import { RootState } from '../redux/store';
import { addSet as addSetAction, deleteSet as deleteSetAction, clearSets as clearSetsAction, initSets } from '../redux/setsSlice'

export default function useSets() {
  const sets = useAppSelector((state: RootState) => state.sets.value)
  const dispatch = useAppDispatch()

  const addSet = (newSet: ISet) => {
    dispatch(addSetAction(newSet));
  }

  const editSet = (id: string, editedSet: ISet) => {
    const copiedSets = [...sets];

    const currSetIndex: number = sets.findIndex(set => set.id === id)

    copiedSets.splice(currSetIndex, 1, editedSet);

    dispatch(initSets(copiedSets));
  }

  const deleteSet = (id: string) => {
    dispatch(deleteSetAction(id));
  }

  const clearSets = () => {
    dispatch(clearSetsAction());
  }

  return { sets, addSet, editSet, deleteSet, clearSets };
}
