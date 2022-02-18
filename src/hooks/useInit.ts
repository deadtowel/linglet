import { useEffect } from 'react'
import { initSets } from '../redux/setsSlice'
import { RootState } from '../redux/store';
import { useAppSelector, useAppDispatch } from './useRedux'

export default function useInit() {
  const sets = useAppSelector((state: RootState) => state.sets.value)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initSets(JSON.parse(localStorage.getItem('sets') || '[]')));
  }, [])

  useEffect(() => {
    localStorage.setItem('sets', JSON.stringify(sets));
  }, [sets])

}