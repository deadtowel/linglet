import { useEffect, useState } from 'react';
import { ISet } from '../types/types';
import { useAppSelector, useAppDispatch } from './useRedux'
import { RootState } from '../redux/store';
import { addSet as addSetAction, deleteSet as deleteSetAction, clearSets as clearSetsAction } from '../redux/setsSlice'

export const useSets = () => {
  const sets = useAppSelector((state: RootState) => state.sets.value)
  const dispatch = useAppDispatch()

  const addSet = (newSet: ISet) => {
    dispatch(addSetAction(newSet));
  }

  const deleteSet = (id: string) => {
    dispatch(deleteSetAction(id));
  }

  const clearSets = () => {
    dispatch(clearSetsAction());
  }

  // useEffect(() => {
  //     localStorage.setItem('sets', JSON.stringify(sets));
  // }, [sets]);

  // useEffect(() => {
  //     setSets(JSON.parse(localStorage.getItem('sets') || '[]'))
  //     console.log('use effect1', shouldUpdateSets);
  //     //dispatch(setShouldUpdateSets(false));
  //     console.log('use effect2', shouldUpdateSets);
  // }, [shouldUpdateSets])

  // const addSet = (newSet: ISet) => {
  //     setSets([...sets, { ...newSet }]);
  // }

  // const deleteSet = (id: string) => {
  //     const filteredSets = sets.filter(set => set.id !== id);
  //     setSets(filteredSets);
  //     //dispatch(setShouldUpdateSets(true));
  //     console.log(shouldUpdateSets);
  // }

  // const clearSets = () => {
  //     setSets([]);
  // }








  return { sets, addSet, deleteSet, clearSets };
}